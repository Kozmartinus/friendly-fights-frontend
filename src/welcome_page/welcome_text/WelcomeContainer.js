import styled from "styled-components";

const WelcomeContainer = styled.div`
  background-color: rgba(220, 220, 220, 0.9);
  width: 60vw;
  height: 60vh;
  /* opacity: 0.9; */
  margin: 0 auto 12.5vh auto;
  padding-top: 12.5vh;
  background-clip: content-box;
  display: flex;
  flex-wrap: wrap;

  @media only screen and (max-width: 600px) {
    & {
      width: 80vw;
      height: 80vh;
      margin: 5vh auto;

      display: flex;
      flex-direction: column;
    }
  }
`;

export default WelcomeContainer;
