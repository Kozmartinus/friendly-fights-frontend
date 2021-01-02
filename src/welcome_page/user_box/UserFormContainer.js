import styled from 'styled-components';

const UserFormContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
  text-align: center;
  border: solid black 3px;
  border-collapse: collapse;
  border-radius: 20px;
  padding: 20px 20px 0 20px;
  margin: 0 10px;

  input[type='text'],
  input[type='password'] {
    width: 50%;
    min-width: 75px;
    margin-bottom: 10px;
    border-radius: 5px;

    background-color: transparent;
    border: none;
    border-bottom: solid black 1px;
    text-align: center;
    transition: all 0.3s ease-in-out;

    &:focus {
      outline: none;
      border-bottom: solid red 1px;
      width: 75%;
    }
  }

  input[type='file'] {
    display: none;
  }

  #loginConfirmationButton {
    margin-bottom: 20px;
  }

  #forgotPassword:hover {
    font-weight: 900;
    cursor: pointer;
  }

  .socialMediaLoginButton {
    height: 30px !important;
    width: 80% !important;
    margin: 0 auto 10px auto !important;
    font-size: 90% !important;
    font-weight: 700;
  }

  .socialMediaLoginContainer {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  @media only screen and (max-width: 1050px) {
    .socialMediaLoginButton {
      font-size: 80% !important;
      font-weight: 700;

      p {
        margin: 0;
      }
    }
  }

  @media only screen and (max-width: 880px) and (min-width: 600px) {
    .socialMediaLoginButton {
      width: 40px !important;

      div:nth-child(3) {
        display: none;
      }
    }
  }
`;

export default UserFormContainer;
