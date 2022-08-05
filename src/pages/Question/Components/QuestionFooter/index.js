import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import {
  selectFontIncrease,
  selectHighContrast,
  selectOpenModal,
  selectShowInformationTutorial,
} from "../../../../store/Home/selectors";
import { theme } from "../../../../theme";
import GenericButton from "../../../../components/Buttons/GenericButton";
import {
  ResultButtons,
  ResultContainer,
  ResultTip,
  ResultTitle,
  Wrapper,
} from "./styled";
import {
  goToInformationPage,
  goToInformationTutorialPage,
} from "../../../../store/Home/actions";

const QuestionFooter = ({
  answered,
  selectedAnswer,
  sendAnswer,
  nextQuestion,
  infoLink,
}) => {
  const fontIncrease = useSelector(selectFontIncrease);
  const highContrast = useSelector(selectHighContrast);
  const currentTheme = theme(highContrast);
  const modalOpened = useSelector(selectOpenModal);
  const showInformationTutorial = useSelector(selectShowInformationTutorial);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      {!answered ? (
        <GenericButton
          fontSize={15 + Number(fontIncrease) * 2 + "px"}
          disabled={selectedAnswer === null}
          text={"Enviar respuesta"}
          onSubmit={() => {
            sendAnswer();
          }}
          hidden={modalOpened}
          id={"send-button"}
        />
      ) : (
        <ResultContainer>
          <ResultTitle fontSize={40 + Number(fontIncrease) + "px"}>
            {selectedAnswer.correct ? "Correcto" : "Incorrecto"}
          </ResultTitle>
          <ResultButtons>
            <GenericButton
              fontSize={15 + Number(fontIncrease) * 2 + "px"}
              text={"Siguiente"}
              onSubmit={() => {
                nextQuestion();
              }}
              hidden={modalOpened}
              id={"next-button"}
            />
            <GenericButton
              fontSize={15 + Number(fontIncrease) * 2 + "px"}
              text={"Más información"}
              onSubmit={() => {
                if (infoLink == null) return;
                if (showInformationTutorial == true) {
                  dispatch(goToInformationTutorialPage(infoLink));
                }
                dispatch(goToInformationPage(infoLink));
              }}
              backgroundColor={currentTheme.bg_secondary}
              hidden={modalOpened}
            />
          </ResultButtons>
          <ResultTip fontSize={20 + Number(fontIncrease) + "px"}>
            {selectedAnswer.tip}
          </ResultTip>
        </ResultContainer>
      )}
    </Wrapper>
  );
};

QuestionFooter.propTypes = {
  answered: PropTypes.bool,
  selectedAnswer: PropTypes.shape({
    title: PropTypes.string,
    img: PropTypes.string,
    correct: PropTypes.bool,
    tip: PropTypes.string,
  }),
  sendAnswer: PropTypes.func,
  nextQuestion: PropTypes.func,
};

export default QuestionFooter;
