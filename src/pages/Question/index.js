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
import Answers from "./Components/Answers";
import QuestionFooter from "./Components/QuestionFooter";
import {
  Wrapper,
  MainContainer,
  BackContainer,
  TitleContainer,
  Title,
  CounterContainer,
  Text,
  ButtonsContainer,
  CounterText,
  HighlightedText,
} from "./styled";

const Question = () => {
  const dispatch = useDispatch();

  const questions = useSelector(selectQuestions);
  const fontIncrease = useSelector(selectFontIncrease);
  const highContrast = useSelector(selectHighContrast);
  const currentTheme = theme(highContrast);
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
      {/* Modals */}
      <ConfigModal show={showConfigModal} />
      <HelpModal
        show={showHelpModal}
        title={currentQuestion.information.title}
        text={currentQuestion.information.text}
      />
      <ExitModal show={showExitModal} />

      {/* Main Container */}
      <MainContainer>
        {/* Top Bar */}
        <BackContainer>
          <BackButton
            onSubmit={() => showExitModalConst()}
            hidden={modalOpened()}
          />
        </BackContainer>
        {!finished && (
          <CounterContainer>
            <CounterText fontSize={15 + Number(fontIncrease) * 2 + "px"}>
              {"Pregunta: " + (Number(index) + 1) + "/" + questions.length}
            </CounterText>
          </CounterContainer>
        )}
        <HamburguerMenu hasHelp="true" hidden={modalOpened()} />

        {/* Question Title and Final Text Title*/}
        <TitleContainer>
          <Title fontSize={40 + Number(fontIncrease) * 2 + "px"}>
            {!finished ? currentQuestion.title : "Has llegado al final"}
          </Title>
        </TitleContainer>
        {!finished ? (
          <>
            <Answers
              question={currentQuestion}
              selectedAnswer={selectedAnswer}
              answered={answered}
              modalOpened={modalOpened()}
              currentTheme={currentTheme}
              fontIncrease={fontIncrease}
              selectAnswer={(i) =>
                !answered ? setSelectedAnswer(currentQuestion.answers[i]) : null
              }
            />
            <QuestionFooter
              selectedAnswer={selectedAnswer}
              answered={answered}
              modalOpened={modalOpened()}
              currentTheme={currentTheme}
              fontIncrease={fontIncrease}
              sendAnswer={() => {
                if (selectedAnswer.correct) setWellAnswered(wellAnswered + 1);
                setAnswered(true);
              }}
              nextQuestion={() =>
                index < questions.length - 1
                  ? setIndex(index + 1)
                  : setFinished(true)
              }
            />
          </>
        ) : (
          // Final Screen
          <>
            <Text fontSize={20 + Number(fontIncrease) + "px"}>
              {"Resultado: "}
              <HighlightedText backgroundColor={currentTheme.correct}>
                {wellAnswered + " correctas"}
              </HighlightedText>{" "}
              <HighlightedText backgroundColor={currentTheme.incorrect}>
                {questions.length - wellAnswered + " incorrectas"}
              </HighlightedText>
            </Text>

            <ButtonsContainer>
              <GenericButton
                fontSize={15 + Number(fontIncrease) * 2 + "px"}
                text={"Inicio"}
                onSubmit={() => dispatch(goToHome)}
                hidden={modalOpened()}
              />

              <GenericButton
                fontSize={15 + Number(fontIncrease) * 2 + "px"}
                text={"Información"}
                onSubmit={() => dispatch(goToInformation)}
                hidden={modalOpened()}
              />
            </ButtonsContainer>
          </>
        )}
      </MainContainer>
    </Wrapper>
  );
};

export default Question;
