import React from 'react';
import UserFormContainer from './UserFormContainer';
import { GoogleLoginButton } from 'react-social-login-buttons';
import { FacebookLoginButton } from 'react-social-login-buttons';

const forgotPasswordAction = () =>
  alert('Shame on you, we do not have any smart solution for this yet');

function Login() {
  return (
    <UserFormContainer>
      <input type='text' placeholder='Username'></input>
      <br></br>
      <input type='password' placeholder='Password'></input>
      <br></br>
      <p>Invalid username or password!</p>
      <p id='forgotPassword' onClick={() => forgotPasswordAction()}>
        Forgot my password
      </p>
      <button id='loginConfirmationButton'>Login</button>
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
