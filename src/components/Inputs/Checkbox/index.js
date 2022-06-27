import React, { useState } from "react";
import { CheckboxInput, Container } from "./styled";

const Checkbox = (props) => {
  const [isChecked, setIsChecked] = useState(props.value);
  const handleOnChange = (event) => {
    setIsChecked(!isChecked);
    props.onChange(event.target.name, event.target.checked);
  };

  return (
    <Container className="topping">
      <CheckboxInput
        type="checkbox"
        id="topping"
        name="highContrastCheckbox"
        value="Paneer"
        checked={isChecked}
        aria-checked={isChecked}
        onChange={handleOnChange}
        role="checkbox"
        aria-label={props.label}
        scale={props.scale}
      />
    </Container>
  );
};

export default Checkbox;
