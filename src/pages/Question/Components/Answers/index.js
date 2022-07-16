import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import {
  selectFontIncrease,
  selectHighContrast,
  selectOpenModal,
} from "../../../../store/Home/selectors";
import { theme } from "../../../../theme";
import {
  Answer,
  AnswerImage,
  AnswerImageContainer,
  AnswersContainer,
  AnswerTitle,
  Cross,
  Wrapper,
} from "./styled";

const Answers = ({ question, selectedAnswer, answered, selectAnswer }) => {
  const fontIncrease = useSelector(selectFontIncrease);
  const highContrast = useSelector(selectHighContrast);
  const currentTheme = theme(highContrast);
  const modalOpened = useSelector(selectOpenModal);
  return (
    <Wrapper>
      <AnswersContainer>
        {question.answers.map((answ, index) => (
          <Answer
            key={index}
            onClick={() => selectAnswer(index)}
            selected={
              selectedAnswer !== null
                ? selectedAnswer.title === question.answers[index].title
                  ? true
                  : false
                : false
            }
            aria-hidden={modalOpened | false}
            tabIndex={modalOpened ? "-1" : ""}
          >
            <AnswerTitle
              backgroundColor={
                answered
                  ? selectedAnswer !== null
                    ? answ.correct
                      ? currentTheme.correct
                      : currentTheme.incorrect
                    : "none"
                  : "none"
              }
              fontSize={20 + Number(fontIncrease) * 2 + "px"}
            >
              {answ.title}
            </AnswerTitle>
            <AnswerImageContainer>
              <AnswerImage src={answ.img} />
              {answered && selectedAnswer !== null && !answ.correct && (
                <Cross viewBox="0 0 100 100">
                  <line
                    x1="0"
                    y1="0"
                    x2="100"
                    y2="100"
                    stroke={currentTheme.incorrect}
                    strokeWidth={10}
                  />
                  <line
                    x1="100"
                    y1="0"
                    x2="0"
                    y2="100"
                    stroke={currentTheme.incorrect}
                    strokeWidth={10}
                  />
                </Cross>
              )}
            </AnswerImageContainer>
          </Answer>
        ))}
      </AnswersContainer>
    </Wrapper>
  );
};

Answer.propTypes = {
  question: PropTypes.shape({
    title: PropTypes.string,
    information: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)),
    answers: PropTypes.shape({
      title: PropTypes.string,
      img: PropTypes.string,
      correct: PropTypes.bool,
      tip: PropTypes.string,
    }),
  }),
  selectedAnswer: PropTypes.shape({
    title: PropTypes.string,
    img: PropTypes.string,
    correct: PropTypes.bool,
    tip: PropTypes.string,
  }),
  answered: PropTypes.bool,
  selectAnswer: PropTypes.func,
};

export default Answers;
