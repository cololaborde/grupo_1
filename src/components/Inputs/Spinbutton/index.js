import React from "react";
import { SpinbuttonInput } from "./styled";

const Spinbutton = (props) => {
  const handleChange = (event) => {
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
      aria-hidden={props.hidden | false}
      tabIndex={props.hidden ? "-1" : ""}
    />
  );
};

export default Spinbutton;
