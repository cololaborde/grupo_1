import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { goToHome, goToInformation } from "../../../../store/Home/actions";
import {
  selectFontIncrease,
  selectHighContrast,
  selectOpenModal,
} from "../../../../store/Home/selectors";
import { theme } from "../../../../theme";
import GenericButton from "../../../../components/Buttons/GenericButton";
import { ButtonsContainer, HighlightedText, Text } from "./styled";

const FinalScreen = ({ rightAnswers, wrongAnswers }) => {
  const dispatch = useDispatch();
  const fontIncrease = useSelector(selectFontIncrease);
  const highContrast = useSelector(selectHighContrast);
  const currentTheme = theme(highContrast);
  const modalOpened = useSelector(selectOpenModal);
  return (
    <>
      <Text fontSize={20 + Number(fontIncrease) + "px"}>
        {"Resultado: "}
        <HighlightedText backgroundColor={currentTheme.correct}>
          {rightAnswers + " correctas"}
        </HighlightedText>{" "}
        <HighlightedText backgroundColor={currentTheme.incorrect}>
          {wrongAnswers + " incorrectas"}
        </HighlightedText>
      </Text>

      <ButtonsContainer>
        <GenericButton
          fontSize={15 + Number(fontIncrease) * 2 + "px"}
          text={"Inicio"}
          onSubmit={() => dispatch(goToHome)}
          hidden={() => modalOpened()}
        />

        <GenericButton
          fontSize={15 + Number(fontIncrease) * 2 + "px"}
          text={"Información"}
          onSubmit={() => dispatch(goToInformation)}
          hidden={() => modalOpened()}
        />
      </ButtonsContainer>
    </>
  );
};

FinalScreen.propTypes = {
  rightAnswers: PropTypes.number,
  wrongAnswers: PropTypes.number,
};

export default FinalScreen;
