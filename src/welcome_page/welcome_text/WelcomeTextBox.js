import styled from 'styled-components';

const WelcomeTextBox = styled.div`
  background-color: orange;
  width: 60%;
  height: 100%;
  text-align: center;

  h2 {
    margin: 10% 0;
  }

  @media only screen and (max-width: 600px) {
    & {
      width: 100%;
      height: 50%;
    }
    h2 {
      font-size: 20px;
    }
  }
`;

export default WelcomeTextBox;
