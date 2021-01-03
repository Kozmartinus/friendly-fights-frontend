import styled from 'styled-components';

const WelcomeContainer = styled.div`
  background: linear-gradient(
    to right,
    rgba(75, 77, 124, 0.9),
    rgba(219, 219, 219, 0.9),
    rgba(75, 77, 124, 0.9)
  );
  width: 60vw;
  height: 60vh;
  margin: 0 auto 12.5vh auto;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  background-clip: content-box;
  display: flex;
  flex-wrap: wrap;
  border: solid white 3px;
  border-radius: 20px;

  @media only screen and (max-width: 650px) {
    & {
      width: 80vw;
      height: 90vh;
      margin: 0 auto 5vh auto;

      display: flex;
      flex-direction: column;

      background: linear-gradient(
        to bottom,
        rgba(75, 77, 124, 0.9),
        rgba(219, 219, 219, 0.9),
        rgba(75, 77, 124, 0.9)
      );
    }
  }
`;

export default WelcomeContainer;
