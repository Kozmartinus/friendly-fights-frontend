import React, { useState, useRef } from 'react';
import UserFormContainer from './UserFormContainer';

function Register() {
  const [errorMessage, setErrorMessage] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const userName = useRef(null);
  const passwordOne = useRef(null);
  const passwordTwo = useRef(null);

  const fileInput = useRef(null);

  const openFileBrowser = () => {
    fileInput.current.click();
  };

  const uploadFile = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const file = event.target.files[0];
    setProfilePicture(file);
    console.log(file);
  };

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
      <input type='password' placeholder='Password' ref={passwordOne}></input>
      <br></br>
      <input
        type='password'
        placeholder='Password Again'
        ref={passwordTwo}
      ></input>
      <br></br>
      <p>{errorMessage}</p>
      <span>
        {profilePicture !== null
          ? profilePicture.name
          : 'Upload profile picture'}
      </span>
      <button onClick={openFileBrowser}>
        {profilePicture === null ? 'Browse' : 'Modify'}
      </button>
      <input type='file' ref={fileInput} onChange={uploadFile}></input>
      <br></br>
      <button
        id='loginConfirmationButton'
        onClick={(e) => checkRegistration(e)}
      >
        Register
      </button>
    </UserFormContainer>
  );
}

export default Register;
