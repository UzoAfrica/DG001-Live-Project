import {
  Btn,
  Nav,
  StyledButton,
  StyledIoMdNotificationsOutline,
} from './StyledProducts.ts';
import Logo from '../../images/logo-removebg-preview.png';
import Profile from '../../images/profilepic.png';
export default function NavBar() {
  return (
    <>
      <div>
        <Nav>
          <img src={Logo} alt="" />
          <StyledButton>
            <StyledIoMdNotificationsOutline />
            <img src={Profile} alt="" />
            <Btn>Start Selling</Btn>
          </StyledButton>
        </Nav>
      </div>
    </>
  );
}
