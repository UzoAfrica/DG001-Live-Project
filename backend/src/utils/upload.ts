import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';
import '../config/cloudinary.config';

// Multer configuration for handling file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Function to upload an image to Cloudinary
export const uploadImage = async (
  file: Express.Multer.File
): Promise<string> => {
  if (!file) {
    throw new Error('No file provided');
  }
  try {
    const result = await cloudinary.uploader.upload(file.path, {
      folder: 'ecommerce/images',
    });
    return result.secure_url;
  } catch (error) {
    console.error('Error uploading image to Cloudinary:', error);
    throw error;
  }
};

// Function to upload a video to Cloudinary
export const uploadVideo = async (
  file: Express.Multer.File
): Promise<string> => {
  if (!file) {
    throw new Error('No file provided');
  }
  try {
    const result = await cloudinary.uploader.upload(file.path, {
      resource_type: 'video',
      folder: 'ecommerce/videos',
    });
    return result.secure_url;
  } catch (error) {
    console.error('Error uploading video to Cloudinary:', error);
    throw error; 
  }
};

// Function to delete resources (images/videos) from Cloudinary
export const deleteResources = async (publicIds: string[]): Promise<void> => {
  if (!publicIds || publicIds.length === 0) {
    console.warn('No resources provided for deletion');
    return;
  }
  try {
    await cloudinary.api.delete_resources(publicIds);
  } catch (error) {
    console.error('Error deleting resources from Cloudinary:', error);
    throw error;
  }
};

export default upload;
