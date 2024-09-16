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
import { Link, useNavigate } from 'react-router-dom';
import googleLogo from '../../images/download.png';
// import api from '../utils/Api';
import { signup } from '../../axiosFolder/functions/userAuth';
import { showErrorToast, showSuccessToast } from '../utils/toastify';

const SignUpPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    hearAboutUs: '',
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  // Handle input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Toggle password visibility
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);

      const body = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        referralSource: formData.hearAboutUs,
      };

      const response = await signup(body);

      if (response.status !== 201) {
        setLoading(false);
        return showErrorToast(response.data.message);
      }

      setLoading(false);
      showSuccessToast(response.data.message);
      localStorage.setItem('email', formData.email);

      return navigate('/otp');
    } catch (error: any) {
      console.error('Error registering user:', error);
      setLoading(false);
      return showErrorToast(error.message);
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
          <a href="/">
            <Logo src="./src/images/logo-removebg-preview.png" alt="Logo" />
          </a>
          <Title>Create an Account</Title>
          <form onSubmit={handleSubmit}>
            <InputField>
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder=""
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </InputField>
            <InputField>
              <Label htmlFor="email">Email Address</Label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder=""
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </InputField>
            <InputField>
              <Label htmlFor="password">Password</Label>
              <div style={{ position: 'relative' }}>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  placeholder="******"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
                <i
                  onClick={toggleShowPassword}
                  className={`fas fa-eye${showPassword ? '-slash' : ''}`}
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    cursor: 'pointer',
                    fontSize: '18px',
                  }}
                ></i>
              </div>
            </InputField>
            <InputField>
              <Label htmlFor="hear-about-us">How did you hear about us?</Label>
              <Select
                id="hear-about-us"
                value={formData.hearAboutUs}
                onChange={handleInputChange}
                name="hearAboutUs"
              >
                <optgroup label="">
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="Instagram">Instagram</option>
                  <option value="Facebook">Facebook</option>
                  <option value="Google">Google</option>
                  <option value="Others">Others</option>
                </optgroup>
              </Select>
            </InputField>
            <Separator>
              <SeparatorHr />
              <SeparatorSpan>OR</SeparatorSpan>
              <SeparatorHr />
            </Separator>

            {/* Google Login Button Component with action prop */}
            <GoogleSignUp>
              <img src={googleLogo} alt="Google Logo" />
              <Link to="http://localhost:5001/auth/google/signup">
                Sign up with Google
              </Link>
            </GoogleSignUp>
            <SignUpButton type="submit">
              {loading ? 'Loading...' : 'SIGN UP'}
            </SignUpButton>
          </form>
          <Footer>
            Already have an account?{' '}
            <a href="/login" onClick={handleLoginLinkClick}>
              Log In here
            </a>
          </Footer>
        </FormContainer>
      </Container>
    </AuthContainer>
  );
};

export default SignUpPage;
