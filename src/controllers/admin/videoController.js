import cloudinary from "../../utils/cloudinary.js";
import { Video } from "../../models/video.js";

export const uploadVideo = async (req, res) => {
  try {
    console.log('File received:', req.file); // Log the received file
    
    if (!req.file) {
      console.log("No video file uploaded");
      return res.status(400).json({ message: "No video file uploaded" });
    }

    const videoBuffer = req.file.buffer; // Get the video buffer
    console.log("Uploading video to Cloudinary...");

    // Upload video buffer to Cloudinary
    const result = await cloudinary.uploader.upload_stream(
      {
        resource_type: "video",  // Specify it's a video
        folder: "my_uploads_videos",  // Folder in Cloudinary
      },
      async (error, result) => {
        if (error) {
          console.error("Error uploading to Cloudinary:", error);
          return res.status(500).json({ message: "Upload failed", error: error.message });
        }

        console.log("Cloudinary upload result:", result);

        // Save video metadata to the database
        const video = new Video({
          filename: req.file.originalname,  // Store the original filename
          filepath: result.secure_url,  // Save the Cloudinary URL
          videoUrl: result.secure_url,  // Cloudinary URL
          public_id: result.public_id,  // Cloudinary public ID
          mimetype: req.file.mimetype,  // Video MIME type
        });

        console.log("Saving video to database...");
        await video.save();
        console.log("Video saved to database");

        // Return the response with video details
        res.json({
          message: "Video uploaded successfully",
          videoUrl: result.secure_url,
          videoId: video._id, // Return the saved video ID
        });
      }
    );

    // Pass the buffer to Cloudinary stream
    result.end(videoBuffer);
    
  } catch (error) {
    console.log("Error in uploadVideo:", error);
    res.status(500).json({ message: "Upload failed", error: error.message });
  }
};
