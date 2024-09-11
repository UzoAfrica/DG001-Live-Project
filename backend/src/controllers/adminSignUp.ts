import {Request, Response, NextFunction} from 'express';
import { User } from '../database';
import { adminSchema } from '../validators/admin.validator';
import bcrypt from 'bcrypt';

export const adminSignUp = async (req: Request, res: Response, next: NextFunction) => {

    try{

    const { error } = adminSchema.validate(req.body);

    if(error){
        return res.status(400).json({ error: error.details[0].message})

    }

    const { name, email, password, referralSource} = req.body;
 

        const existingUser = await User.findOne({
            where: {email}
        })

        if(existingUser){
            return res.status(409).json({ message: 'User already exists'})
    }

    const hashedPassword = await bcrypt.hash(password, 10)

   const admin = await User.create({
       name,
       email,
       password: hashedPassword ,
       referralSource,
       role: 'admin',
       isVerified: true
   });

   res.status(201).json({ message: 'Admin created successfully', admin: admin });

    }catch(error : any){
        console.error(`Error in creating an admin`, error)
        return res.status(500).json({ error: 'Internal server error' });
    }
};