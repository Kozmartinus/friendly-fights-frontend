import styled from 'styled-components';

const UserContainer = styled.div`
  background-color: pink;
  width: 40%;
  height: 100%;

  @media only screen and (max-width: 600px) {
    & {
      width: 100%;
      height: 50%;
    }
  }
`;

export default UserContainer;
