import React, { useState } from "react";
import { Wrapper, MenuContainer, HiddenContainer, } from "./styled";
import DownloadButton from "../DownloadButton";
import SettingsButton from "../SettingsButton";
import HomeButton from "../HomeButton";
import MenuButton from "../MenuButton";
import HelpButton from "../HelpButton";

const HamburguerMenu = (props) => {
    const [menuOpen, setMenuOpen] = useState(false)
    const handleToggle = () => {
        setMenuOpen(!menuOpen)
    }
    let custom_button;
    if (props.hasHelp === "true") {
        custom_button= <HelpButton onSubmit={ props.onSubmit }/>
    } else {
        custom_button = <DownloadButton onSubmit={ props.onSubmit }/>
    }
    let menu;
    if (window.innerWidth < 1024) {
        menu = 
        <MenuContainer>
            <MenuButton onSubmit={ handleToggle }/>
            {menuOpen ? 
                <HiddenContainer>
                    { custom_button }
                    <SettingsButton/>
                    <HomeButton/>
                </HiddenContainer>
                : ""}
        </MenuContainer>;
      } else {
        menu = 
        <MenuContainer>
            { custom_button }
            <SettingsButton/>
            <HomeButton/>
        </MenuContainer>;
    }
    return(
        <Wrapper>
            { menu }
        </Wrapper>
    )
}

export default HamburguerMenu