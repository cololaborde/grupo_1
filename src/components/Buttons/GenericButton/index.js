import React from "react";
import { Wrapper, Button } from "./styled";

const GenericButton = (props) => {
  return (
    <Wrapper>
      <Button
        disabled={props.disabled}
        textColor={props.textColor}
        fontSize={props.fontSize}
        backgroundColor={props.backgroundColor}
        onClick={props.onSubmit}
        aria-hidden={props.hidden | false}
        tabIndex={props.hidden ? "-1" : ""}
      >
        {props.text}
      </Button>
    </Wrapper>
  );
};

export default GenericButton;
