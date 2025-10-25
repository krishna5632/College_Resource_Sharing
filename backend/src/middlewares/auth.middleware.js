import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";

import { User } from "../models/"; 

 const verifiyjwt =asyncHandler(async(req,res,next)=>{
  try {

        // get the tooken from the cookies which we send  or from header 

        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");

        //req.header("Authorization")?.replace("Bearer ", "");-->this is for mobile app or postman were we cant send cookies we can send token in the header
        if(!token){
            throw new ApiError(401,"Unauthorized request")
        }

        // if token exist then verify that is this correct token 
        
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    // if verification is 

        const user = await User.findById(decodedToken?._id).select("-password -refreshToken")

        if (!user) {
            
            throw new ApiError(401, "Invalid Access Token")
        }

        req.user = user; // attach user to req object for further use in the next middleware or route handler
        next();
    } catch (error) {
        throw new ApiError(401,"Unauthorized request")
    }
})


export {verifiyjwt}