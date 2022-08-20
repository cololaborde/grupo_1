import React from "react";
import IconButton from "../IconButton";
import { Wrapper } from "./styled";
import { Home } from "@material-ui/icons";

const HomeButton = (props) => {
  return (
    <Wrapper>
      <IconButton
        onSubmit={props.onSubmit}
        icon={<Home />}
        ariaLabel="Inicio"
        hidden={props.hidden}
        tutorial={props.tutorial}
        disabled={props.disabled}
      />
    </Wrapper>
  );
};

export default HomeButton;
