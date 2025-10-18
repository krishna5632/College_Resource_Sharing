import mongoose from "mongoose";

const discussionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  tags: [String], // e.g. ["placements", "internship", "resume"]
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  upvotes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  downvotes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  attachments: [String], // store URLs (e.g., resume templates, PDFs)
}, { timestamps: true });

export const Discussion= mongoose.model("Discussion", discussionSchema);
