import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BackButton from "../../components/Buttons/BackButton";
import GenericButton from "../../components/Buttons/GenericButton";
import HamburguerMenu from "../../components/Buttons/HamburguerMenu";
import ConfigModal from "../../components/Modals/ConfigModal";
import ExitModal from "../../components/Modals/ExitModal";
import HelpModal from "../../components/Modals/HelpModal";
import { setShowExitModal } from "../../store/Home/actions";
import {
  selectFontIncrease,
  selectShowConfigModal,
  selectShowExitModal,
  selectShowHelpModal,
} from "../../store/Home/selectors";
import { selectQuestions } from "../../store/Question/selectors";
import { COLORS } from "../../utils/colors";
import {
  Wrapper,
  MainContainer,
  BackContainer,
  TitleContainer,
  Title,
  AnswersContainer,
  Answer,
  SendButtonContainer,
  ResultContainer,
  ResultTitle,
  ResultTip,
  ResultButtons,
  AnswerTitle,
  AnswerImage,
  CounterContainer,
} from "./styled";

const Question = () => {
  const dispatch = useDispatch();

  const questions = useSelector(selectQuestions);
  const fontIncrease = useSelector(selectFontIncrease);
  const showConfigModal = useSelector(selectShowConfigModal);
  const showHelpModal = useSelector(selectShowHelpModal);
  const showExitModal = useSelector(selectShowExitModal);

  const [index, setIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(questions[index]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answered, setAnswered] = useState(false);

  useEffect(() => {
    if (index < questions.length) {
      setCurrentQuestion(questions[index]);
      setSelectedAnswer(null);
      setAnswered(false);
    }
  }, [index]);

  return (
    <Wrapper>
      <ConfigModal show={showConfigModal} />
      <HelpModal
        show={showHelpModal}
        title={currentQuestion.information.title}
        text={currentQuestion.information.text}
      />
      <ExitModal show={showExitModal} />
      <MainContainer>
        <BackContainer>
          <BackButton onSubmit={() => dispatch(setShowExitModal(true))} />
        </BackContainer>
        <HamburguerMenu hasHelp />
        <TitleContainer>
          <Title fontSize={40 + Number(fontIncrease) + "px"}>
            {currentQuestion.title}
          </Title>
        </TitleContainer>
        <AnswersContainer>
          {currentQuestion.answers.map((answ, index) => (
            <Answer
              key={index}
              onClick={() =>
                !answered
                  ? setSelectedAnswer(currentQuestion.answers[index])
                  : null
              }
            >
              <AnswerTitle
                color={
                  answered
                    ? selectedAnswer !== null
                      ? answ.correct
                        ? "green"
                        : "red"
                      : "black"
                    : "black"
                }
                underline={
                  selectedAnswer !== null
                    ? selectedAnswer.title ===
                      currentQuestion.answers[index].title
                      ? true
                      : false
                    : false
                }
                fontSize={20 + Number(fontIncrease) * 2 + "px"}
              >
                {answ.title}
              </AnswerTitle>
              <AnswerImage src={answ.img} />
            </Answer>
          ))}
        </AnswersContainer>
        {!answered && (
          <SendButtonContainer>
            <GenericButton
              textColor={selectedAnswer === null ? "#666666" : ""}
              backgroundColor={selectedAnswer === null ? "#a0a0a0" : ""}
              disabled={selectedAnswer === null}
              text={"Enviar respuesta"}
              onSubmit={() => setAnswered(true)}
            />
          </SendButtonContainer>
        )}
        <CounterContainer>
          {"Pregunta: " + (Number(index) + 1) + "/" + questions.length}
        </CounterContainer>
        {answered && (
          <ResultContainer>
            <ResultTitle fontSize={40 + Number(fontIncrease) + "px"}>
              {selectedAnswer.correct ? "Correcto" : "Incorrecto"}
            </ResultTitle>
            <ResultButtons>
              <GenericButton
                text={"Siguiente"}
                onSubmit={() =>
                  index < questions.length - 1
                    ? setIndex(index + 1)
                    : setIndex(index)
                }
              />
              <GenericButton
                text={"Más información"}
                textColor={COLORS.black}
                backgroundColor={COLORS.softWhite}
              />
            </ResultButtons>
            <ResultTip fontSize={20 + Number(fontIncrease) + "px"}>
              {selectedAnswer.tip}
            </ResultTip>
          </ResultContainer>
        )}
      </MainContainer>
    </Wrapper>
  );
};

export default Question;
