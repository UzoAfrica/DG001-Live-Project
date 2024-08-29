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
// import axios from 'axios';

export default function ResentOtp() {
  // State to track OTP values
  const [otp, setOtp] = useState<string[]>(Array(6).fill(''));
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

  // Handler for form submit
  const handleSubmit = () => {
    // Handle the OTP submission
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
            <StyledTwo>Resend OTP</StyledTwo>
          </StyledDiv>
        </ResetPass>
      </StyledResetContainer>
    </BackImg>
  );
}
