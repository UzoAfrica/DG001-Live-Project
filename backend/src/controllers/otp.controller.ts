import { Request, Response } from 'express';
import otpGenerator from 'otp-generator';
import OTP from '../models/otp.model';
import User from '../models/User.Model';

export const sendOTP = async (req: Request, res: Response): Promise<void> => {

    // Update the result variable to check the new OTP
    const result = await OTP.findOne({ otp });
    try {
        const { email } = req.body;

        // Check if user is already present
        const checkUserPresent = await User.findOne({ email });
        if (checkUserPresent) {
            res.status(401).json({
                success: false,
                message: 'User is already registered',
            });
            return;
        }

        let otp;
        let attempts = 0;
        const maxAttempts = 5; // Limit the number of attempts to generate a unique OTP

        do {
            otp = otpGenerator.generate(6, {
                upperCaseAlphabets: false,
                lowerCaseAlphabets: false,
                specialChars: false,
            });
            attempts++;
        } while (result && attempts < maxAttempts);

        if (attempts === maxAttempts) {
            res.status(500).json({
                success: false,
                message: 'Unable to generate a unique OTP after multiple attempts',
            });
            return;
        }

        const otpPayload = { email, otp };
        await OTP.create(otpPayload);

        res.status(200).json({
            success: true,
            message: 'OTP sent successfully',
            otp,
        });
    } catch (error: any) {
        console.error('Error sending OTP:', error);
        res.status(500).json({ success: false, error: error.message });
    }
};
