import mongoose,{Schema}from "mongoose"

const videoSchema = new Schema({
  filename: { type: String, required: true },
  filepath: { type: String, required: true },
  videoUrl: { type: String, required: true },
  public_id: { type: String, required: true }, 
  mimetype: { type: String }, 
}, { timestamps: true }); 


export const Video = mongoose.model("Video", videoSchema);


