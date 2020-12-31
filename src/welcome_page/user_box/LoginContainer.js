import styled from 'styled-components';

const LoginContainer = styled.div`
  background-color: purple;
  text-align: center;

  input {
    width: 50%;
    min-width: 75px;
    margin-bottom: 10px;
    border-radius: 5px;
  }

  #loginConfirmationButton {
    margin-bottom: 20px;
  }

  .socialMediaLoginButton {
    height: 30px !important;
    width: 80% !important;
    margin: 0 auto 10px auto !important;
    font-size: 90% !important;
    font-weight: 700;
  }

  @media only screen and (max-width: 1050px) {
    .socialMediaLoginButton {
      font-size: 80% !important;
      font-weight: 700;
    }
  }
`;

export default LoginContainer;
