import { Request, Response, NextFunction} from 'express';
import  { updateProfileSchema} from '../validators/profile.validator';
import User from '../database/models/user.model';
import bcrypt from 'bcrypt';
import cloudinary from '../config/cloudinary';


type User={
   name?: string;
   email?: string;
   address?: string;
   mobileNumber?: string;

}
export const updateProfile = async (req: Request, res: Response, next: NextFunction) => {          
    try { 
        const id = req.params.id
        const userProfile = await User.findByPk(id);        
        if (!userProfile) {            
            return res.status(404).json({ error: 'Profile not found' });        
        }   
        //name, email, address, mobileNumber
        const updatedData : User = {};

        if(req.body.name !== ''){
            updatedData.name = req.body.name
        }
        if(req.body.email !== ''){
            updatedData.email = req.body.email
        }
        if(req.body.address !== ''){
            updatedData.address = req.body.address
        }
        if(req.body.mobileNumber !== ''){
            updatedData.mobileNumber = req.body.mobileNumber
        }
        await userProfile.update(updatedData);
        return res.status(200).json({ message: 'Profile updated successfully', profile: userProfile });    
    } catch (err) {        
        console.error("Error during profile update:", err);        
        return res.status(500).json({ error: 'Something went wrong during the update.' });    
    }};




export const changePassword = async (req: Request, res: Response) => {

    try {

        const { id } = req.params;

    const { currentPassword, newPassword } = req.body;

        const user: any = await User.findByPk(id);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const isMatch = await bcrypt.compare(currentPassword, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: 'Password is incorrect' });
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);

        await user.update({ password: hashedPassword });

        return res.status(200).json({ message: 'Password changed successfully' });
    } catch (error) {
        return res.status(500).json({ message: 'Error changing password', error });
    }
};
