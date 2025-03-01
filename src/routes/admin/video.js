import express from 'express';
import upload from '../../utils/multer.js';
import { uploadVideo } from '../../controllers/admin/videoController.js';

const router = express.Router();

router.post('/upload-video', upload.single('video'), uploadVideo);

export default router;
