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
  setShowDownloadModal,
  setShowExitModal,
  setShowHelpModal,
} from "../../../store/Home/actions";

const HamburgerMenu = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const showConfigModal = () => {
    dispatch(setShowConfigModal(true));
    document
      .getElementById("option-modal")
      .querySelector("#close-icon")
      .focus();
  };

  const showExitModal = () => {
    dispatch(setShowExitModal(true));
    document.getElementById("exit-modal").querySelector("#close-icon").focus();
  };

  const showHelpModal = () => {
    dispatch(setShowHelpModal(true));
    document.getElementById("help-modal").querySelector("#close-icon").focus();
  };

  const showDownloadModal = () => {
    dispatch(setShowDownloadModal(true));
    document
      .getElementById("download-modal")
      .querySelector("#close-icon")
      .focus();
  };

  let custom_button;
  if (props.hasHelp) {
    custom_button = (
      <HelpButton onSubmit={() => showHelpModal()} hidden={props.hidden} />
    );
  } else {
    custom_button = (
      <DownloadButton
        onSubmit={() => showDownloadModal()}
        hidden={props.hidden}
      />
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
              onSubmit={() => showConfigModal()}
              hidden={props.hidden}
            />
            <HomeButton
              onSubmit={() => showExitModal()}
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
          onSubmit={() => showConfigModal()}
          hidden={props.hidden}
        />
        <HomeButton onSubmit={() => showExitModal()} hidden={props.hidden} />
      </MenuContainer>
    );
  }
  return <Wrapper>{menu}</Wrapper>;
};

export default HamburgerMenu;
