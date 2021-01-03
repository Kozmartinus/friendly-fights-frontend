import styled from 'styled-components';

const WelcomeContainer = styled.div`
  background: linear-gradient(
    to right,
    ${(props) => props.theme.tripleGradientBackground}
  );
  width: 60vw;
  height: 60vh;
  margin: 0 auto 12.5vh auto;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  background-clip: content-box;
  display: flex;
  flex-wrap: wrap;
  border: ${(props) => props.theme.borderPrimary};
  border-radius: ${(props) => props.theme.borderRadius};

  @media only screen and (max-width: 650px) {
    & {
      width: 80vw;
      height: 90vh;
      margin: 0 auto 5vh auto;

      display: flex;
      flex-direction: column;

      background: linear-gradient(
        to bottom,
        ${(props) => props.theme.tripleGradientBackground}
      );
    }
  }
`;

export default WelcomeContainer;
