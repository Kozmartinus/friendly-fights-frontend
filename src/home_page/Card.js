import styled from "styled-components";

const Card = styled.div`
  border-radius: 50px 10px 50px 10px;
  -moz-border-radius: 50px 10px 50px 10px;
  -webkit-border-radius: 50px 10px 50px 10px;
  border: 2px
    ${(props) => {
      // console.log(props);

      return props.plus === "true" ? "dotted" : "solid";
    }}
    #000000;
  width: 200px;
  height: 125px;
  margin: 6px 12px;
  position: relative;
  overflow: hidden;
  background-image: url("${(props) => props.image}");
  /* background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"); */
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;

export default Card;
