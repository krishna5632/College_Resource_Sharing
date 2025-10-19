import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import {User} from "../models/user.model.js"


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

const 


export {getUserProfile,updateUserProfile}