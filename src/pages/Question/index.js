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
  selectHighContrast,
  selectShowConfigModal,
  selectShowExitModal,
  selectShowHelpModal,
} from "../../store/Home/selectors";
import { selectQuestions } from "../../store/Question/selectors";
import { theme } from "../../theme";
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

const Question = (props) => {
  const dispatch = useDispatch();

  const questions = useSelector(selectQuestions);
  const fontIncrease = useSelector(selectFontIncrease);
  const highContrast = useSelector(selectHighContrast);
  const current_theme = theme(highContrast);
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

  const showExitModalConst = () => {
    dispatch(setShowExitModal(true));
    document.getElementById("exit-modal").querySelector("#close-icon").focus();
  };

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
          <BackButton onSubmit={() => showExitModalConst()} />
        </BackContainer>
        <HamburguerMenu hasHelp="true" />
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
              selected={
                selectedAnswer !== null
                  ? selectedAnswer.title ===
                    currentQuestion.answers[index].title
                    ? true
                    : false
                  : false
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
                textColor={current_theme.text}
                backgroundColor={current_theme.bg_secondary}
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
