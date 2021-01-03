import React from 'react';
import HeaderBar from './HeaderBar';
import logo from './logo.png';

function Header() {
  return (
    <HeaderBar>
      <div className='imageContainer'>
        <img src={logo} height='100%' alt='logo'></img>
      </div>
      <h1>Friendly Fights</h1>
      <div className='imageContainer'></div>
    </HeaderBar>
  );
}

export default Header;
