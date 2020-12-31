import React, { useState } from 'react';
import UserContainer from './UserContainer';

function UserBox() {
  const [mode, setMode] = useState('login');
  // toggle the two components at this level

  return (
    <UserContainer>
      <button onClick={() => setMode('login')}>Login</button>
      <button onClick={() => setMode('register')}>Register</button>
    </UserContainer>
  );
}

export default UserBox;
