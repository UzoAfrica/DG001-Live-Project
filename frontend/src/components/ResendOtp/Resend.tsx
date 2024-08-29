import React, { useState, useRef } from 'react';
import {
  BackImg,
  ResetPass,
  StyledDiv,
  StyledIcon,
  StyledOne,
  StyledOtpBox,
  StyledOtpFlex,
  StyledResetContainer,
  StyledString,
  StyledTwo,
} from '../StyleCompo';
import api from '../utils/Api';
import { useNavigate } from 'react-router-dom';

// import axios from 'axios';

export default function ResentOtp() {
  // State to track OTP values
  const [otp, setOtp] = useState<string[]>(Array(4).fill(''));
  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);

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
  const handleSubmit = async (e) => {
    // Handle the OTP submission
    e.preventDefault();
    try {
      if (otp.length < 4) {
        alert('Please input complete OTP');
      }
      const newOTP = otp.join('');
      const response = await api.post('/api/reset/verify-otp', {
        otp: newOTP,
      });
      console.log(response);
      alert('OTP successfully verified');
      navigate('/login');
    } catch (err) {
      console.error('Error verifying OTP', err);
      // setErrorMessage('Error verifying OTP. Please try again.');
    }

    console.log('Submitted OTP:', otp.join(''));
  };

  const handleResend = async (e) => {
    // Handle the OTP submission
    e.preventDefault();
    try {
      const email = localStorage.getItem('email');
      const response = await api.post('/api/reset/resend-otp', {
        email,
      });
      console.log(response);
      alert('OTP successfully resent');
    } catch (err) {
      console.error('Error verifying OTP', err);
      // setErrorMessage('Error verifying OTP. Please try again.');
    }

    console.log('Submitted OTP:', otp.join(''));
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
            <StyledOne onClick={handleSubmit} disabled={isButtonDisabled}>
              Submit OTP
            </StyledOne>
            <StyledTwo onClick={handleResend}>Resend OTP</StyledTwo>
          </StyledDiv>
        </ResetPass>
      </StyledResetContainer>
    </BackImg>
  );
}
