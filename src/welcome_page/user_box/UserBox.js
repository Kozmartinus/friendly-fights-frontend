import React, { useState } from 'react';
import UserContainer from './UserContainer';
import Login from './Login';
import Register from './Register';

function UserBox() {
  const [mode, setMode] = useState('login');
  // toggle the two components at this level

  return (
    <UserContainer>
      <button onClick={() => setMode('login')}>Login</button>
      <button onClick={() => setMode('register')}>Register</button>
      {mode === 'login' ? <Login /> : <Register />}
    </UserContainer>
  );
}

export default UserBox;
