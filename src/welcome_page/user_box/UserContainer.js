import styled from 'styled-components';

const UserContainer = styled.div`
  background-color: pink;
  width: 40%;
  height: 100%;

  .buttonBox {
    margin: 15% 0;
    background-color: brown;

    display: flex;
    justify-content: space-around;

    button {
      width: 75px;
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
