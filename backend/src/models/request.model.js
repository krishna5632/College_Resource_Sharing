import mongoose,{Schema} from "mongoose";

const requestSchema= new Schema({
    title:{type:String,required:true},
    description: { type: String },
    requestedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    branch: { type: String }, // optional
    semester: { type: String }, // optional
    tags: [String],

    // when some fulfilled the request
    fulfilled: { type: Boolean, default: false },
    fulfilledBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    fileUrl: String, // optional if fulfilled
    upvotes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }]
},{timestamps:true})


export const Request=mongoose.model("Request",requestSchema) 