import React from "react";
import IconButton from "../IconButton";
import { Wrapper } from "./styled";
import { Menu } from "@material-ui/icons";

const MenuButton = (props) => {
  return (
    <Wrapper>
      <IconButton
        onSubmit={props.onSubmit}
        icon={<Menu />}
        ariaLabel="Menu desplegable"
        hidden={props.hidden}
        tutorial={props.tutorial}
        disabled={props.disabled}
      />
    </Wrapper>
  );
};

export default MenuButton;
