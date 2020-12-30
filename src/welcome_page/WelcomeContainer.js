import styled from 'styled-components';

const WelcomeContainer = styled.div`
  background-color: grey;
  width: 60vw;
  height: 60vh;
  margin: 12.5vh auto;

  @media only screen and (max-width: 600px) {
    & {
      width: 80vw;
      height: 80vh;
      margin-top: 5vh;
    }
  }
`;

export default WelcomeContainer;
