import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import ConfigModal from "../../components/Modals/ConfigModal";
import ExitModal from "../../components/Modals/ExitModal";
import HelpModal from "../../components/Modals/HelpModal";
import {
  restoreToInitialState,
  setAnswered,
  setCurrentQuestion,
  setFinished,
  setIndex,
  setSelectedAnswer,
  setWellAnswered,
} from "../../store/Question/actions";
import {
  selectAnswered,
  selectCurrentQuestion,
  selectFinished,
  selectIndex,
  selectQuestions,
  selectSelectedAnswer,
  selectWellAnswered,
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

  const wellAnswered = useSelector(selectWellAnswered);
  const topRef = useRef(null);
  const bottomRef = useRef(null);

  const scrollToTop = () => {
    if (topRef.current)
      topRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
  };

  const scrollToBottom = () => {
    if (bottomRef.current)
      bottomRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
  };

  const sendAnswer = () => {
    if (selectedAnswer.correct) dispatch(setWellAnswered(wellAnswered + 1));
    dispatch(setAnswered(true));
  };

  const nextQuestion = () => {
    if (index < questions.length - 1) {
      dispatch(setCurrentQuestion(questions[index + 1]));
      dispatch(setSelectedAnswer(null));
      dispatch(setAnswered(false));
      dispatch(setIndex(index + 1));
      scrollToTop();
    } else {
      dispatch(setFinished(true));
    }
  };

  const selectAnswer = (i) =>
    !answered ? dispatch(setSelectedAnswer(currentQuestion.answers[i])) : null;

  useEffect(() => {
    if (answered == true) scrollToBottom();
  }, [answered]);

  useEffect(() => {
    if (selectedAnswer != null) scrollToBottom();
  }, [selectedAnswer]);

  return (
    <Wrapper>
      {/* Modals */}
      <ConfigModal />
      <HelpModal
        title={currentQuestion.information.title}
        text={currentQuestion.information.text}
      />
      <ExitModal
        action={() => {
          if (finished) dispatch(restoreToInitialState());
        }}
      />

      {/* Main Container */}
      <MainContainer>
        <TopBar
          finished={finished}
          counterText={
            "Pregunta: " + (Number(index) + 1) + "/" + questions.length
          }
        />

        <div ref={topRef}></div>
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
        <div ref={bottomRef}></div>
      </MainContainer>
    </Wrapper>
  );
};

export default Question;
