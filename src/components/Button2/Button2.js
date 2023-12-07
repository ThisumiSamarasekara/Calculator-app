import React, { useState } from "react";
import "./Button2.css";

const Button2 = ({
  value,
  box1BackgroundColor,
  box2BackgroundColor,
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const isResetButton = value === "RESET";
  const isEqualButton = value === "=";

  let backgroundColor = box1BackgroundColor;

  if (isHovered && isResetButton) {
    backgroundColor = "hsl(225, 21%, 70%)";
  } else if (isHovered && isEqualButton) {
    backgroundColor = "hsl(6, 63%, 65%)";
  }

  const box1Style = {
    backgroundColor,
  };
  const box2Style = {
    backgroundColor: box2BackgroundColor,
  };

  return (
    <div className="button2_container">
      <button
        className="button_box1"
        style={box1Style}
        onClick={() => onClick && onClick(value)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="number">{value}</div>
      </button>
      <button className="button_box2" style={box2Style}></button>
    </div>
  );
};

export default Button2;
