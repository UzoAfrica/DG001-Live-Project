// import { Request, Response } from 'express';
// import { resendOTPSchema, changePasswordSchema } from '../validators/reset.validator';
// import User from "../database/models/user.model";
// import OTP from '../database/models/otp.model';
// import sendEmail from "../utils/my-email.util";

// export const resendOTP = async (req: Request, res: Response) => {
//   // Validation Error
//   const { error } = resendOTPSchema.validate(req.body);
//   if (error)
//     return res
//       .status(400)
//       .json({ message: error.details[0].message, data: null });
// };

// export const verifyOTP = async (req: Request, res: Response) => {};

// export const changePassword = async (req: Request, res: Response) => {};
