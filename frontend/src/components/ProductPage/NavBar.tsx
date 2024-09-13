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
          <a href="/product">
            <img src={Logo} alt=""/>
          </a>
          <StyledButton>
            <StyledIoMdNotificationsOutline/>
            <img src={Profile} alt=""/>
            <Btn href="/create-shop">Start Selling</Btn>
          </StyledButton>
        </Nav>
      </div>
    </>
  );
}
