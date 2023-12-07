import React from "react";
import "./ButtonBox.css";
import Button from "../Button/Button";
import Button2 from "../Button2/Button2";

const ButtonBox = ({ onButtonClick, onResetClick }) => {
  return (
    <div className="Button_set">
      <div className="Button_set1">
        <Button value="7" onClick={() => onButtonClick("7")} />
        <Button value="8" onClick={() => onButtonClick("8")} />
        <Button value="9" onClick={() => onButtonClick("9")} />
        <Button
          value="DEL"
          fontSize1="22px"
          color1="white"
          box1BackgroundColor="hsl(225, 21%, 49%)"
          box2BackgroundColor="hsl(224, 28%, 35%)"
          onClick={() => onButtonClick("DEL")}
        />

        <Button value="4" onClick={() => onButtonClick("4")} />
        <Button value="5" onClick={() => onButtonClick("5")} />
        <Button value="6" onClick={() => onButtonClick("6")} />
        <Button value="+" onClick={() => onButtonClick("+")} />

        <Button value="1" onClick={() => onButtonClick("1")} />
        <Button value="2" onClick={() => onButtonClick("2")} />
        <Button value="3" onClick={() => onButtonClick("3")} />
        <Button value="-" onClick={() => onButtonClick("-")} />

        <Button value="." onClick={() => onButtonClick(".")} />
        <Button value="0" onClick={() => onButtonClick("0")} />
        <Button value="/" onClick={() => onButtonClick("/")} />
        <Button value="x" onClick={() => onButtonClick("*")} />
      </div>

      <div className="reset">
        <Button2
          value="RESET"
          box1BackgroundColor="hsl(225, 21%, 49%)"
          box2BackgroundColor="hsl(224, 28%, 35%)"
          onClick={() => onResetClick()}
        />
        <Button2
          value="="
          box1BackgroundColor="hsl(6, 63%, 50%)"
          box2BackgroundColor="hsl(6, 70%, 34%)"
          onClick={() => onButtonClick("=")}
        />
      </div>
    </div>
  );
};

export default ButtonBox;
