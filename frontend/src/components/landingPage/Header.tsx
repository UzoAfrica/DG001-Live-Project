import React from 'react';
import '../styles/Header.css';

const Header: React.FC = () => {
  return (
    <header>
      <div className="logo">traïdr</div>
      <nav>
        <a href="#login">Log in</a>
        <a href="#signup"><button>Sign Up</button></a>
      </nav>
    </header>
  );
};

export default Header;
