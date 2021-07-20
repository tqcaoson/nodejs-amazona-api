import express from 'express';
import { upload } from '../build/uploadStore.js'
import { postUpload } from '../controllers/uploadController.js'

const router = express.Router();

router.post('/', upload.single('image'), postUpload);

export default router; 
