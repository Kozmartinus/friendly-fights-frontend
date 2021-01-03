import styled from 'styled-components';

const HeaderBar = styled.header`
  background-color: ${(props) => props.theme.headerColor};
  border-bottom: ${(props) => props.theme.borderPrimary};
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
