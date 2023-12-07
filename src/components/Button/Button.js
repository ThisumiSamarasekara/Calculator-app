import React, { useState } from "react";
import "./Button.css";

const Button = ({
  value,
  fontSize1,
  box1BackgroundColor,
  box2BackgroundColor,
  color1,
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const isDelButton = value === "DEL";
  const box1Style = {
    backgroundColor:
      isHovered && isDelButton ? "hsl(225, 21%, 70%)" : box1BackgroundColor,
  };
  const box2Style = {
    backgroundColor: box2BackgroundColor,
  };
  const numberStyle = { color: color1, fontSize: fontSize1 };

  return (
    <div className="button_container">
      <button
        className="box1"
        style={box1Style}
        onClick={() => onClick && onClick(value)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="number" style={numberStyle}>
          {value}
        </div>
      </button>
      <button className="box2" style={box2Style}></button>
    </div>
  );
};

export default Button;
