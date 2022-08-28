import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import {
  selectFontIncrease,
  selectOpenModal,
} from "../../../../store/Home/selectors";
import HamburgerMenu from "../../../../components/Buttons/HamburgerMenu";
import { CounterContainer, CounterText } from "./styled";

const TopBar = ({ finished, counterText }) => {
  const fontIncrease = useSelector(selectFontIncrease);
  const modalOpened = useSelector(selectOpenModal);
  return (
    <>
      {!finished && (
        <CounterContainer>
          <CounterText fontSize={15 + Number(fontIncrease) * 2 + "px"}>
            {counterText}
          </CounterText>
        </CounterContainer>
      )}
      <HamburgerMenu hasHelp="true" hidden={modalOpened ? true : false} />
    </>
  );
};

TopBar.propTypes = {
  finished: PropTypes.bool,
  counterText: PropTypes.string,
};

export default TopBar;
