import mongoose,{Schema} from "mongoose";


const resourceSchema=new Schema({
  title:{type:String,required:true},
  description:String,
  fileUrl:String,// Cloudinary/Firebase URL
  linkUrl:String,// Optional external link
  subject:String,
  branch:String,
  semester:Number,
  category: { type: String, enum: ["notes", "assignment", "question paper", "lab manual", "other"], default: "notes" },
  uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  upvotes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  downloads: { type: Number, default: 0 },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
  ratings: [{ type: mongoose.Schema.Types.ObjectId, ref: "Rating" }],

},{timestamps:true})

export const Resource=mongoose.model("Resource",resourceSchema);