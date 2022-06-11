import React from "react";
import { Wrapper, Button } from "./styled";

const GenericButton = (props) => {
  return (
    <Wrapper>
      <Button
        textColor={props.textColor}
        fontSize={props.fontSize}
        backgroundColor={props.backgroundColor}
        onClick={props.onSubmit}
      >
        {" "}
        {props.text}
      </Button>
    </Wrapper>
  );
};

export default GenericButton;
