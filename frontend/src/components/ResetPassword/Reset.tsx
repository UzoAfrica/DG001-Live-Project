import { useNavigate } from 'react-router-dom';
import {
  BackImg,
  StyledResetContainer,
  StyledInfo,
  ResetPass,
  FloatLeft,
  StyledInput,
  StyledButton,
  StyleImg,
  StyledTwin,
  Styledp,
  StyledSign,
} from '../StyleCompo';
import Logo from '../../images/logo-removebg-preview.png';

export default function Reset() {
  const navigate = useNavigate();
  return (
    <BackImg>
      <StyledResetContainer>
        <StyleImg src={Logo} alt="logotraidr" />
        <StyledInfo>Reset password</StyledInfo>

        <ResetPass>
          <FloatLeft htmlFor="password">Password</FloatLeft>
          <StyledInput type="password" placeholder="" />

          <FloatLeft htmlFor="Confirm Password">Confirm Password</FloatLeft>
          <StyledInput type="password" placeholder="" />

          <StyledButton type="submit">Confim Password</StyledButton>
          <StyledTwin>
            <Styledp>go back to</Styledp>
            <StyledSign onClick={() => navigate('/resend')}>Sign Up</StyledSign>
          </StyledTwin>
        </ResetPass>
      </StyledResetContainer>
    </BackImg>
  );
}
