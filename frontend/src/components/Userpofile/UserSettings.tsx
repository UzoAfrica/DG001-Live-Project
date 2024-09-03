import { StyledProfileSet,StyledNotify,StyledVerify, StyledLineDiv, StyledPassWord, StyledUserOptions } from "../StyleCompo";


export default function UserSettings() {
  return (
    <>
      <StyledUserOptions>
        <StyledLineDiv>
                <StyledProfileSet>Profile Settings</StyledProfileSet>
                <StyledPassWord>Password</StyledPassWord>
                <StyledNotify>Notification</StyledNotify>
                <StyledVerify>Verification</StyledVerify>
        </StyledLineDiv>
        <div>
              <div>
                <img src="" alt="" />
                <button type="submit"></button>
                <button type="submit"></button>
                
              </div>
              <div>
                 <label htmlFor="">
                  <input type="text" /></label>
                 <label htmlFor="">
                  <input type="text" /></label>
                 <label htmlFor="">
                  <input type="text" /></label>
                 <label htmlFor="">
                  <input type="text" /></label>
                  <div>
                    <button>Save changes</button>
                    <button>Cancel</button>
                  </div>
              </div>
              <div>
                    <label>
                    <input type="text" />
                  </label>
                  <label>
                    <input type="text" />
                  </label>
                  <label>
                    <input type="text" />
                  </label>
              </div>

        </div>
        
           
          
       
      </StyledUserOptions>
    </>
  )
}
