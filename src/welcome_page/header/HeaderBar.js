import styled from 'styled-components';

const HeaderBar = styled.header`
  background-color: blue;
  width: 100vw;
  height: 15vh;

  @media only screen and (max-width: 600px) {
    & {
      height: 10vh;
    }
  }
`;

export default HeaderBar;
