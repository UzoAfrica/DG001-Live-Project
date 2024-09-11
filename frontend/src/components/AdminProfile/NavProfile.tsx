import {
    StyledNav,
    StyledRightDiv,
    STyledStartSelling,
    StyledHeader,
    STyledIMGNav,
  } from '../StyleCompo';
  import ProfilePic from '../../images/profilepic.png';
  import UserProfile from '../../images/logo-removebg-preview.png';
  
  export default function Accountprofile() {
    return (
      <>
        <StyledHeader>
          <StyledNav>
            <STyledIMGNav src={UserProfile} alt="Profile" />
            <StyledRightDiv>
              <img src={ProfilePic} alt="" />
              <STyledStartSelling type="submit">Start selling</STyledStartSelling>
            </StyledRightDiv>
          </StyledNav>
        </StyledHeader>
      </>
    );
  }
  