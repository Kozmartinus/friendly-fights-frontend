import React, { useState } from 'react';
import UserContainer from './UserContainer';
import Login from './Login';
import Register from './Register';

function UserBox() {
  const [mode, setMode] = useState('login');
  // toggle the two components at this level

  const markActive = (mode) => {
    document.querySelector(`#${mode}ModeSwitchButton`).classList.add('active');
    const otherMode = mode === 'login' ? 'register' : 'login';
    document
      .querySelector(`#${otherMode}ModeSwitchButton`)
      .classList.remove('active');
  };

  const switchMode = (mode) => {
    setMode(mode);
    markActive(mode);
  };

  return (
    <UserContainer>
      <div className='buttonBox'>
        <button
          id='loginModeSwitchButton'
          className='active'
          onClick={() => switchMode('login')}
        >
          Login
        </button>
        <button
          id='registerModeSwitchButton'
          onClick={() => switchMode('register')}
        >
          Register
        </button>
      </div>
      {mode === 'login' ? <Login /> : <Register />}
    </UserContainer>
  );
}

export default UserBox;
