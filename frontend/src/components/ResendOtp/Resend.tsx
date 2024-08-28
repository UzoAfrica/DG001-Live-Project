import {
  FloatLeft,
  ResetPass,
  StyledDiv,
  StyledIcon,
  StyledInput,
  StyledOne,
  StyledResetContainer,
  StyledTwo,
} from '../StyleCompo';

export default function ResentOtp() {
  return (
    <StyledResetContainer>
      <StyledIcon></StyledIcon>
      <ResetPass>
        <FloatLeft htmlFor="password">Enter Otp</FloatLeft>
        <StyledInput placeholder="* * * *" />
        <StyledDiv>
          <StyledOne>Enter OTP</StyledOne>
          <StyledTwo>Resend OTP</StyledTwo>
        </StyledDiv>
      </ResetPass>
    </StyledResetContainer>
  );
}
