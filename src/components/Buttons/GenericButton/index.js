import React from "react";
import { Wrapper, Button } from "./styled";

const GenericButton = (props) => {
  return (
    <Wrapper>
      <Button onClick={props.onSubmit}> {props.text}</Button>
    </Wrapper>
  );
};

export default GenericButton;
