import React from "react";
import GenericButton from "../../../../components/Buttons/GenericButton";
import {
  ResultButtons,
  ResultContainer,
  ResultTip,
  ResultTitle,
  Wrapper,
} from "./styled";

const QuestionFooter = (props) => {
  return (
    <Wrapper>
      {!props.answered ? (
        <GenericButton
          fontSize={15 + Number(props.fontIncrease) * 2 + "px"}
          disabled={props.selectedAnswer === null}
          text={"Enviar respuesta"}
          onSubmit={() => {
            props.sendAnswer();
          }}
          hidden={props.modalOpened}
        />
      ) : (
        <ResultContainer>
          <ResultTitle fontSize={40 + Number(props.fontIncrease) + "px"}>
            {props.selectedAnswer.correct ? "Correcto" : "Incorrecto"}
          </ResultTitle>
          <ResultButtons>
            <GenericButton
              fontSize={15 + Number(props.fontIncrease) * 2 + "px"}
              text={"Siguiente"}
              onSubmit={() => {
                props.nextQuestion();
              }}
              hidden={props.modalOpened}
            />
            <GenericButton
              fontSize={15 + Number(props.fontIncrease) * 2 + "px"}
              text={"Más información"}
              backgroundColor={props.currentTheme.bg_secondary}
              hidden={props.modalOpened}
            />
          </ResultButtons>
          <ResultTip fontSize={20 + Number(props.fontIncrease) + "px"}>
            {props.selectedAnswer.tip}
          </ResultTip>
        </ResultContainer>
      )}
    </Wrapper>
  );
};

export default QuestionFooter;
