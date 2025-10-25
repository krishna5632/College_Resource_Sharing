import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.model.js";
import fs from "fs";
import { uploadOnCloudinary } from "../utils/cloudinary.js";


// get profile 
const getUserProfile = asyncHandler( async (req,res)=>{
    const user=await User.findById(req.user._id)

    if(!user){
        throw new ApiError(404,"User not found")
    }

    return res.status(200).json(
        new ApiResponse(200,user,"User fetched successfully")
    )


})


// update profile 

const updateUserProfile=asyncHandler (async(req,res)=>{
    const user=await User.findByIdAndUpdate(
        {_id:req.user._id},
        req.body,
        {new:true,runValidators:true}
    ).select("-password -refreshToken");  // ✅ optional: hide sensitive fields

    if(!user){
        throw new ApiError(404,"User not found")
    }

    return res.status(200).json(
        new ApiResponse(200,user,"User updated successfully")
    )
})


// upload profile picture
const uploadProfilePicture =asyncHandler(async(req,res)=>{
    let profileUrl;

    if(req.file){
       const uploadResult =await uploadOnCloudinary(req.file.path);

       // user uploaded file → upload to cloudinary
       if(uploadResult){
        profileUrl=uploadResult.secure_url;
       }

       // remove temp file
       if(fs.existsSync(req.file.path)){
           fs.unlinkSync(req.file.path);
       }

    }

        // only update avatar if a new one was uploaded
        const updateData = {};
        if (profileUrl) updateData.avatar = profileUrl;



    const user = await User.findByIdAndUpdate(
       req.user._id,
        updateData ,
       { new: true }
    );


    return res.status(200).json(
        new ApiResponse(200,user,"User profile updated successfully")
    )


})


export {
    getUserProfile,
    updateUserProfile,
    uploadProfilePicture
}