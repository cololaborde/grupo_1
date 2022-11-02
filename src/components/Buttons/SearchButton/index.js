import { Search } from "@material-ui/icons";
import React from "react";
import IconButton from "../IconButton";
import { Wrapper } from "./styled";

const SearchButton = (props) => {
  return (
    <Wrapper>
      <IconButton
        onSubmit={props.onSubmit}
        icon={<Search />}
        ariaLabel="Buscar"
        hidden={props.hidden}
        tutorial={props.tutorial}
        disabled={props.disabled}
      />
    </Wrapper>
  );
};

export default SearchButton;
