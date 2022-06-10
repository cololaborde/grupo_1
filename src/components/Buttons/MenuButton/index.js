import React from "react";
import IconButton from "../IconButton";
import { Wrapper } from "./styled";
import { Menu } from '@material-ui/icons';

const MenuButton = (props) => {
    return(
        <Wrapper>
            <IconButton onSubmit={props.onSubmit} icon={<Menu/>}/>
        </Wrapper>
    )
}

export default MenuButton