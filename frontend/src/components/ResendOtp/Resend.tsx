import React, { useState, useRef } from 'react';
import {
  BackImg,
  ResetPass,
  StyleImg,
  StyledDiv,
  StyledIcon,
  StyledOne,
  StyledOtpBox,
  StyledOtpFlex,
  StyledResetContainer,
  StyledString,
  StyledTwo,
} from '../StyleCompo';
import Logo from '../../images/logo-removebg-preview.png';
import { useNavigate } from 'react-router-dom';
import { showErrorToast, showSuccessToast } from '../utils/toastify';
import {
  otpResendFunction,
  otpVerificationFunction,
} from '../../axiosFolder/functions/userAuth';

export default function ResentOtp() {
  const [otp, setOtp] = useState<string[]>(Array(4).fill(''));
  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [resetLoading, setResetLoading] = useState(false);
  const [resetVerificationLoading, setResetVerificationLoading] =
    useState(false);

  const navigate = useNavigate();

  const handleOtpChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    let value = event.target.value;
    if (!/^\d$/.test(value)) {
      value = '';
    }

    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    if (value.length === 1 && index < otpRefs.current.length - 1) {
      otpRefs.current[index + 1]?.focus();
    } else if (value.length === 0 && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      setResetVerificationLoading(true);
      if (otp.length < 4) {
        setResetVerificationLoading(false);
        setOtp(Array(4).fill(''));
        return showErrorToast('Please enter a valid OTP');
      }
      const newOTP = otp.join('');
      const response = await otpVerificationFunction({ otp: newOTP });

      if (response.status !== 200) {
        setResetVerificationLoading(false);
        setOtp(Array(4).fill(''));
        return showErrorToast(response.data.message);
      }
      setResetVerificationLoading(false);
      showSuccessToast(response.data.message);
      setOtp(Array(4).fill(''));
      return navigate('/login');
    } catch (err: unknown) {
      // Changed 'any' to 'unknown'
      console.error('Error verifying OTP', err);
      setResetVerificationLoading(false);
      setOtp(Array(4).fill(''));

      // Check if 'err' is an instance of Error before accessing 'message'
      if (err instanceof Error) {
        return showErrorToast(err.message);
      } else {
        return showErrorToast('An unexpected error occurred');
      }
    }
  };

  const handleResend = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      setResetLoading(true);
      const email = localStorage.getItem('email');
      const response = await otpResendFunction({ email: email });
      if (response.status !== 200) {
        setResetLoading(false);
        return showErrorToast(response.data.message);
      }

      setResetLoading(false);
      return showSuccessToast(response.data.message);
    } catch (err) {
      console.error('Error verifying OTP', err);
      setResetLoading(false);
    }
  };

  const isButtonDisabled = otp.some((value) => value.length === 0);

  return (
    <BackImg>
      <StyledResetContainer>
        <StyleImg src={Logo} alt="logotraidr" />
        <StyledIcon />
        <StyledString>Enter OTP</StyledString>
        <ResetPass>
          <StyledOtpFlex>
            {Array.from({ length: 4 }).map((_, index) => (
              <StyledOtpBox
                key={index}
                ref={(el) => (otpRefs.current[index] = el)}
                type="text"
                maxLength={1}
                onChange={(event) => handleOtpChange(event, index)}
                value={otp[index]}
                disabled={false}
              />
            ))}
          </StyledOtpFlex>
          <StyledDiv>
            <StyledOne
              onClick={(e: React.FormEvent<HTMLButtonElement>) =>
                handleSubmit(e)
              }
              disabled={isButtonDisabled}
            >
              {resetVerificationLoading ? 'Loading...' : 'Submit OTP'}
            </StyledOne>
            <StyledTwo
              onClick={(e: React.FormEvent<HTMLButtonElement>) =>
                handleResend(e)
              }
            >
              {resetLoading ? 'Loading...' : 'Resend OTP'}
            </StyledTwo>
          </StyledDiv>
        </ResetPass>
      </StyledResetContainer>
    </BackImg>
  );
}
