import styled from 'styled-components';

const UserContainer = styled.div`
  background-color: pink;
  width: 40%;
  height: 100%;
  overflow-y: auto;

  .buttonBox {
    height: 10%;

    display: flex;
    justify-content: space-around;
    align-items: flex-end;

    button {
      height: 75%;
      width: 75px;
    }

    .active {
      background-color: grey;
    }
  }

  @media only screen and (max-width: 600px) {
    & {
      width: 100%;
      height: 50%;
    }

    .buttonBox {
      /* margin: 10% 0; */
      height: 10%;
    }
  }
`;

export default UserContainer;
