import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  resource: { type: mongoose.Schema.Types.ObjectId, ref: "Resource" },
  discussion: { type: mongoose.Schema.Types.ObjectId, ref: "Discussion" }, // optional
  parentComment: { type: mongoose.Schema.Types.ObjectId, ref: "Comment" }, // for deeper nesting
  attachmentUrl: String, 
  upvotes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  replies: [{ 
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    text: String,
    attachmentUrl: String,
    createdAt: { type: Date, default: Date.now }
  }]
}, { timestamps: true });


export const Comment= mongoose.model("Comment", commentSchema);
