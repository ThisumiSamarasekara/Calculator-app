import "./Theme.css";
import { useState } from "react";

const Theme = ({ toggled }) => {
  const [toggleState, setToggleState] = useState(null);

  const handleToggle = () => {
    let newState;

    if (toggleState === null || toggleState === false) {
      newState = true;
    } else if (toggleState === true) {
      newState = null;
    } else {
      newState = false;
    }

    setToggleState(newState);
  };

  return (
    <div className="theme_container">
      <div className="toggle_container">
        <div className="theme_heading">
          <p>THEME</p>
        </div>
        <div
          className={`theme_box ${toggleState === null ? "indeterminate" : ""}`}
        >
          <label>
            <input
              type="checkbox"
              checked={toggleState === true}
              onChange={() => {}}
            />
            <span onClick={handleToggle} />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Theme;
