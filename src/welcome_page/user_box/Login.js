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
      <button>Login</button>
      <GoogleLoginButton onClick={() => alert('Hello')} />
      <FacebookLoginButton onClick={() => alert('Hello')} />
    </LoginContainer>
  );
}

export default Login;
