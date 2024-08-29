import React, { useState } from 'react';
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
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    if (id === 'username') {
      setUsername(value);
    } else if (id === 'password') {
      setPassword(value);
    }
  };

  const handleSignUpLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();
    navigate('/signup');
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const payload = {
      username,
      password,
    };

    try {
      const response = await fetch('http://localhost:5001/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Failed to log in');
      }

      const data = await response.json();
      console.log('Logged in successfully:', data);
      navigate('/dashboard');
    } catch (error) {
      console.error('Error logging in:', error);
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <AuthContainer>
      <Container>
        <BackgroundImage />
        <FormContainer>
          <Logo src="./src/images/logo-removebg-preview.png" alt="Logo" />
          <Title>Welcome back to Traidr</Title>
          <form onSubmit={handleSubmit}>
            <InputField>
              <Label htmlFor="username">Username</Label>
              <Input
                type="text"
                id="username"
                placeholder="Enter your username"
                value={username}
                onChange={handleInputChange}
              />
            </InputField>
            <InputField>
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={handleInputChange}
              />
            </InputField>
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
          {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
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
