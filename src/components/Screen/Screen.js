import React from "react";
import "./Screen.css";

const Screen = ({ input }) => {
  console.log("Input prop:", input);
  return (
    <div className="screen_container">
      <input type="text" name="input_numbers" value={input} />
    </div>
  );
};

export default Screen;
