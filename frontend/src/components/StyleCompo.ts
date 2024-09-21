import { MdMarkEmailUnread } from 'react-icons/md';
import { LuCamera } from "react-icons/lu";
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
  height: 45px;
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
  margin: 20px auto;
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
  width: 120px;
  height: 50px;
  border-radius: 10px;
  color: white;
  border: 1px solid black;
  &:hover {
    background-color: white;
    color: #ef6820;
    cursor: pointer;
  }
`;

export const StyledTwo = styled.button`
  width: 120px;
  height: 50px;
  border-radius: 10px;
  background-color: white;
  border: 1px solid black;
  color: black;
  &:hover {
    background-color: #ef6820;
    color: white;
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
export const StyledHeader = styled.header`
  height: 70px;
  padding: 0;
  margin: 0;
  border-bottom: 0.5px solid black;
  box-sizing: border-box;
`;

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-left: 100px;
  margin-right: 250px;
`;
export const STyledIMGNav = styled.img`
  width: 100px;
`;

export const StyledRightDiv = styled.div`
  display: flex;
  gap: 10px;
`;

export  const STyledStartSelling = styled.button`
 width: 150px;
 height: 50px;
 background-color:  #E04F16;
border-radius: 5px;
border: 0.5px solid #E04F16;
color: white;
&:hover{
  transition-duration: 0.5s;

  color: black;

}
`

export const StyledUserOptions = styled.div`
 


text-align: center;

@media (max-width: 800px){
  margin: auto;
}

`

export const StyledProfileSet = styled.a`
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  color: #60635f;

  width: 150px;

  &:hover {
    transition-duration: 1s;
    cursor: pointer;
    border-bottom: #e04f16 solid 2px;
  }
  &:active {
    color: #e04f16;
    border-bottom: 2.5px solid #e04f16;
  }
  @media (max-width: 800px){
    width: 100px;
  }
`;

export const StyledPassWord = styled.a`
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  color: gray;

  width: 150px;

  &:hover {
    transition-duration: 1s;
    cursor: pointer;
    border-bottom: #e04f16 solid 2px;
  }
  &:active {
    color: #e04f16;
    border-bottom: 2.5px solid #e04f16;
  }
  @media (max-width: 800px){
    
  }
`;

export const StyledNotify = styled.a`
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  color: gray;

  width: 150px;

  &:hover {
    transition-duration: 1s;
    cursor: pointer;
    border-bottom: #e04f16 solid 2px;
  }
  &:active {
    color: #e04f16;
    border-bottom: 2.5px solid #e04f16;
  }
`;

export const StyledVerify = styled.a`
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  color: gray;

  width: 150px;

  &:hover {
    transition-duration: 1s;
    cursor: pointer;
    border-bottom: #e04f16 solid 2px;
  }
  &:active {
    color: #e04f16;
    border-bottom: 2.5px solid #e04f16;
  }
`;

export const StyledLineDiv = styled.div`
font-weight: bold;
font-size: small;
display: flex;

gap: 5px;
@media (max-width: 800px){
  margin: auto;
  
}
`
// export const StyledUserProfile = styled.img`

// `


export const StyledImgBut =styled.div`
display: flex;
margin-top: 20px;
gap: 100px;
@media (max-width: 800px){
  margin: 20px auto;
  gap: 20px;
}


`




export const StyledFlexbutton = styled.div`
display: flex;
gap: 10px;

`

export const StyledProfileBox = styled.div`
margin-top: 20px;
display: flex;
`

export const StyledDisFlex = styled.div`
display: flex;
gap: 200px;


@media (max-width: 800px){
flex-direction: column;
gap: 100px;
margin: auto 20px;

}

`

export const StyledBox = styled.div`
display :flex;
row-gap: 10px;
flex-direction: column;
`
export const Styledinput = styled.input`
border: 1px solid #D0D5DD;
border-radius: 10px;
padding-left: 15px;
height: 35px;
width: 400px;
@media (max-width: 800px){
 width: 250px;
  
}
`
export const PassForm = styled.fieldset`
border: none;
display: flex;
margin: 20px 20px 0px 20px;
flex-direction: column;
gap: 10px;

@media (max-width: 800px){
  margin: auto;
  
}
` 



export const StyledpTag = styled.p`
color: gray;
`

export const Styledfield = styled.div`
border: 2px solid ;
margin: 50px  auto;
width: 50%;
`
export const Styledli = styled.li`
list-style-type: circle;
list-style: #e04f16 ;
margin-left: 10px;
border-bottom: 0.5px solid #e04f16;

`
export const Flexo = styled.div`
display: flex;
margin-left: 20px;
flex-direction: row-reverse;
align-items: baseline;
`
export const ProfileImg = styled.img`
width: 50px;
border: solid #ef6820;
height: 50px;
border-radius: 50%;
`
export const Dragzone = styled(LuCamera)`
  color: #ef6820;
  border: none;
  &:checked{
    border: none;
  }
`

export const Profilecard = styled.div`
margin: 100px auto;
border: 2px solid ;
width: 650px;
padding: 100px;
border-radius: 20px;
box-shadow: 1px -2px 1px -2px;

@media (max-width: 800px){
 width: 350px;
 padding: 10px;
  
}
`