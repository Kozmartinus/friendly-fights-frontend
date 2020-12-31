import styled from 'styled-components';

const WelcomeTextBox = styled.div`
  background-color: orange;
  width: 60%;
  height: 100%;
  text-align: center;

  h2 {
    padding-top: 10%;
    margin-bottom: 10%;
  }

  @media only screen and (max-width: 600px) {
    & {
      width: 100%;
      height: 50%;
    }
    h2 {
      font-size: 20px;
      padding-top: 0;
    }
  }
`;

export default WelcomeTextBox;
