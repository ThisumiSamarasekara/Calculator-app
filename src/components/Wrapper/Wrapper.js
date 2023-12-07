import "./Wrapper.css";
import React, { useState } from "react";
import ButtonBox from "../ButtonBox/ButtonBox";
import Screen from "../Screen/Screen";
import Topic from "../Topic/Topic";
// import Theme from "../Theme/Theme";

function Wrapper() {
  const [input, setInput] = useState("");
  const [calculationCompleted, setCalculationCompleted] = useState(false);

  const handleButtonClick = (value) => {
    if (value === "DEL") {
      // If DEL button is clicked, remove the last character
      setInput((prevInput) => prevInput.slice(0, -1));
    } else if (value === "=") {
      try {
        // If = button is clicked, evaluate the expression
        const result = eval(input);
        setInput(result.toString());
        setCalculationCompleted(true);
      } catch (error) {
        // Handle error (e.g., division by zero)
        setInput("Error");
        setCalculationCompleted(true);
      }
    } else if (value === ".") {
      // If dot button is clicked
      const lastChar = input.slice(-1);
      if (!lastChar.match(/[0-9]/)) {
        // If the last character is not a digit, add a leading zero
        setInput((prevInput) => prevInput + "0" + value);
      } else if (!input.includes(".")) {
        // If the input does not already contain a dot, add it
        setInput((prevInput) => prevInput + value);
      }
    } else {
      // If any other button is clicked, handle as usual
      if (calculationCompleted) {
        setInput(value);
        setCalculationCompleted(false);
      } else {
        // Check if the input is empty or ends with an operator
        const lastChar = input.slice(-1);
        if (input === "" || ["+", "-", "*", "/"].includes(lastChar)) {
          // If the input is empty or ends with an operator, do not allow entering '*' or '/'
          if (["*", "/"].includes(value)) {
            return;
          }
        }
        // If input is '0', replace it with the new value
        setInput((prevInput) =>
          prevInput === "0" ? value : prevInput + value
        );
      }
    }
  };

  const handleResetClick = () => {
    // Clear the input when the reset button is clicked
    setInput("");
    setCalculationCompleted(false);
  };

  return (
    <div className="Wrapper">
      <div className="calculator">
        <Topic />
        {/* <Theme /> */}
        <Screen input={input} />
        <ButtonBox
          onButtonClick={handleButtonClick}
          onResetClick={handleResetClick}
        />
      </div>
    </div>
  );
}

export default Wrapper;
