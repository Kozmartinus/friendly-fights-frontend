import React from 'react';
import HeaderBar from './HeaderBar';
import logo from './logo.png';

function Header() {
  return (
    <HeaderBar>
      <img src={logo} height='80%' alt='logo'></img>
    </HeaderBar>
  );
}

export default Header;
