import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import {
  goToHome,
  goToInformation,
  setGoBackHome,
} from "../../../../store/Home/actions";
import {
  selectFontIncrease,
  selectHighContrast,
  selectOpenModal,
} from "../../../../store/Home/selectors";
import { theme } from "../../../../theme";
import GenericButton from "../../../../components/Buttons/GenericButton";
import {
  ButtonsContainer,
  HighlightedText,
  LineContainer,
  SvgContainer,
  Text,
} from "./styled";
import Check from "../../../../components/Svgs/Check";
import Cross from "../../../../components/Svgs/Cross";
import { restoreToInitialState } from "../../../../store/Question/actions";

const FinalScreen = ({ rightAnswers, wrongAnswers }) => {
  const dispatch = useDispatch();
  const fontIncrease = useSelector(selectFontIncrease);
  const highContrast = useSelector(selectHighContrast);
  const currentTheme = theme(highContrast);
  const modalOpened = useSelector(selectOpenModal);
  return (
    <>
      <Text fontSize={20 + Number(fontIncrease) * 2 + "px"}>
        {"Resultado: "}
      </Text>
      <LineContainer>
        <SvgContainer
          lineSize={(20 + Number(fontIncrease) * 2) * 1.15 + 6 + "px"}
        >
          <Check />
        </SvgContainer>
        <HighlightedText
          fontSize={20 + Number(fontIncrease) * 2 + "px"}
          backgroundColor={currentTheme.correct}
        >
          {rightAnswers + " correctas "}
        </HighlightedText>
      </LineContainer>
      <LineContainer>
        <SvgContainer
          lineSize={(20 + Number(fontIncrease) * 2) * 1.15 + 6 + "px"}
        >
          <Cross />
        </SvgContainer>
        <HighlightedText
          fontSize={20 + Number(fontIncrease) * 2 + "px"}
          backgroundColor={currentTheme.incorrect}
        >
          {wrongAnswers + " incorrectas "}
        </HighlightedText>
      </LineContainer>

      <ButtonsContainer>
        <GenericButton
          fontSize={15 + Number(fontIncrease) * 2 + "px"}
          text={"Inicio"}
          onSubmit={() => {
            dispatch(goToHome);
            dispatch(restoreToInitialState());
          }}
          hidden={modalOpened ? "true" : "false"}
        />

        <GenericButton
          fontSize={15 + Number(fontIncrease) * 2 + "px"}
          text={"Información"}
          onSubmit={() => {
            dispatch(setGoBackHome(false));
            dispatch(goToInformation());
            dispatch(restoreToInitialState());
          }}
          hidden={modalOpened ? "true" : "false"}
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
