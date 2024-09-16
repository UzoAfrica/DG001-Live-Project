import styled from 'styled-components';

export const AuthContainer = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100..900;1,100..900&display=swap');

  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Public Sans', sans-serif;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('./src/images/c4e920f58d65bab2316b7611a10653b0.png');
  background-size: cover;
  background-position: center;
  z-index: -1;
`;

export const FormContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.85);
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 90%;
  height: 540px;
  max-width: 598px;
  text-align: flex-start;
`;

export const Logo = styled.img`
  display: block;
  margin: 0 auto;
  width: 80px;
  background-color: transparent;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  text-align: center;
  margin: 20px 0;
  font-size: 20px;
  font-weight: bold;
`;

export const InputField = styled.div`
  margin-bottom: 15px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #333;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
`;

export const SignUpButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #ef6820;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
`;

export const Separator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
`;

export const SeparatorHr = styled.hr`
  flex: 1;
  border: none;
  border-top: 1px solid #ccc;
  margin: 0 10px;
`;

export const SeparatorSpan = styled.span`
  color: #aaa;
  font-size: 14px;
`;

export const GoogleSignUp = styled.div`
  width: 100%;
  padding: 10px;
  background-color: white;
  color: #333;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
`;

export const Footer = styled.p`
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
  color: #666;

  a {
    color: #ef6820;
    text-decoration: none;
  }
`;
