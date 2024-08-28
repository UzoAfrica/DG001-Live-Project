import { MdMarkEmailUnread } from 'react-icons/md';
import styled from 'styled-components';

export const BackImg = styled.div`
  background-image: url('.../images/girl.png');
  background-size: cover;
  width: 100%;
  height: 100vh;
`;
export const StyleImg = styled.img`
  margin-bottom: 120px;
`;
export const StyledResetContainer = styled.div`
  margin: auto;
  margin-top: 100px;
  background-color: white;
  border: 2px solid black;
  width: 50%;
  height: 50%;
  align-items: center;
`;
export const StyledInfo = styled.p`
  text-align: center;
  font-weight: bolder;
  font-size: 35px;
`;

export const ResetPass = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 50px;
  row-gap: 5px;
`;
export const FloatLeft = styled.label`
  display: flex;
  float: left;
`;

export const StyledInput = styled.input`
  height: 35px;
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
  padding: 20px;
`;

export const StyledTwo = styled.button`
  background-color: lightblue;
`;
