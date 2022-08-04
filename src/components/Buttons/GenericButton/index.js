import React from "react";
import { Wrapper, Button } from "./styled";

const GenericButton = (props) => {
  return (
    <Wrapper>
      <Button
        disabled={props.disabled}
        aria-disabled={props.disabled}
        textColor={props.textColor}
        fontSize={props.fontSize}
        backgroundColor={props.backgroundColor}
        onClick={props.onSubmit}
        aria-hidden={props.hidden}
        tabIndex={props.hidden ? "-1" : "0"}
        id={props.id}
      >
        {props.text}
      </Button>
    </Wrapper>
  );
};

export default GenericButton;
