import React, { useState } from 'react';
import {
  AuthContainer,
  Container,
  FormContainer,
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
import { loginAdmin } from '../../axiosFolder/functions/adminAuth';
import googleLogo from '../../images/download.png';
import logo from '../../images/logo-removebg-preview.png';
import backgroundImage from '../../images/c4e920f58d65bab2316b7611a10653b0.png';

const AdminLogin: React.FC = () => {
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await loginAdmin(formData);

      if (response.status !== 200) {
        setLoading(false);
        return showErrorToast(response.data.message);
      }

      setLoading(false);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('admin', JSON.stringify(response.data.data.user));
      localStorage.setItem('adminId', response.data.data.user.id);
      localStorage.setItem('adminEmail', formData.email);
      showSuccessToast('Admin logged in successfully');
      navigate('/*/');
    } catch (error: any) {
      setLoading(false);
      return showErrorToast(error.message);
    }
  };

  return (
    <AuthContainer>
      <Container>
        <img
          src={backgroundImage}
          alt="Background"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: -1,
          }}
        />
        <FormContainer>
          <a href="/">
            <img src={logo} alt="Logo" 
            style={{
                display: `block`,
                margin: `0 auto`,
                width: `80px`,
                backgroundColor: `transperent`,
                boxShadow: `0 2px 10px rgba(0, 0, 0, 0.1)`,
            }}
            />
          </a>
          <Title>Welcome Back, Admin</Title>
          <form onSubmit={handleSubmit}>
            <InputField>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </InputField>
            <InputField>
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </InputField>

            <Separator>
              <SeparatorHr />
              <SeparatorSpan>OR</SeparatorSpan>
              <SeparatorHr />
            </Separator>

            {/* Google Admin Log In Button */}
            <GoogleSignUp>
              <img src={googleLogo} alt="Google Logo" />
              <Link to="http://localhost:5001/auth/google/admin-login">
                Log in with Google
              </Link>
            </GoogleSignUp>

            <SignUpButton type="submit">
              {loading ? 'Logging In...' : 'Log In'}
            </SignUpButton>
          </form>
          <Footer>
            Don't have an account?{' '}
            <Link to="/admin/signup">Sign Up here</Link>
          </Footer>
        </FormContainer>
      </Container>
    </AuthContainer>
  );
};

export default AdminLogin;
