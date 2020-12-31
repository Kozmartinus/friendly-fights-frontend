import styled from 'styled-components';

const UserFormContainer = styled.div`
  text-align: center;
  border: solid black 3px;
  padding: 20px 20px 0 20px;
  margin: 0 10px;

  input {
    width: 50%;
    min-width: 75px;
    margin-bottom: 10px;
    border-radius: 5px;
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

  @media only screen and (max-width: 1050px) {
    .socialMediaLoginButton {
      font-size: 80% !important;
      font-weight: 700;
    }

    p {
      margin: 0;
    }
  }
`;

export default UserFormContainer;
