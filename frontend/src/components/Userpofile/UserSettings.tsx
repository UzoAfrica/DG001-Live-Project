import { useState } from "react";  
import 'react-phone-input-2/lib/style.css';  
import PhoneInput from 'react-phone-input-2';  
import MyDropzone from "./Mydropzone";
import { showErrorToast, showSuccessToast } from "../utils/toastify";
import { updateProfile } from "../../axiosFolder/functions/profileFuntion";
import { 
  StyledProfileSet, StyledNotify, StyledVerify, StyledLineDiv, StyledPassWord,
  StyledUserOptions, StyledImgBut, StyledFlexbutton, StyledOne, StyledTwo,
  StyledProfileBox, StyledDisFlex, StyledBox, Styledinput, FloatLeft,
  STyledStartSelling, StyledTwin, PassForm, Styledp, Styledfield, Styledli
} from "../StyleCompo";  

export default function UserSettings() {  
  const [activeTab, setActiveTab] = useState("profile");  
  const [valid, setValid] = useState(true);  
  const [ProfileFormData, setProfileFormData] = useState({
    name: '',
    lastName: "",
    email: "",
    gender: "",
    mobileNumber: "",
    address: "",
    shopName: ""
  });

  const handleChange = (value: string) => {  
    setProfileFormData(prevState => ({
      ...prevState,
      mobileNumber: value,
    }));
    setValid(validatePhoneNumber(value));  
  };  
  
  const validatePhoneNumber = (phoneNumber: string) => {  
    const phoneNumberPattern = /^\d{10}$/;  
    return phoneNumberPattern.test(phoneNumber);  
  };  
  
  const UserId = localStorage.getItem('userId');

  // Handle profile input changes
  const handleProfileInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setProfileFormData({
      ...ProfileFormData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(ProfileFormData)
    try {
      const updateProfileRes = await updateProfile(ProfileFormData, UserId)!;
      if (updateProfileRes.status !== 200) {
        return showErrorToast(updateProfileRes.data.message);
      }
      showSuccessToast(updateProfileRes.data.message);
      
    } catch (error) {
      console.error('Error in form submission:', error);
      showErrorToast('An error occurred while updating your profile.');
    }
  };

  return (  
    <div>  
      <StyledLineDiv>  
        <StyledProfileSet onClick={() => setActiveTab("profile")}>Profile Settings</StyledProfileSet>  
        <StyledPassWord onClick={() => setActiveTab("password")}>Password</StyledPassWord>  
        <StyledNotify onClick={() => setActiveTab("notification")}>Notification</StyledNotify>  
        <StyledVerify onClick={() => setActiveTab("verification")}>Verification</StyledVerify>  
      </StyledLineDiv>  
      <>  
        <StyledUserOptions>  
          <StyledImgBut> 
            <MyDropzone />
            <StyledFlexbutton>  
              <StyledTwo type="submit">Delete photo</StyledTwo>  
            </StyledFlexbutton>  
          </StyledImgBut>  
  
          {activeTab === "profile" && (  
            <StyledProfileBox>  
              <form onSubmit={handleSubmit}>  
                <StyledDisFlex>  
                  <StyledBox>  
                    <FloatLeft htmlFor=""> First Name</FloatLeft>  
                    <Styledinput name="name" onChange={handleProfileInputChange} placeholder="Babalola" type="text" />  
  
                    <FloatLeft htmlFor="">Email</FloatLeft>  
                    <Styledinput name="email" onChange={handleProfileInputChange} placeholder="" type="text" />  
  
                    <FloatLeft htmlFor="">Gender</FloatLeft>  
                    <Styledinput name="gender" onChange={handleProfileInputChange} placeholder="" type="text" />  
  
                    <FloatLeft htmlFor="">Shop name</FloatLeft>  
                    <Styledinput name="shopName" onChange={handleProfileInputChange} placeholder="" type="text" />  
  
                    <StyledTwin>  
                      <STyledStartSelling>Save changes</STyledStartSelling>  
                      <StyledTwo type="button">Cancel</StyledTwo>  
                    </StyledTwin>  
                  </StyledBox>  
                  <StyledBox>  
                    <FloatLeft htmlFor="">Last Name</FloatLeft>  
                    <Styledinput name="lastName" onChange={handleProfileInputChange} placeholder="" type="text" />  
  
                    <FloatLeft htmlFor="">Mobile Number</FloatLeft>  
                    <PhoneInput 
                      name="mobileNumber"
                      country={"us"}
                      value={ProfileFormData.mobileNumber} 
                      onChange={handleProfileInputChange}
                      inputProps={{
                        required: true,
                      }}  
                    />  
                    {!valid && <p style={{ color: 'red' }}>Please enter a valid 10-digit phone number</p>}  
  
                    <FloatLeft htmlFor=""> Residential Address </FloatLeft>  
                    <Styledinput name="address" onChange={handleProfileInputChange} placeholder="" type="text" />  
                  </StyledBox>  
                </StyledDisFlex>  
              </form>  
            </StyledProfileBox>  
          )}  
  
        </StyledUserOptions>  
  
        {activeTab === "password" && (  
          <StyledDisFlex>  
            <form action="">  
              <PassForm>  
                <legend>Password</legend>  
                <Styledp>Please enter your current password to change your password</Styledp>  
  
                <FloatLeft htmlFor="Your password">Your password</FloatLeft>  
                <Styledinput name="password" onChange={handleProfileInputChange} type="password" placeholder="" />  
  
                <FloatLeft htmlFor="New password">New Password</FloatLeft>  
                <Styledinput name="newPassword" onChange={handleProfileInputChange} type="password" placeholder="" />  
  
                <Styledp>Your new password must be 8-12 characters long</Styledp>  
  
                <FloatLeft htmlFor="">Re-enter Your Password</FloatLeft>  
                <Styledinput name="confirmPassword" onChange={handleProfileInputChange} type="password" placeholder="" />


                <StyledTwin>  
              <STyledStartSelling onClick={handleSubmit}>Save changes</STyledStartSelling>  
              <StyledTwo>Cancel</StyledTwo>  
            </StyledTwin> 
              </PassForm>  
            </form>  
             
          </StyledDisFlex>  
        )}  
  
        {activeTab === "notification" && (  
          <Styledfield>  
            <h2>Notifications</h2>  
            <Styledli>Fully Furnished chair is now available</Styledli>  
            <Styledli>Terms of use was updated</Styledli>  
            <Styledli>Your Ad has been successfully uploaded.</Styledli>  
            <Styledli>Your Ad has been successfully uploaded.</Styledli>  
          </Styledfield>  
        )}  
      </>  
    </div>  
  );  
}
