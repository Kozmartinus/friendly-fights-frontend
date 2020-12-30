import styled from 'styled-components';

const HeaderBar = styled.header`
  background-color: blue;
  width: 100vw;
  height: 15vh;

  display: flex;
  justify-content: start;
  align-items: center;

  .imageContainer {
    height: 80%;
    width: 20%;
  }

  h1 {
    width: 80%;
    text-align: center;
  }

  @media only screen and (max-width: 600px) {
    & {
      height: 10vh;
    }
  }
`;

export default HeaderBar;
