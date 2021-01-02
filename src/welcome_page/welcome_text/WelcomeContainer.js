import styled from 'styled-components';

const WelcomeContainer = styled.div`
  background-color: rgba(220, 220, 220, 0.9);
  width: 60vw;
  height: 60vh;
  margin: 0 auto 12.5vh auto;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  background-clip: content-box;
  display: flex;
  flex-wrap: wrap;
  border: solid white 2px;
  border-radius: 20px;

  @media only screen and (max-width: 600px) {
    & {
      width: 80vw;
      height: 90vh;
      margin: 0 auto 5vh auto;
      /* padding-top: 5vh; */

      display: flex;
      flex-direction: column;
    }
  }
`;

export default WelcomeContainer;
