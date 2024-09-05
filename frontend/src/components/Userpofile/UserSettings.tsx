
import { StyledProfileSet,StyledNotify,StyledVerify, StyledLineDiv, StyledPassWord, StyledUserOptions, StyledImgBut, StyledFlexbutton, StyledOne, StyledTwo, StyledProfileBox, StyledDisFlex, StyledBox, Styledinput, FloatLeft, STyledStartSelling, StyledTwin, PassForm, Styledp, Styledfield, Styledli, SimpleB, ColoredDiv, StyleDark, StylendAtag } from "../StyleCompo";
import ProfilePic from '../../images/profilepic.png'
import { useState } from "react";
// import { BsFillPersonLinesFill } from "react-icons/bs";
// import { BiCartDownload } from "react-icons/bi";
// import { FaBasketShopping } from "react-icons/fa6";
// import { TiMessageTyping } from "react-icons/ti";
// import { LiaQuestionSolid } from "react-icons/lia";
// import { IoExitOutline } from "react-icons/io5";

export default function UserSettings() {
  const [activeTab, setActiveTab] = useState("profile");  
  
  // const [notifications, setNotifications] = useState([]);  
  
  // useEffect(() => {  
  //  // Fetch notifications from backend API  
  //  fetch('/api/notifications')  
  //   .then(response => response.json())  
  //   .then(data => setNotifications(data));  
  // }, []);  
  return (
    <div>

        <StyledLineDiv>
                <StyledProfileSet onClick={()=>setActiveTab("profile")}>Profile Settings</StyledProfileSet>
                <StyledPassWord onClick={()=>setActiveTab("password")}>Password</StyledPassWord>
                <StyledNotify onClick={()=>setActiveTab("notification")}>Notification</StyledNotify>
                <StyledVerify onClick={()=>setActiveTab("verification")}>Verification</StyledVerify>
        </StyledLineDiv>
      <>
      
      <StyledUserOptions>
        
        <StyledImgBut>
         
            <img src={ProfilePic} alt="" />
                
              
              <StyledFlexbutton>
              <StyledOne >Upload new</StyledOne>
              <StyledTwo type="submit">Delete photo</StyledTwo>
              </StyledFlexbutton>
            
          
        </StyledImgBut>

   { activeTab === "profile" && (<StyledProfileBox>
      <form action="" method="get">


      <StyledDisFlex>
                 
                 <StyledBox>
                     <FloatLeft htmlFor=""> First Name</FloatLeft>
                     <Styledinput placeholder="Babalola" type="text" />

                 
                     <FloatLeft htmlFor="">Email</FloatLeft>
                     <Styledinput placeholder="" type="text" />

                
                    <FloatLeft htmlFor="">Gender</FloatLeft>
                   <Styledinput placeholder="" type="text" />
                   
                
                     <FloatLeft htmlFor="">Shop name</FloatLeft>
                     <Styledinput placeholder="" type="text" />

                     <StyledTwin>
                       <STyledStartSelling>Save changes</STyledStartSelling>
                       <StyledTwo>Cancel</StyledTwo>
                     </StyledTwin>
                   
                 </StyledBox>
                 <StyledBox>
                      <FloatLeft htmlFor="">Last Name</FloatLeft>
                     <Styledinput  placeholder=""type="text" />
                   
                 
               
                 
                       <FloatLeft htmlFor="">Mobile Number</FloatLeft>
                       <Styledinput placeholder="" type="text" />
                     
                
                          <FloatLeft htmlFor="" > Residential address </FloatLeft>
                         <Styledinput placeholder="" type="text" />

                     
             
                 </StyledBox>
                   
                 
                   
                   
                    
                    
                 
           </StyledDisFlex>
        
      </form>

     
            

    </StyledProfileBox>
)}
  
     
    
 
</StyledUserOptions>

    {activeTab === "password" && ( <StyledDisFlex>
            <form action="">  
            
           
                <PassForm>
                  <legend>Passsword</legend>

                  <Styledp>Please enter your current password to change your password</Styledp>

                    <FloatLeft htmlFor="Your password">Your password</FloatLeft>
                    <Styledinput type="password" placeholder="" />


                    <FloatLeft htmlFor="New passwrod">New Password</FloatLeft>
                    <Styledinput type="password" placeholder="" />

                    <Styledp>Your new password ust 8-12 charaters long</Styledp>

                    <FloatLeft htmlFor="">Re-enter Your Password</FloatLeft>
                    <Styledinput type="password" placeholder="" />
                  
                </PassForm>

             


            </form>

</StyledDisFlex>
)}
      
       
               {activeTab === "notification" && (  <Styledfield>
                   <h2>Notifications </h2>
                      <Styledli>Fully Furnished chair is now available  
                        <p>{}</p>
                      </Styledli>
                      <Styledli>Terms of use was updated</Styledli>
                      <Styledli>Your Ad has been successfully uploaded. 
                        <p>{}</p>
                      </Styledli>
                      <Styledli>Your Ad has been successfully uploaded. 
                        <p>{}</p>
                      </Styledli>
                 </Styledfield>)}
                      
                      
                      
     
     
                    
      </>

     
    </div>
  )
}
