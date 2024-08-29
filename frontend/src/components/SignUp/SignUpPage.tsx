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
  Select,
  SignUpButton,
  Separator,
  SeparatorHr,
  SeparatorSpan,
  GoogleSignUp,
  Footer,
} from './StyledSignUp';
import { useNavigate } from 'react-router-dom';
import googleLogo from '../../images/download.png';
import api from '../utils/Api';

const SignUpPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hearAboutUs, setHearAboutUs] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  // Handle input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    if (id === 'name') {
      setName(value);
    } else if (id === 'email') {
      setEmail(value);
    } else if (id === 'password') {
      setPassword(value);
    } else if (id === 'hear-about-us') {
      setHearAboutUs(value);
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await api.post('/api/signup', { name, email, password, hearAboutUs });
      alert('User registered successfully');
      navigate('/login');
    } catch (err) {
      console.error('Error registering user:', err);
      setErrorMessage('Error registering user. Please try again.');
    }
  };

  const handleLoginLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    navigate('/login');
  };

  return (
    <AuthContainer>
      <Container>
        <BackgroundImage />
        <FormContainer>
          <Logo src="./src/images/logo-removebg-preview.png" alt="Logo" />
          <Title>Create an Account</Title>
          <form onSubmit={handleSubmit}>
            <InputField>
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                placeholder=""
                value={name}
                onChange={handleInputChange}
              />
            </InputField>
            <InputField>
              <Label htmlFor="email">Email Address</Label>
              <Input
                type="email"
                id="email"
                placeholder=""
                value={email}
                onChange={handleInputChange}
              />
            </InputField>
            <InputField>
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="password"
                placeholder=""
                value={password}
                onChange={handleInputChange}
              />
            </InputField>
            <InputField>
              <Label htmlFor="hear-about-us">How did you hear about us?</Label>
              <Select
                id="hear-about-us"
                value={hearAboutUs}
                onChange={handleInputChange}
              >
                <option value="Instagram">Instagram</option>
                <option value="Facebook">Facebook</option>
                <option value="Google">Google</option>
              </Select>
            </InputField>
            <Separator>
              <SeparatorHr />
              <SeparatorSpan>OR</SeparatorSpan>
              <SeparatorHr />
            </Separator>
            <GoogleSignUp>
              <img src={googleLogo} alt="Google Logo" />
              Sign up with Google
            </GoogleSignUp>
            <SignUpButton type="submit">SIGN UP</SignUpButton>
          </form>
          {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
          <Footer>
            Already have an account?{' '}
            <a href="#" onClick={handleLoginLinkClick}>
              Log In here
            </a>
          </Footer>
        </FormContainer>
      </Container>
    </AuthContainer>
  );
};

export default SignUpPage;
