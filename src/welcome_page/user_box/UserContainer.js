import styled from 'styled-components';

const UserContainer = styled.div`
  background-color: rgba(6, 6, 84, 0.3);
  background: linear-gradient(to right, rgba(6, 6, 84, 0), rgba(6, 6, 84, 0.7));
  width: 40%;
  height: 100%;
  overflow-y: auto;

  .buttonBox {
    height: 10%;
    margin-bottom: -3px;

    display: flex;
    justify-content: flex-start;
    align-items: flex-end;

    button {
      margin-left: 20px;
      height: 75%;
      width: 75px;
      outline: none;
      cursor: pointer;
      border-bottom: black solid 3px;
    }

    .active {
      border: black solid 3px;
    }
  }

  @media only screen and (max-width: 600px) {
    & {
      width: 100%;
      height: 50%;
    }

    .buttonBox {
      height: 10%;
    }
  }
`;

export default UserContainer;
