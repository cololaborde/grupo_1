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
      <HelpButton
        onSubmit={() => dispatch(setShowHelpModal(true))}
        hidden={props.hidden}
      />
    );
  } else {
    custom_button = (
      <DownloadButton onSubmit={props.onSubmit} hidden={props.hidden} />
    );
  }
  let menu;
  if (window.innerWidth < 1024) {
    menu = (
      <MenuContainer>
        <MenuButton onSubmit={handleToggle} hidden={props.hidden} />
        {menuOpen ? (
          <HiddenContainer>
            {custom_button}
            <SettingsButton
              onSubmit={() => dispatch(setShowConfigModal(true))}
              hidden={props.hidden}
            />
            <HomeButton
              onSubmit={() => dispatch(setShowExitModal(true))}
              hidden={props.hidden}
            />
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
        <SettingsButton
          onSubmit={() => dispatch(setShowConfigModal(true))}
          hidden={props.hidden}
        />
        <HomeButton
          onSubmit={() => dispatch(setShowExitModal(true))}
          hidden={props.hidden}
        />
      </MenuContainer>
    );
  }
  return <Wrapper>{menu}</Wrapper>;
};

export default HamburguerMenu;
