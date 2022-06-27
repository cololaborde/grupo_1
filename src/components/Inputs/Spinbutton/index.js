import React, { useState } from "react";
import { SpinbuttonInput } from "./styled";

const Spinbutton = (props) => {
  const [value, setValue] = useState(props.value);
  const handleChange = (event) => {
    setValue(event.target.value);
    props.onChange(event.target.name, event.target.value);
  };

  return (
    <SpinbuttonInput
      id="typeinp"
      type="number"
      name="fontSizeSpinbutton"
      min="0"
      max="5"
      value={value}
      onChange={handleChange}
      step="1"
      aria-label={props.label}
      fontSize={props.fontSize}
    />
  );
};

export default Spinbutton;
