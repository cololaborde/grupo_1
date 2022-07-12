import React from "react";
import {
  Answer,
  AnswerImage,
  AnswersContainer,
  AnswerTitle,
  Wrapper,
} from "./styled";

const Answers = (props) => {
  return (
    <Wrapper>
      <AnswersContainer>
        {props.question.answers.map((answ, index) => (
          <Answer
            key={index}
            onClick={() => props.selectAnswer(index)}
            selected={
              props.selectedAnswer !== null
                ? props.selectedAnswer.title ===
                  props.question.answers[index].title
                  ? true
                  : false
                : false
            }
            aria-hidden={props.modalOpened | false}
            tabIndex={props.modalOpened ? "-1" : ""}
          >
            <AnswerTitle
              backgroundColor={
                props.answered
                  ? props.selectedAnswer !== null
                    ? answ.correct
                      ? props.currentTheme.correct
                      : props.currentTheme.incorrect
                    : "none"
                  : "none"
              }
              fontSize={20 + Number(props.fontIncrease) * 2 + "px"}
            >
              {answ.title}
            </AnswerTitle>
            <AnswerImage src={answ.img} />
          </Answer>
        ))}
      </AnswersContainer>
    </Wrapper>
  );
};

export default Answers;
