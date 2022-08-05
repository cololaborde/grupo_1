import React from "react";
import { Wrapper, Button } from "./styled";

const IconButton = (props) => {
  return (
    <Wrapper>
      <Button
        onClick={props.onSubmit}
        textColor={props.textColor}
        backgroundColor={props.backgroundColor}
        aria-label={
          (props.tutorial ? "Botón de tutorial: " : "") + props.ariaLabel
        }
        aria-hidden={props.hidden ? "true" : "false"}
        tabIndex={props.hidden ? "-1" : "0"}
        id={props.ariaLabel}
        padding={props.padding}
      >
        {props.icon}
      </Button>
    </Wrapper>
  );
};

export default IconButton;
