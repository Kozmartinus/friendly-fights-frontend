import styled from 'styled-components';

const WelcomeTextBox = styled.div`
  background: linear-gradient(
    to right,
    rgba(6, 6, 84, 0.7),
    rgba(6, 6, 84, 0) 66%
  );
  width: 60%;
  height: 100%;
  text-align: center;
  border-radius: 20px;

  h2 {
    margin: 10% 0;
  }

  @media only screen and (max-width: 650px) {
    & {
      width: 100%;
      height: 50%;
      border-radius: 20px 20px 0 0;
      background: linear-gradient(
        to bottom,
        rgba(6, 6, 84, 0.7),
        rgba(6, 6, 84, 0) 66%
      );
    }
    h2 {
      margin: 5%;
      font-size: 20px;
    }
  }
`;

export default WelcomeTextBox;
