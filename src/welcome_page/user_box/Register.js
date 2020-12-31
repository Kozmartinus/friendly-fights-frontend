import React from 'react';
import UserFormContainer from './UserFormContainer';

function Register() {
  return (
    <UserFormContainer>
      <input type='text' placeholder='Username'></input>
      <br></br>
      <input type='text' placeholder='Password'></input>
      <br></br>
      <input type='text' placeholder='Password Again'></input>
      <br></br>
      <p>This username is already taken!</p>
      <span>Upload profile picture</span>
      <button>Browse</button>
      <br></br>
      <button id='loginConfirmationButton'>Register</button>
    </UserFormContainer>
  );
}

export default Register;
