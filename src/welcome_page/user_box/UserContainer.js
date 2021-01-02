import styled from 'styled-components';

const UserContainer = styled.div`
  background-color: rgba(6, 6, 84, 0.3);
  background: linear-gradient(to right, rgba(6, 6, 84, 0), rgba(6, 6, 84, 0.7));
  width: 40%;
  overflow-y: auto;
  border-radius: 20px;
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
      border-bottom: white solid 3px;
      background-color: rgba(163, 163, 163);
    }

    .active {
      border: white solid 3px;
      font-weight: 750;
      background-color: white;
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
      background: linear-gradient(
        to bottom,
        rgba(6, 6, 84, 0),
        rgba(6, 6, 84, 0.7)
      );
      width: 100%;
      height: 50%;
      border-radius: 0 0 20px 20px;
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
