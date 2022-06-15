import React, { useState } from "react";
import { Wrapper, MenuContainer, HiddenContainer } from "./styled";
import DownloadButton from "../DownloadButton";
import SettingsButton from "../SettingsButton";
import HomeButton from "../HomeButton";
import MenuButton from "../MenuButton";
import HelpButton from "../HelpButton";
import { useDispatch } from "react-redux";
import {
  setShowConfigModal,
  setShowExitModal,
  setShowHelpModal,
} from "../../../store/Home/actions";

const HamburguerMenu = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };
  let custom_button;
  if (props.hasHelp) {
    custom_button = (
      <HelpButton onSubmit={() => dispatch(setShowHelpModal(true))} />
    );
  } else {
    custom_button = <DownloadButton onSubmit={props.onSubmit} />;
  }
  let menu;
  if (window.innerWidth < 1024) {
    menu = (
      <MenuContainer>
        <MenuButton onSubmit={handleToggle} />
        {menuOpen ? (
          <HiddenContainer>
            {custom_button}
            <SettingsButton
              onSubmit={() => dispatch(setShowConfigModal(true))}
            />
            <HomeButton onSubmit={() => dispatch(setShowExitModal(true))} />
          </HiddenContainer>
        ) : (
          ""
        )}
      </MenuContainer>
    );
  } else {
    menu = (
      <MenuContainer>
        {custom_button}
        <SettingsButton onSubmit={() => dispatch(setShowConfigModal(true))} />
        <HomeButton onSubmit={() => dispatch(setShowExitModal(true))} />
      </MenuContainer>
    );
  }
  return <Wrapper>{menu}</Wrapper>;
};

export default HamburguerMenu;
