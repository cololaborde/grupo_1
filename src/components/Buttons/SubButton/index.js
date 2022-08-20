import { Remove } from "@material-ui/icons";
import React from "react";
import IconButton from "../IconButton";
import { Wrapper } from "./styled";

const SubButton = (props) => {
  return (
    <Wrapper>
      <IconButton
        onSubmit={props.onSubmit}
        icon={<Remove />}
        ariaLabel={"Reducir " + props.name}
        hidden={props.hidden}
        tutorial={props.tutorial}
        padding={props.padding}
        disabled={props.disabled}
      />
    </Wrapper>
  );
};

export default SubButton;
