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
import { showErrorToast, showSuccessToast } from '../utils/toastify';
import { loginFunction } from '../../axiosFolder/functions/userAuth';
import GoogleLoginButton from '../GoogleAuth/GoogleLoginButton';

const LogIn: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignUpLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();
    navigate('/signup');
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      setLoading(true);

      const payload = {
        email: formData.email,
        password: formData.password,
      };

      const response = await loginFunction(payload);

      if (response.status !== 200) {
        setLoading(false);
        return showErrorToast(response.data.message);
      }
      setLoading(false);
      localStorage.setItem('token', response.data.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.data.user));
      localStorage.setItem('userId', JSON.stringify(response.data.data.userId));
      localStorage.setItem('userEmail', formData.email);

      showSuccessToast(response.data.message);

      return navigate('/product-page');
    } catch (error: any) {
      console.error('Error logging in:', error);
      setLoading(false);
      return showErrorToast(error.message);
    }
  };

  return (
    <AuthContainer>
      <Container>
        <BackgroundImage />
        <FormContainer>
          <a href="/">
            <Logo src="./src/images/logo-removebg-preview.png" alt="Logo" />
          </a>
          <Title>Welcome back to Traidr</Title>
          <form onSubmit={handleSubmit}>
            <InputField>
              <Label htmlFor="username">Username</Label>
              <Input
                type="text"
                id="username"
                placeholder="Enter your username"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </InputField>
            <InputField>
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="password"
                placeholder="Enter your password"
                name="password"
                value={formData.password}
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

            {/* Google Login Button Component with action prop */}
            <GoogleSignUp>
              <Link to="http://localhost:5001/auth/google/login">
                Google Login
              </Link>
            </GoogleSignUp>
            <SignUpButton type="submit">
              {loading ? 'Loading' : 'Log In'}
            </SignUpButton>
          </form>
          <Footer>
            Don't have an account?{' '}
            <a href="/signup" onClick={handleSignUpLinkClick}>
              Sign Up here
            </a>
          </Footer>
        </FormContainer>
      </Container>
    </AuthContainer>
  );
};

export default LogIn;
