import React from "react";
import Card from "./Card";
import CardTitle from "./CardTitle";

function GroupCard(props) {
  return (
    <Card image={props.image} onClick={() => props.clickHandler(props.id)}>
      <CardTitle>{props.title}</CardTitle>
    </Card>
  );
}

export default GroupCard;
