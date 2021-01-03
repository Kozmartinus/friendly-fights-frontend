import styled from 'styled-components';

const UserContainer = styled.div`
  width: 40%;
  overflow-y: auto;
  color: white;

  .buttonBox {
    height: 10%;
    margin-bottom: -3px;
    margin-top: 10%;
    padding: 0 10px;

    display: flex;
    justify-content: space-around;
    align-items: flex-end;

    button {
      width: 50%;
      outline: none;
      cursor: pointer;
      border: none;
      border-bottom: ${(props) => props.theme.borderPrimary};
      background-color: ${(props) => props.theme.inactiveButtonColor};
    }

    .active {
      border: ${(props) => props.theme.borderPrimary};
      font-weight: 750;
      background-color: ${(props) => props.theme.activeButtonColor};
    }

    #loginModeSwitchButton {
      border-radius: 15px 0 0;
    }

    #registerModeSwitchButton {
      border-radius: 0 15px 0 0;
    }
  }

  @media only screen and (max-width: 650px) {
    & {
      width: 100%;
      height: 50%;
    }

    .buttonBox {
      margin-top: 0;
      height: 10%;
    }
  }

  @media only screen and (max-width: 1200px) {
    .buttonBox {
      button {
        padding: 0;
        font-size: 11px;
      }
    }
  }
`;

export default UserContainer;
