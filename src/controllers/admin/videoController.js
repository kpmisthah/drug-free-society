import cloudinary from "../../utils/cloudinary.js";
import { Video } from "../../models/video.js";

export const uploadVideo = async (req, res) => {
  try {
    // console.log('File received:', req.file); 
    
    if (!req.file) {
      console.log("No video file uploaded");
      return res.status(400).json({ message: "No video file uploaded" });
    }

    const videoBuffer = req.file.buffer;
    console.log("Uploading video to Cloudinary...");

    const result = await cloudinary.uploader.upload_stream(
      {
        resource_type: "video",  
        folder: "my_uploads_videos",  
      },
      async (error, result) => {
        if (error) {
          console.error("Error uploading to Cloudinary:", error);
          return res.status(500).json({ message: "Upload failed", error: error.message });
        }

        console.log("Cloudinary upload result:", result);

  
        const video = new Video({
          filename: req.file.originalname,  
          filepath: result.secure_url,  
          videoUrl: result.secure_url, 
          public_id: result.public_id,  
          mimetype: req.file.mimetype,  
        });

        console.log("Saving video to database...");
        await video.save();
        console.log("Video saved to database");

        res.json({
          message: "Video uploaded successfully",
          videoUrl: result.secure_url,
          videoId: video._id, 
        });
      }
    );
    
    result.end(videoBuffer);
    
  } catch (error) {
    console.log("Error in uploadVideo:", error);
    res.status(500).json({ message: "Upload failed", error: error.message });
  }
};
