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

const SignUpPage: React.FC = () => {
  const navigate = useNavigate();

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
          <form>
            <InputField>
              <Label htmlFor="name">Name</Label>
              <Input type="text" id="name" placeholder="" />
            </InputField>
            <InputField>
              <Label htmlFor="email">Email Address</Label>
              <Input type="email" id="email" placeholder="" />
            </InputField>
            <InputField>
              <Label htmlFor="password">Password</Label>
              <Input type="password" id="password" placeholder="" />
            </InputField>
            <InputField>
              <Label htmlFor="hear-about-us">How did you hear about us?</Label>
              <Select id="hear-about-us">
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
              Log in with Google
            </GoogleSignUp>
            <SignUpButton type="submit">SIGN UP</SignUpButton>
          </form>
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
