import styled from "styled-components";

const WideContainer = styled.div`
  background-color: rgba(220, 220, 220, 0.9);
  width: 90vw;
  min-height: 423px;
  margin: 0 auto 12.5vh auto;
  padding: 20px;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  background-clip: content-box;

  display: grid;
  grid-template-columns: repeat(auto-fill, 228px);
  justify-content: space-around;

  border: solid white 3px;
  border-radius: 20px;
`;

export default WideContainer;
