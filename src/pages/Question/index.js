import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BackButton from "../../components/Buttons/BackButton";
import GenericButton from "../../components/Buttons/GenericButton";
import HamburguerMenu from "../../components/Buttons/HamburguerMenu";
import ConfigModal from "../../components/Modals/ConfigModal";
import ExitModal from "../../components/Modals/ExitModal";
import HelpModal from "../../components/Modals/HelpModal";
import {
  goToHome,
  goToInformation,
  setShowConfigModal,
  setShowExitModal,
  setShowHelpModal,
} from "../../store/Home/actions";
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
  Text,
  ButtonsContainer,
  FinalTextContainer,
} from "./styled";

const Question = () => {
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
  const [finished, setFinished] = useState(false);
  const [wellAnswered, setWellAnswered] = useState(0);

  useEffect(() => {
    if (index < questions.length) {
      setCurrentQuestion(questions[index]);
      setSelectedAnswer(null);
      setAnswered(false);
    }
  }, [index]);

  useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        dispatch(setShowHelpModal(false));
        dispatch(setShowExitModal(false));
        dispatch(setShowConfigModal(false));
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  const showExitModalConst = () => {
    dispatch(setShowExitModal(true));
    document.getElementById("exit-modal").querySelector("#close-icon").focus();
  };

  const modalOpened = () => {
    return showConfigModal || showExitModal || showHelpModal;
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
          <BackButton
            onSubmit={() => showExitModalConst()}
            hidden={modalOpened()}
          />
        </BackContainer>
        <HamburguerMenu hasHelp="true" hidden={modalOpened()} />
        <TitleContainer>
          <Title fontSize={40 + Number(fontIncrease) * 2 + "px"}>
            {!finished ? currentQuestion.title : "Has llegado al final"}
          </Title>
        </TitleContainer>
        {!finished ? (
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
                aria-hidden={modalOpened() | false}
                tabIndex={modalOpened() ? "-1" : ""}
              >
                <AnswerTitle
                  backgroundColor={
                    answered
                      ? selectedAnswer !== null
                        ? answ.correct
                          ? current_theme.correct
                          : current_theme.incorrect
                        : "none"
                      : "none"
                  }
                  fontSize={20 + Number(fontIncrease) * 2 + "px"}
                >
                  {answ.title}
                </AnswerTitle>
                <AnswerImage src={answ.img} />
              </Answer>
            ))}
          </AnswersContainer>
        ) : (
          <>
            <FinalTextContainer>
              <Text fontSize={20 + Number(fontIncrease) + "px"}>
                {"Resultado: " + wellAnswered}
              </Text>
              <div style={{ marginLeft: "5px", marginRight: "5px" }}>
                <Text
                  color={"#1bd802"}
                  fontSize={20 + Number(fontIncrease) + "px"}
                >
                  {" correctas "}
                </Text>
              </div>
              <Text fontSize={20 + Number(fontIncrease) + "px"}>
                {questions.length - wellAnswered}
              </Text>
              <div style={{ marginLeft: "5px", marginRight: "5px" }}>
                <Text
                  color={"#ff0000"}
                  fontSize={20 + Number(fontIncrease) + "px"}
                >
                  {" incorrectas"}
                </Text>
              </div>
            </FinalTextContainer>

            <ButtonsContainer>
              <GenericButton
                text={"Inicio"}
                onSubmit={() => dispatch(goToHome)}
                hidden={modalOpened()}
              />

              <GenericButton
                text={"Información"}
                onSubmit={() => dispatch(goToInformation)}
                hidden={modalOpened()}
              />
            </ButtonsContainer>
          </>
        )}
        {!answered && !finished && (
          <SendButtonContainer>
            <GenericButton
              disabled={selectedAnswer === null}
              text={"Enviar respuesta"}
              onSubmit={() => {
                if (selectedAnswer.correct) setWellAnswered(wellAnswered + 1);
                setAnswered(true);
              }}
              hidden={modalOpened()}
            />
          </SendButtonContainer>
        )}
        {!finished && (
          <CounterContainer>
            {"Pregunta: " + (Number(index) + 1) + "/" + questions.length}
          </CounterContainer>
        )}
        {answered && !finished && (
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
                    : setFinished(true)
                }
                hidden={modalOpened()}
              />
              <GenericButton
                text={"Más información"}
                textColor={current_theme.text}
                backgroundColor={current_theme.bg_secondary}
                hidden={modalOpened()}
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
