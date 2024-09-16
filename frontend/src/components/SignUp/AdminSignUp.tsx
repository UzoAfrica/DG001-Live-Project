import React, { useState } from 'react';
import {
  AuthContainer,
  Container,
  FormContainer,
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
import { signupAdmin } from '../../axiosFolder/functions/adminAuth';
import { showErrorToast, showSuccessToast } from '../utils/toastify';
import logo from '../../images/logo-removebg-preview.png';
import backgroundImage from '../../images/c4e920f58d65bab2316b7611a10653b0.png';

const AdminSignUp: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    referralSource: '',
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
    setLoading(true);

    try {
      const response = await signupAdmin(formData);

      if (response.status !== 201) {
        setLoading(false);
        return showErrorToast(response.data.message);
      }

      setLoading(false);
      showSuccessToast(response.data.message);
      localStorage.setItem('email', formData.email);

      return navigate('/admin/login');
    } catch (error: any) {
      setLoading(false);
      return showErrorToast(error.message);
    }
  };

  const handleLoginLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    navigate('/admin/login');
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
            <img
              src={logo}
              alt="Logo"
              style={{
                display: `block`,
                margin: `0 auto`,
                width: `80px`,
                backgroundColor: `transparent`,
                boxShadow: `0 2px 10px rgba(0, 0, 0, 0.1)`,
              }}
            />
          </a>
          <Title>Create an Admin Account</Title>
          <form onSubmit={handleSubmit}>
            <InputField>
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
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
              <Label htmlFor="referralSource">Referral Source</Label>
              <Select
                id="referralSource"
                name="referralSource"
                value={formData.referralSource}
                onChange={handleInputChange}
                required
              >
                <option value="" disabled>
                  Select an option
                </option>
                <option value="Instagram">Instagram</option>
                <option value="Facebook">Facebook</option>
                <option value="Google">Google</option>
                <option value="Others">Others</option>
              </Select>
            </InputField>
            <Separator>
              <SeparatorHr />
              <SeparatorSpan>OR</SeparatorSpan>
              <SeparatorHr />
            </Separator>

            {/* Google Admin Sign Up Button */}
            <GoogleSignUp>
              <img src={googleLogo} alt="Google Logo" />
              <Link to="http://localhost:5001/auth/google/admin-signup">
                Sign up with Google
              </Link>
            </GoogleSignUp>

            <SignUpButton type="submit">
              {loading ? 'Loading...' : 'Sign Up'}
            </SignUpButton>
          </form>
          <Footer>
            Already have an account?{' '}
            <a href="/admin/login" onClick={handleLoginLinkClick}>
              Log In here
            </a>
          </Footer>
        </FormContainer>
      </Container>
    </AuthContainer>
  );
};

export default AdminSignUp;
