import React from "react";
import IconButton from "../IconButton";
import { Wrapper } from "./styled";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

const HelpButton = (props) => {
  return (
    <Wrapper>
      <IconButton
        onSubmit={props.onSubmit}
        icon={<QuestionMarkIcon />}
        ariaLabel="Ayuda"
        hidden={props.hidden}
        tutorial={props.tutorial}
        disabled={props.disabled}
      />
    </Wrapper>
  );
};

export default HelpButton;
