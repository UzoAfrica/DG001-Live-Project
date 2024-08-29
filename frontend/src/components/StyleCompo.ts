import { MdMarkEmailUnread } from 'react-icons/md';
import styled from 'styled-components';

export const BackImg = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100..900;1,100..900&display=swap');

  background-image: url('./src/images/c4e920f58d65bab2316b7611a10653b0.png');
  background-size: cover;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Public Sans', sans-serif;
  align-items: center;
`;
export const StyleImg = styled.img`
  display: block;
  margin: 0 auto;
  margin-top: 50px;
`;
export const StyledResetContainer = styled.div`
  margin: 300px auto;
  background-color: white;
  width: 40%;
  height: 60%;
  align-items: center;
  @media (max-width: 800px) {
    width: 80%;
    height: 80%;
    box-sizing: border-box;
  }
`;
export const StyledInfo = styled.p`
  text-align: center;
  margin: 20px 0;
  font-size: 20px;
  font-weight: bold;
  font-size: 35px;
`;

export const ResetPass = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 50px;
  row-gap: 20px;
`;
export const FloatLeft = styled.label`
  display: flex;
  float: left;
`;

export const StyledInput = styled.input`
  height: 40px;
`;
export const StyledButton = styled.button`
  margin-top: 20px;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 10px;
  width: 100%;
  background-color: #ef6820;
  height: 40px;
`;
export const StyledIcon = styled(MdMarkEmailUnread)`
  color: #ef6820;

  height: 100px;
  width: 100px;
  display: block;
  margin: 50px auto;
`;
export const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
  margin-top: 20px;
`;
export const StyledOne = styled.button`
  background-color: #ef6820;
  width: 100px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid black;
  &:hover {
    background-color: white;
    color: #ef6820;
    cursor: pointer;
  }
`;

export const StyledTwo = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 10px;
  background-color: lightblue;
  border: 1px solid black;
  &:hover {
    background-color: white;
    color: black;
    cursor: pointer;
  }
`;
export const StyledTwin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;

  @media (max-width: 800px) {
    margin-bottom: 20px;
  }
`;

export const Styledp = styled.p`
  color: #98a2b3;
`;

export const StyledSign = styled.a`
  color: #ef6820;
  text-decoration: underline #ef6820;
  text-underline-offset: 4px;
  font-weight: bold;
`;

export const StyledOtpFlex = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 10px;
`;

export const StyledOtpBox = styled.input<{ disabled?: boolean }>`
  -moz-appearance: textfield; /* Firefox */
  appearance: textfield; /* General */

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0; /* Chrome, Safari, Edge, Opera */
  }
  direction: ltr; /* Ensure text direction is left-to-right */
  width: 50px;
  height: 60px;
  border-radius: 20px;
  text-align: center;
  border: 1px solid ${(props) => (props.disabled ? '#ccc' : '#000')}; // Change border color based on disabled state

  font-size: xx-large;
  align-items: center;
  cursor: ${(props) =>
    props.disabled
      ? 'not-allowed'
      : 'text'}; // Change cursor based on disabled state

  @media (max-width: 800px) {
    width: 20px;
    height: 30px;
  }
`;

export const StyledString = styled.p`
  font-weight: bolder;
  font-size: 1.5em;
  display: flex;
  justify-content: center;
`;
