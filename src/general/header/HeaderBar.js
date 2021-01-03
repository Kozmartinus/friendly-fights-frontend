import styled from 'styled-components';

const HeaderBar = styled.header`
  background-color: rgba(6, 6, 84, 0.7);
  border-bottom: solid white 3px;
  box-sizing: border-box;
  width: 100%;
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

  @media only screen and (max-width: 650px) {
    & {
      height: 10vh;
    }
  }
`;

export default HeaderBar;
