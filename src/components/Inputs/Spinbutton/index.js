import React from "react";
import { SpinbuttonInput } from "./styled";

const Spinbutton = (props) => {
  const handleChange = (event) => {
    if (event.target.value > 5) {
      event.target.value = 5;
    } else if (event.target.value < 0) {
      event.target.value = 0;
    }
    props.onChange(event.target.name, event.target.value);
  };

  return (
    <SpinbuttonInput
      id="typeinp"
      type="number"
      name="fontSizeSpinbutton"
      min="0"
      max="5"
      value={props.value}
      onChange={handleChange}
      step="1"
      aria-label={props.label}
      fontSize={props.fontSize}
      aria-hidden={props.hidden}
      tabIndex={props.hidden ? "-1" : ""}
    />
  );
};

export default Spinbutton;
