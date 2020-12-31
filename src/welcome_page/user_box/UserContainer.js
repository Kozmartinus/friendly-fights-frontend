import styled from 'styled-components';

const UserContainer = styled.div`
  background-color: pink;
  width: 40%;
  height: 100%;

  .buttonBox {
    margin-top: 15%;

    display: flex;
    justify-content: space-around;

    button {
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
      margin: 10% 0;
    }
  }
`;

export default UserContainer;
