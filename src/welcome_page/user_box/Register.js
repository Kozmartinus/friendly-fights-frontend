import React, { useState, useRef } from 'react';
import UserFormContainer from './UserFormContainer';

function Register() {
  const [errorMessage, setErrorMessage] = useState('');
  const userName = useRef(null);
  const passwordOne = useRef(null);
  const passwordTwo = useRef(null);

  const checkRegistration = () => {
    const userNameInput = userName.current.value;
    const passwordOneInput = passwordOne.current.value;
    const passwordTwoInput = passwordTwo.current.value;

    if (
      userNameInput === '' ||
      passwordOneInput === '' ||
      passwordTwoInput === ''
    ) {
      setErrorMessage('Please fill out all input fields!');
    } else if (passwordOneInput !== passwordTwoInput) {
      setErrorMessage('Mismatching passwords!');
    } else {
      window.location.replace('/test');
    }
  };

  return (
    <UserFormContainer>
      <input type='text' placeholder='Username' ref={userName}></input>
      <br></br>
      <input type='text' placeholder='Password' ref={passwordOne}></input>
      <br></br>
      <input type='text' placeholder='Password Again' ref={passwordTwo}></input>
      <br></br>
      <p>{errorMessage}</p>
      <span>Upload profile picture</span>
      <button>Browse</button>
      <br></br>
      <button id='loginConfirmationButton' onClick={checkRegistration}>
        Register
      </button>
    </UserFormContainer>
  );
}

export default Register;
