import mongoose,{Schema} from "mongoose";

const ratingSchema=new Schema({
    user:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
    resource:{type:mongoose.Schema.Types.ObjectId,ref:"Resource"},
    feedback: { type: String, enum: ["Helpful", "Outdated", "Excellent", "Average", "Incomplete"] },
},{timestamps:true})


export const Rating =mongoose.model("Rating",ratingSchema)