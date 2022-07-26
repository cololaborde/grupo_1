import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ConfigModal from "../../components/Modals/ConfigModal";
import ExitModal from "../../components/Modals/ExitModal";
import HelpModal from "../../components/Modals/HelpModal";
import {
  setAnswered,
  setCurrentQuestion,
  setFinished,
  setIndex,
  setSelectedAnswer,
} from "../../store/Question/actions";
import {
  selectAnswered,
  selectCurrentQuestion,
  selectFinished,
  selectIndex,
  selectQuestions,
  selectSelectedAnswer,
} from "../../store/Question/selectors";
import Answers from "./Components/Answers";
import FinalScreen from "./Components/FinalScreen";
import QuestionFooter from "./Components/QuestionFooter";
import Title from "./Components/Title";
import TopBar from "./Components/TopBar";
import { Wrapper, MainContainer } from "./styled";

const Question = () => {
  const dispatch = useDispatch();

  const questions = useSelector(selectQuestions);
  const index = useSelector(selectIndex);
  const currentQuestion = useSelector(selectCurrentQuestion);

  const selectedAnswer = useSelector(selectSelectedAnswer);
  const answered = useSelector(selectAnswered);
  const finished = useSelector(selectFinished);

  const [wellAnswered, setWellAnswered] = useState(0);

  const sendAnswer = () => {
    if (selectedAnswer.correct) setWellAnswered(wellAnswered + 1);
    dispatch(setAnswered(true));
  };

  const nextQuestion = () => {
    if (index < questions.length) {
      dispatch(setCurrentQuestion(questions[index]));
      dispatch(setSelectedAnswer(null));
      dispatch(setAnswered(false));
    }
    index < questions.length - 1
      ? dispatch(setIndex(index + 1))
      : dispatch(setFinished(true));
  };

  const selectAnswer = (i) =>
    !answered ? dispatch(setSelectedAnswer(currentQuestion.answers[i])) : null;

  return (
    <Wrapper>
      {/* Modals */}
      <ConfigModal />
      <HelpModal
        title={currentQuestion.information.title}
        text={currentQuestion.information.text}
      />
      <ExitModal />

      {/* Main Container */}
      <MainContainer>
        <TopBar
          finished={finished}
          counterText={
            "Pregunta: " + (Number(index) + 1) + "/" + questions.length
          }
        />

        <Title
          text={!finished ? currentQuestion.title : "Has llegado al final"}
        />
        {!finished ? (
          <>
            <Answers
              question={currentQuestion}
              selectedAnswer={selectedAnswer}
              answered={answered}
              selectAnswer={selectAnswer}
            />
            <QuestionFooter
              selectedAnswer={selectedAnswer}
              answered={answered}
              sendAnswer={sendAnswer}
              nextQuestion={nextQuestion}
              infoLink={currentQuestion.link}
            />
          </>
        ) : (
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
