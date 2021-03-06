import React from "react";
import WelcomeCard from "../welcome_text/WelcomeCard";
import "./SliderStyle.css";

function Slider() {
  return (
    <div className="slider">
      <div className="load"></div>
      <WelcomeCard />
    </div>
  );
}

export default Slider;
