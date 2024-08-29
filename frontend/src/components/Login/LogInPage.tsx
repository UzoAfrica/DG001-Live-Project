import React from 'react';
import {
  AuthContainer,
  Container,
  BackgroundImage,
  FormContainer,
  Logo,
  Title,
  InputField,
  Label,
  Input,
  SignUpButton,
  Separator,
  SeparatorHr,
  SeparatorSpan,
  GoogleSignUp,
  Footer,
} from './StyledLogIn';
import { Link, useNavigate } from 'react-router-dom';
import googleLogo from '../../images/download.png';

const LogIn: React.FC = () => {
  const navigate = useNavigate();

  const handleSignUpLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();
    navigate('/signup');
  };

  return (
    <AuthContainer>
      <Container>
        <BackgroundImage />
        <FormContainer>
          {/* Use the correct path or import the image */}
          <Logo src="./src/images/logo-removebg-preview.png" alt="Logo" />
          <Title>Welcome back to Traidr</Title>
          <form>
            <InputField>
              <Label htmlFor="username">Username</Label>
              <Input
                type="text"
                id="username"
                placeholder="Enter your username"
              />
            </InputField>
            <InputField>
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="password"
                placeholder="Enter your password"
              />
            </InputField>
            {/* Use Link from react-router-dom */}
            <Link
              to="/forgot-password"
              style={{
                textDecoration: 'none',
                color: '#ff6600',
                fontWeight: 'bold',
              }}
            >
              Forgot Password?
            </Link>
            <Separator>
              <SeparatorHr />
              <SeparatorSpan>OR</SeparatorSpan>
              <SeparatorHr />
            </Separator>
            <GoogleSignUp>
              <img src={googleLogo} alt="Google Logo" />
              Log in with Google
            </GoogleSignUp>
            <SignUpButton type="submit">LOG IN</SignUpButton>
          </form>
          <Footer>
            Don't have an account?{' '}
            <a href="#" onClick={handleSignUpLinkClick}>
              Sign Up here
            </a>
          </Footer>
        </FormContainer>
      </Container>
    </AuthContainer>
  );
};

export default LogIn;
