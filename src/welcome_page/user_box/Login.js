import React from 'react';
import UserFormContainer from './UserFormContainer';
import { GoogleLoginButton } from 'react-social-login-buttons';
import { FacebookLoginButton } from 'react-social-login-buttons';

function Login() {
  return (
    <UserFormContainer>
      <input type='text' placeholder='Username'></input>
      <br></br>
      <input type='password' placeholder='Password'></input>
      <br></br>
      <p>Invalid username or password!</p>
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
    </UserFormContainer>
  );
}

export default Login;
