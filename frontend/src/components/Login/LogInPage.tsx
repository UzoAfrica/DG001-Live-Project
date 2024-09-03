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
import { showErrorToast, showSuccessToast } from '../utils/toastify';
import { loginFunction } from '../../axiosFolder/functions/userAuth';

const LogIn: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  // const [errorMessage, setErrorMessage] = useState('');
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
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));

      showSuccessToast(response.data.message);

      return navigate('/dashboard');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error('Error logging in:', error);
      setLoading(false);
      return showErrorToast(error.message);
      // setErrorMessage('Invalid username or password');
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
            <GoogleSignUp>
              <img src={googleLogo} alt="Google Logo" />
              Log in with Google
            </GoogleSignUp>
            <SignUpButton type="submit">
              {loading ? 'Loading' : 'Sign Up here'}
            </SignUpButton>
          </form>
          {/* {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>} */}
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
