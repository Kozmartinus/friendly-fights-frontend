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
    display: flex;
    justify-content: start;
    align-items: center;

    img {
      margin: 0 0.5vw;
    }
  }

  #right-icon-container {
    display: flex;
    justify-content: flex-end;
  }

  h1 {
    width: 80%;
    text-align: center;
  }

  @media only screen and (max-width: ${(props) =>
      props.theme.mobileDeviceSizeLimit}) {
    & {
      height: 10vh;
    }
  }
`;

export default HeaderBar;
