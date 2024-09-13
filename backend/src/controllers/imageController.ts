import User from '../database/models/user.model';
import cloudinary from '../config/cloudinary';
import {Request, Response} from 'express';


export const updateImage = async (req: Request, res: Response) => {

    const { id } = req.params;

    try {
        const user = await User.findByPk(id);

        if (!user) return res.status(404).json({ message: 'User not found' });
        const result = await cloudinary.uploader.upload(req.file!.path);

        await user.update({ profileImage: result.secure_url });

        res.status(201).json({ success: true, message: 'Image uploaded', imageUrl: result.secure_url });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Failed to upload image' });
    }
};




export const uploadImage = async (req: any, res: any) => {
    try {
        const result = await cloudinary.uploader.upload(req.file.path);

        res.status(200).json({ success: true, message: 'Image uploaded successfully', imageUrl: result.secure_url });
    } catch (err) {
        console.error();
    }
};