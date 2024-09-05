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

// import axios from 'axios';

export default function ResentOtp() {
  // State to track OTP values
  const [otp, setOtp] = useState<string[]>(Array(4).fill(''));
  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);

  const [resetLoading, setResetLoading] = useState(false);
  const [resetVerificationLoading, setResetVerificationLoading] =
    useState(false);

  // Handler for key up events
  const handleOtpChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const target = event.target as HTMLInputElement;
    let value = target.value;
    // Only allow digits
    // Only allow digits
    if (!/^\d$/.test(value)) {
      value = ''; // Clear if input is not a digit
    }
    // Clear if input is not a digit

    // Update OTP state
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    // Move to next input if current value has a length of 1
    if (value.length === 1 && index < otpRefs.current.length - 1) {
      otpRefs.current[index + 1]?.focus();
    } else if (value.length === 0 && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };
  //   const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     const value = parseInt(event.target.value);
  //     setAmount(value);
  // };

  const navigate = useNavigate();
  // Handler for form submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // Handle the OTP submission
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
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error('Error verifying OTP', err);
      setResetVerificationLoading(false);
      setOtp(Array(4).fill(''));
      return showErrorToast(err.message);
    }
  };

  const handleResend = async (e: React.FormEvent<HTMLFormElement>) => {
    // Handle the OTP submission
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
      return setResetLoading(false);
      // setErrorMessage('Error verifying OTP. Please try again.');
    }
  };

  // Check if all OTP fields are filled
  const isButtonDisabled = otp.some((value) => value.length === 0);

  // const fetchDate = async()=>{
  //   axios.post("http://localhost:5001/api/reset/resend-otp").then(response =>{
  //     console.log()
  //   })
  // }

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
                max={1}
                // onChange={}
                onChange={(event) => handleOtpChange(event, index)}
                value={otp[index]}
                disabled={false}
              />
            ))}
          </StyledOtpFlex>
          <StyledDiv>
            {/*eslint-disable-next-line @typescript-eslint/no-explicit-any*/}
            <StyledOne
              onClick={(e: any) => handleSubmit(e)}
              disabled={isButtonDisabled}
            >
              {resetVerificationLoading ? 'Loading...' : 'Submit OTP'}
            </StyledOne>
            {/*eslint-disable-next-line @typescript-eslint/no-explicit-any*/}
            <StyledTwo onClick={(e: any) => handleResend(e)}>
              {resetLoading ? 'Loading...' : 'Resend OTP'}
            </StyledTwo>
          </StyledDiv>
        </ResetPass>
      </StyledResetContainer>
    </BackImg>
  );
}
