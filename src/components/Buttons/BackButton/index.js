import { ArrowBack } from "@material-ui/icons";
import React from "react";
import IconButton from "../IconButton";
import { Wrapper } from "./styled";

const BackButton = (props) => {
  return (
    <Wrapper>
      <IconButton
        onSubmit={props.onSubmit}
        icon={<ArrowBack />}
        ariaLabel="Retroceder"
        hidden={props.hidden}
      />
    </Wrapper>
  );
};

export default BackButton;
