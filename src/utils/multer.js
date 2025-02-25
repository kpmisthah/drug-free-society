import multer from 'multer';
// import path from 'path';  // Add path import

// // Set up Multer storage configuration
const storage = multer.memoryStorage(); // Use memory storage for file buffer
const upload = multer({ storage: storage });
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     // Where you want to store the uploaded files
//     cb(null, 'src/uploads/videos/'); // 'uploads/videos/' is the folder to store files
//   },
//   filename: (req, file, cb) => {
//     // Set the file name format (timestamp to avoid conflicts)
//     cb(null, Date.now() + path.extname(file.originalname)); // Use path.extname() to keep original file extension
//   }
// });


// // Set up file filter to accept only video files
// const fileFilter = (req, file, cb) => {
//   // Accept only video files (video/* mime type)
//   if (file.mimetype.startsWith('video/')) {
//     cb(null, true); // Accept the file
//   } else {
//     cb(new Error('Invalid file type. Only videos are allowed!'), false);
//   }
// };

// // Initialize Multer with storage and file filter
// const upload = multer({
//   storage: storage,
//   fileFilter: fileFilter,
//   limits: { fileSize: 50 * 1024 * 1024 } // Set file size limit to 50 MB
// });
// console.log("cur")
// console.log("Multer setup complete");
export default upload;
