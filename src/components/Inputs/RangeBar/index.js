import React, { useState } from "react";

const RangeBar = (props) => {
  const [value, setValue] = useState(props.value);
  const handleChange = (event) => {
    setValue(event.target.value);
    props.onChange(event.target.name, event.target.value);
  };

  return (
    <input
      id="typeinp"
      type="range"
      name="fontSizeRange"
      min="0"
      max="5"
      value={value}
      onChange={handleChange}
      step="1"
      aria-label={props.label}
    />
  );
};

export default RangeBar;
