import React from "react";
import Card from "./Card";

function AddGroupCard(props) {
  return (
    <Card
      image={props.image}
      plus={props.plus}
      onClick={() => props.clickHandler()}
    ></Card>
  );
}

export default AddGroupCard;
