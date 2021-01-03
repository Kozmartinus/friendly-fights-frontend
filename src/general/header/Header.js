import React from 'react';
import HeaderBar from './HeaderBar';
import logo from './images/logo.png';
import home from './images/home4.png';
import profile from './images/profile.png';

function Header() {
  return (
    <HeaderBar>
      <div className='imageContainer'>
        <img src={logo} height='80%' alt='logo'></img>
      </div>
      <h1>Friendly Fights</h1>
      <div className='imageContainer' id='right-icon-container'>
        <img src={home} height='78.5%' alt='home'></img>
        <img src={profile} height='80%' alt='profile'></img>
      </div>
    </HeaderBar>
  );
}

export default Header;
