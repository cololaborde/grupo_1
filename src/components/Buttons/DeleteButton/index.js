import { Delete } from "@material-ui/icons";
import React from "react";
import IconButton from "../IconButton";
import { Wrapper } from "./styled";

const SubButton = (props) => {
  return (
    <Wrapper>
      <IconButton
        onSubmit={props.onSubmit}
        icon={<Delete />}
        ariaLabel={props.ariaLabel}
        hidden={props.hidden}
        tutorial={props.tutorial}
        disabled={props.disabled}
      />
    </Wrapper>
  );
};

export default SubButton;
