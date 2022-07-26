import React from "react";
import { CheckboxInput, Container } from "./styled";

const Checkbox = (props) => {
  const handleOnChange = (event) => {
    props.onChange(event.target.name, event.target.checked);
  };

  return (
    <Container className="topping">
      <CheckboxInput
        type="checkbox"
        id="topping"
        name="highContrastCheckbox"
        value="Paneer"
        checked={props.value}
        aria-checked={props.value}
        onChange={handleOnChange}
        role="checkbox"
        aria-label={props.label}
        scale={props.scale}
        aria-hidden={props.hidden}
        tabIndex={props.hidden ? "-1" : ""}
      />
    </Container>
  );
};

export default Checkbox;
