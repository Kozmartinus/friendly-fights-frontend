import React from 'react';
import LoginContainer from './LoginContainer';
import { GoogleLoginButton } from 'react-social-login-buttons';
import { FacebookLoginButton } from 'react-social-login-buttons';

function Login() {
  return (
    <LoginContainer>
      <input type='text'></input>
      <br></br>
      <input type='text'></input>
      <br></br>
      <p>Forgot my password</p>
      <button id='loginConfirmationButton'>Login</button>
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
    </LoginContainer>
  );
}

export default Login;
