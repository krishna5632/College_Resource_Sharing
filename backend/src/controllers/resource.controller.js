import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import fs from "fs";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { Resource } from "../models/resource.model.js";

const uploadResource=asyncHandler(async(req,res)=>{
    if(!req.file){
        throw new ApiError(400,"No file Uploaded")
    }

    const uploadResult=await uploadOnCloudinary(req.file.path);

    if (fs.existsSync(req.file.path)) {
        fs.unlinkSync(req.file.path); // remove temp file
    }

    if(!uploadResource){
        throw new ApiError(500,"Failed to upload file ")
    }

    const resource = await Resource.create({
        title: req.body.title,
        description: req.body.description,
        uploadedBy: req.user._id,   //  link resource to user
        branch: req.body.branch,
        semester: req.body.semester,
        subject: req.body.subject,
        fileUrl: uploadResult.secure_url
    });

    return res.status(201).json(
        new ApiResponse(201, resource, "Resource uploaded successfully")
    );
})


const getAllResources = asyncHandler(async(req,res)=>{

})

const getResourceById = asyncHandler(async(req,res)=>{

    await Resource.findById()
})

const  getUserDownloadedResources=asyncHandler(async(req,res)=>{
    
})
const getUserUploadedResources = asyncHandler(async (req, res) => {
  // Fetch all resources where uploadedBy matches current user
  const resources = await Resource.find({ uploadedBy: req.user._id })
    .sort({ createdAt: -1 }) // newest first
    .populate("uploadedBy", "username email"); // optional: include user info in response

  return res
    .status(200)
    .json(new ApiResponse(200, resources, "User uploaded resources fetched successfully"));
});


const getResourcesByFilter =asyncHandler(async(req,res)=>{
    const {branch,subject,semester,category}=req.body

    const filter={}
    if(branch) filter.branch=branch;
    if(subject) filter.subject=subject;
    if(semester) filter.semester=semester;
    if(category) filter.category=category;


    const resource= await Resource.find(filter).sort({created:-1});

    return res.status(200).json(new ApiResponse(200,resource,"Filter resource successfully"))
    

})


const upvotedResource = asyncHandler(async (req, res) => {
  const resourceId = req.params.id;
  const userId = req.user._id;

  const resource = await Resource.findById(resourceId);
  if (!resource) {
    throw new ApiError(404, "Resource not found");
  }

  // check if user already upvoted
  const hasUpvoted = resource.upvotes.includes(userId);

  if (hasUpvoted) {
    // remove upvote
    await Resource.findByIdAndUpdate(resourceId, {
      $pull: { upvotes: userId },
    });
    return res
      .status(200)
      .json(new ApiResponse(200, {}, "Upvote removed successfully"));
  } else {
    // add upvote
    await Resource.findByIdAndUpdate(resourceId, {
      $addToSet: { upvotes: userId },
    });
    return res
      .status(200)
      .json(new ApiResponse(200, {}, "Resource upvoted successfully"));
  }
});


const downloadResource=asyncHandler(async(req,res)=>{

    const resource = await Resource.findById(req.params.id);

    if(!resource){
        throw new ApiError(404,"Resource not found")
    }

    // increment download count 
    resource.downloads+=1;
    // save the increase download cnt in database 
    await resource.save();

    // provide direct link to user download resources 
    // get file  from cloudnary 
     
    const fileUrl=resource.fileUrl;
    const fileExtension = fileUrl.split(".").pop().split("?")[0];
    const fileName = `${resource.title || "resource"}.${fileExtension}`;


    //  Fetch the file as a stream
    const response = await axios.get(fileUrl, { responseType: "stream" });

    //  Set headers to force download
    res.setHeader("Content-Disposition", `attachment; filename="${fileName}"`);
    res.setHeader("Content-Type", response.headers["content-type"]);

    //     We use Axios to fetch the file from the Cloudinary URL.

    // Normally axios.get() downloads the entire file into memory — not good for large files.

    // But responseType: "stream" means:
    //  “Don’t download it all — give me a live stream of the file data.”

    // That way, the backend doesn’t load the whole file into memory — it just passes chunks as they arrive.

    //  Stream file directly to client 

    response.data.pipe(res)
})

const updateResource =asyncHandler(async(req,res)=>{
    const resource = await Resource.findOneAndUpdate(
    { _id: req.params.id, uploadedBy: req.user._id }, // filter by ID + ownership
    req.body,
    { new: true, runValidators: true } // return updated doc + validate fields
    );

    if (!resource) {
    throw new ApiError(404, "Resource not found or not authorized to update");
    }

    return res
    .status(200)
    .json(new ApiResponse(200, resource, "Resource updated successfully"));

})

const deleteResource=asyncHandler(async(req,res)=>{

    const resource=await Resource.findOneAndDelete({
        _id:req.params.id,
        uploadedBy:req.user._id
    })

    if(!resource){
        throw new ApiError(404,"Resource not found or not authorized to delete")
    }

    return res.status(200).json(new ApiResponse(200,resource,"Resource deleted Successfully!!"))
})


export {

}