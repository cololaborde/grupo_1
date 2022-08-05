import { Add } from "@material-ui/icons";
import React from "react";
import IconButton from "../IconButton";
import { Wrapper } from "./styled";

const AddButton = (props) => {
  return (
    <Wrapper>
      <IconButton
        onSubmit={props.onSubmit}
        icon={<Add />}
        ariaLabel={"Aumentar " + props.name}
        hidden={props.hidden}
        tutorial={props.tutorial}
        padding={props.padding}
      />
    </Wrapper>
  );
};

export default AddButton;
