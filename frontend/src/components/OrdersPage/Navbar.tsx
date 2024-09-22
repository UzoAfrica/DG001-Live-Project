// src/components/Navbar.tsx
import React from 'react';
import styled from 'styled-components';
import { FaSearch, FaUserCircle } from 'react-icons/fa';
import ProfilePic from '../../images/profilepic.png';

const NavbarContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    color: white;
`;

const Logo = styled.div`
  font-size: 1.5em;
  font-weight: bold;
`;

const SearchBox = styled.div`
    display: flex;
    align-items: center;
    background-color: white;
    border-radius: 5px;
    padding: 5px 10px;
    color: #e04f16;

    input {
        border: none;
        outline: none;
        margin-left: 5px;
    }
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  img {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
`;

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      {/*<Logo>Tradïr</Logo>*/}
      <SearchBox>
        <FaSearch />
        <input type="text" placeholder="Search Orders..." />
      </SearchBox>
      {/*<Profile>*/}
      {/*  <img src={ProfilePic} alt="Profile" />*/}
      {/*  <FaUserCircle size={30} />*/}
      {/*</Profile>*/}
    </NavbarContainer>
  );
};

export default Navbar;
