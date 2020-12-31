import React from 'react';
import UserFormContainer from './UserFormContainer';

function Register() {
  return (
    <UserFormContainer>
      <input type='text'></input>
      <br></br>
      <input type='text'></input>
      <br></br>
      <input type='text'></input>
      <br></br>
      <span>Upload profile picture</span>
      <button>Browse</button>
      <br></br>
      <button id='loginConfirmationButton'>Register</button>
    </UserFormContainer>
  );
}

export default Register;
