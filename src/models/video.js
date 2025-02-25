import mongoose,{Schema}from "mongoose"

// Define the video schema
const videoSchema = new Schema({
  filename: { type: String, required: true },
  filepath: { type: String, required: true },
  videoUrl: { type: String, required: true },
  public_id: { type: String, required: true }, // Cloudinary public ID
  mimetype: { type: String }, // MIME type (optional)
}, { timestamps: true }); // Automatically add createdAt and updatedAt fields

// Create the model based on the schema
export const Video = mongoose.model("Video", videoSchema);


