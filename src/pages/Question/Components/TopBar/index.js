import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import {
  selectFontIncrease,
  selectOpenModal,
} from "../../../../store/Home/selectors";
import HamburguerMenu from "../../../../components/Buttons/HamburguerMenu";
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
      <HamburguerMenu hasHelp="true" hidden={modalOpened} />
    </>
  );
};

TopBar.propTypes = {
  finished: PropTypes.bool,
  counterText: PropTypes.string,
};

export default TopBar;
