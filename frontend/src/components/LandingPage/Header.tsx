import React from 'react';
import { HeaderContainer, Logo, Nav } from './Styledheader';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo>traïdr</Logo>
      <Nav>
        <a href="#login">Log in</a>
        <a href="#signup">
          <button>Sign Up</button>
        </a>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
