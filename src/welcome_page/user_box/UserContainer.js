import styled from 'styled-components';

const UserContainer = styled.div`
  background-color: rgba(6, 6, 84, 0.3);
  background: linear-gradient(to right, rgba(6, 6, 84, 0), rgba(6, 6, 84, 0.7));
  width: 40%;
  overflow-y: auto;
  border-radius: 20px;

  .buttonBox {
    height: 10%;
    margin-bottom: -3px;

    display: flex;
    justify-content: space-around;
    align-items: flex-end;

    button {
      min-width: 50px;
      width: 25%;
      outline: none;
      cursor: pointer;
      border-bottom: black solid 3px;
      /* font-size: 11px; */
    }

    .active {
      border: black solid 3px;
      font-weight: 750;
    }

    #loginModeSwitchButton {
      background-color: yellow;
    }

    #registerModeSwitchButton {
      background-color: pink;
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
      height: 10%;

      button {
        width: 25%;
      }
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
