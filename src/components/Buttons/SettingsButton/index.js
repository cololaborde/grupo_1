import React from "react";
import IconButton from "../IconButton";
import { Wrapper } from "./styled";
import { Settings } from "@material-ui/icons";

const SettingsButton = (props) => {
  return (
    <Wrapper>
      <IconButton
        onSubmit={props.onSubmit}
        icon={<Settings />}
        ariaLabel="Opciones"
        hidden={props.hidden}
        tutorial={props.tutorial}
        disabled={props.disabled}
      />
    </Wrapper>
  );
};

export default SettingsButton;
