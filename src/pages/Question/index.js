import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ConfigModal from "../../components/Modals/ConfigModal";
import ExitModal from "../../components/Modals/ExitModal";
import HelpModal from "../../components/Modals/HelpModal";
import {
  selectShowConfigModal,
  selectShowExitModal,
  selectShowHelpModal,
} from "../../store/Home/selectors";
import { selectQuestions } from "../../store/Question/selectors";
import Answers from "./Components/Answers";
import FinalScreen from "./Components/FinalScreen";
import QuestionFooter from "./Components/QuestionFooter";
import Title from "./Components/Title";
import TopBar from "./Components/TopBar";
import { Wrapper, MainContainer } from "./styled";

const Question = () => {
  const questions = useSelector(selectQuestions);
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
        <TopBar
          finished={finished}
          counterText={
            "Pregunta: " + (Number(index) + 1) + "/" + questions.length
          }
        />

        {/* Question Title and Final Text Title*/}
        <Title
          text={!finished ? currentQuestion.title : "Has llegado al final"}
        />
        {!finished ? (
          <>
            <Answers
              question={currentQuestion}
              selectedAnswer={selectedAnswer}
              answered={answered}
              selectAnswer={(i) =>
                !answered ? setSelectedAnswer(currentQuestion.answers[i]) : null
              }
            />
            <QuestionFooter
              selectedAnswer={selectedAnswer}
              answered={answered}
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
          <FinalScreen
            rightAnswers={wellAnswered}
            wrongAnswers={questions.length - wellAnswered}
          />
        )}
      </MainContainer>
    </Wrapper>
  );
};

export default Question;
