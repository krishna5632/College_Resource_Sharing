import {User} from "../models/user.model.js"
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken"
import { uploadOnCloudinary } from "../utils/cloudinary.js";
const generateAccessAndRefreshToken = async(userId)=>{
    try {
        const user = await User.findById(userId)

        // here we forget to put await which throw the error like--> unauthorized access token
        const accessToken = await user.generateAccessToken()
         const refreshToken = await user.generateRefreshToken()

        user.refreshToken = refreshToken

        // we have to save the refresh token in the database
        await user.save({validateBeforeSave:false})

        return {accessToken,refreshToken}
        
    } catch (error) {
        throw new ApiError(501,"somethings went wrong in token generation ")
    }
}
// user register logic 

const registerUser =asyncHandler(async (req,res)=>{ 
    
    const {username,password,email,branch,year,role}=req.body;
    console.log(username,email,password,branch,year,role);

    // every field is must required 

    if(
        [email,username,password,branch,year,role].some((field) => field?.trim()==="")
    ){
        throw new ApiError(400,'All fields are required')
    }

    // check if user already exists 
    // to check we have to query the database

    const exisitingUser = await User.findOne(
        {
            $or:[
                {username},
                {email}
            ]
        }
    )

    if(exisitingUser){
        throw new ApiError(409,'User Already Exists')
        // we can also do if user exit we directly login  the user
    }

    // if user not exist we will create the user 


    // handle avatar image 
    let avatarUrl=null;
    if(req.file){
        const uploaded= await uploadOnCloudinary(req.file.path);
        avatarUrl = uploaded?.secure_url || null;
    }

    const user = await User.create(
        {
            username:username.toLowerCase(),
            email,
            password,
            branch,
            year,
            role,
            avatar:avatarUrl

        }
    )
       //removing password and refreshToken from reponse to 
    const createdUser =await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if(!createdUser){
        throw new ApiError("500","Something went wrong while registering the user ")
    }


    return res.status(201).json(
        new ApiResponse(200, createdUser, "User registered successfully")
    )

    
})


const loginUser =asyncHandler(async(req,res)=>{


    const {identifier,password}= req.body;

    if(!identifier){
        throw new ApiError(400,"Identifier is required to Login")
    }

    // check if identifier is an email (contains @)
     const isEmail = identifier.includes("@");

  // build query accordingly
    const query = isEmail
    ? { email: identifier }
    : { username: identifier };

    const user =await User.findOne(query)

  if(!user){
    throw new ApiError(404,"User not found ")
  }

  //if we got the user then we have to check the the enter password is correct or not 

  // we already made a method in user model to check te password is correct or not 
  // difference between user and User is  user is instance of User Model and User is the model
  //  so 
  // what are the method we create in the user model 
  // we can access that method with the help of instance 
  
  //user.
    const isPasswordValid=await user.isPasswordCorrect(password)

    if(!isPasswordValid){
      throw new ApiError(401,"Invalid Credentials")
    }

    // if password is correct then we have to generate access token and refresh token 

    // we already create the method to generate access token and refresh token
    // in the user model

      // actually we are 

      const {accessToken , refreshToken} =await generateAccessAndRefreshToken(user._id)

      
      const loggedInUser = await User.findById(user._id).select(
        "-password -refreshToken"
      )
      
      // last work is send cookies to the user 


      // to send the cookies we have to define some option 

            const isProd = process.env.NODE_ENV === 'production'
            const option = {
                httpOnly: true,
                secure: isProd,
                sameSite: 'lax',
                path: '/',
                maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
            }

            return res
            .status(200)
            .cookie("refreshToken", refreshToken, option)
            .cookie("accessToken", accessToken, option)
      .json(
          new ApiResponse(
            200,
            {
              user:loggedInUser,accessToken,refreshToken // depending on the requirement we can send or not 
            },
            "User Logged in SuccessFully"
          )
      )

})

const logoutUser =asyncHandler( async(req,res)=>{
    await User.findByIdAndUpdate(
        req.user._id,// we get the user id from the verifyjwt middleware
        {
            $unset: {
                refreshToken: 1 // this removes the field from document
            }
        },
        {
            new: true
        }
    )

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "User logged Out"))
})

const refreshAccessToken = asyncHandler( async (req, res) =>{
     const incomingRefreshToken = req.cookies?.refreshToken || req.body?.refreshToken

     if(!incomingRefreshToken){
       throw new ApiError(401,"Invalid request ,no refresh token")
      }

    try {
          const decodedToken = jwt.verify(
                incomingRefreshToken,
                process.env.REFRESH_TOKEN_SECRET
          ) //   
          const user = await User.findById(decodedToken?._id)

          if (!user) {
              throw new ApiError(401, "Invalid refresh token")
          }
          if (incomingRefreshToken !== user?.refreshToken) {
              throw new ApiError(401, "Refresh token is expired or used")
              
          }

            const options = {
                httpOnly: true,
                secure: true
            }
        
            const {accessToken, newRefreshToken} = await generateAccessAndRefereshTokens(user._id)
        
            return res
            .status(200)
            .cookie("accessToken", accessToken, options)
            .cookie("refreshToken", newRefreshToken, options)
            .json(
                new ApiResponse(
                    200, 
                    {accessToken, refreshToken: newRefreshToken},
                    "Access token refreshed"
                )
            )
    } catch (error) {
      throw new ApiError(401,error.message || "Invalid refresh token ")
    }
    
})
const changePassword =asyncHandler( async(req,res) =>{

   // steps to change the password 
   // get the user id from the verifyjwt middleware 
   // get the old password and new password from the req.body 
   // check the old password is correct or not 
   // if correct then hash the new password and update the user document
   // send the user response 


   const {oldPassword ,newPassword} =req.body;

   if(!(oldPassword || newPassword)){
    throw new ApiError(400,"All Fileds are required")
   }

   // firstly we have to find the user with the help of user id which 
   // e get from verifiyjwt a middleware

    const user = await User.findById(req.user?._id)
   // check the old password is correct or not

   const isOldPasswordCorrect = await user.isPasswordCorrect(oldPassword)

   if(!isOldPasswordCorrect){
    throw new ApiError(401,"old password is incorrect ")
   }


   // if old password is correct then we have to hash the new password

    user.password = newPassword;

    // then we have to save the user docement because we modify the user document 
     await user.save({validateBeforeSave:false})

     return req
     .status(200)
     .json(new ApiResponse(200,{},"password change succesfully "))


})

const getCurrentUser = asyncHandler( async(req,res)=>{
  return req
  .status()
  .json(new ApiResponse(200,req.user,"Current user sccessfully fetch"))//
})

export {
    registerUser,
    loginUser,
    logoutUser,
    refreshAccessToken,
    changePassword,
    getCurrentUser
 
}