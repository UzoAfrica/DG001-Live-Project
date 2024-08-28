import { useNavigate } from 'react-router-dom';
import {
  BackImg,
  StyledResetContainer,
  StyledInfo,
  ResetPass,
  FloatLeft,
  StyledInput,
  StyledButton,
} from '../StyleCompo';
import Logo from '../images/Group.png';

export default function Reset() {
  const navigate = useNavigate();
  return (
    <BackImg>
      <StyledResetContainer>
        <img src={Logo} alt="logotraidr" />
        <StyledInfo>Reset password</StyledInfo>

        <ResetPass>
          <FloatLeft htmlFor="password">Password</FloatLeft>
          <StyledInput type="password" placeholder="" />

          <FloatLeft htmlFor="Confirm Password">Confirm Password</FloatLeft>
          <StyledInput type="password" placeholder="" />

          <StyledButton type="submit">Send Rest Instructions</StyledButton>
        </ResetPass>
        <div onClick={() => navigate('/resend')}>Sign Up</div>
      </StyledResetContainer>
    </BackImg>
  );
}
