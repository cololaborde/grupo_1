import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import {
  selectFontIncrease,
  selectOpenModal,
} from "../../../../store/Home/selectors";
import BackButton from "../../../../components/Buttons/BackButton";
import HamburguerMenu from "../../../../components/Buttons/HamburguerMenu";
import { BackContainer, CounterContainer, CounterText } from "./styled";
import { setShowExitModal } from "../../../../store/Home/actions";

const TopBar = ({ finished, counterText }) => {
  const dispatch = useDispatch();
  const fontIncrease = useSelector(selectFontIncrease);
  const modalOpened = useSelector(selectOpenModal);
  const showExitModalConst = () => {
    dispatch(setShowExitModal(true));
    document.getElementById("exit-modal").querySelector("#close-icon").focus();
  };
  return (
    <>
      <BackContainer>
        <BackButton
          onSubmit={() => showExitModalConst()}
          hidden={modalOpened}
        />
      </BackContainer>
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
