import React, { useState, useRef } from 'react';
import UserFormContainer from './UserFormContainer';
import { GoogleLoginButton } from 'react-social-login-buttons';
import { FacebookLoginButton } from 'react-social-login-buttons';

function Login() {
  const [errorMessage, setErrorMessage] = useState('');
  const userName = useRef(null);
  const password = useRef(null);

  const forgotPasswordAction = () =>
    alert('Shame on you, we do not have any smart solution for this yet');

  const checkLogin = () => {
    const userNameInput = userName.current.value;
    const passwordInput = password.current.value;

    if (userNameInput === '' || passwordInput === '') {
      setErrorMessage('Please fill out all input fields!');
    } else {
      window.location.replace('/test');
    }
  };

  return (
    <UserFormContainer>
      <input type='text' placeholder='Username' ref={userName}></input>
      <br></br>
      <input type='password' placeholder='Password' ref={password}></input>
      <br></br>
      <p>{errorMessage}</p>
      <p id='forgotPassword' onClick={() => forgotPasswordAction()}>
        Forgot my password
      </p>
      <button id='loginConfirmationButton' onClick={checkLogin}>
        Login
      </button>
      <div className='socialMediaLoginContainer'>
        <GoogleLoginButton
          className='socialMediaLoginButton'
          onClick={() => alert('Hello')}
          iconSize='20px'
        />
        <FacebookLoginButton
          className='socialMediaLoginButton'
          onClick={() => alert('Hello')}
          iconSize='20px'
        />
      </div>
    </UserFormContainer>
  );
}

export default Login;
