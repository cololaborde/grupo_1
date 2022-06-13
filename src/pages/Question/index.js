import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BackButton from "../../components/Buttons/BackButton";
import GenericButton from "../../components/Buttons/GenericButton";
import HamburguerMenu from "../../components/Buttons/HamburguerMenu";
import ConfigModal from "../../components/Modals/ConfigModal";
import { goToHome } from "../../store/Home/actions";
import {
  selectFontIncrease,
  selectShowConfigModal,
} from "../../store/Home/selectors";
import { selectQuestions } from "../../store/Question/selectors";
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
} from "./styled";

const Question = () => {
  const dispatch = useDispatch();

  const questions = useSelector(selectQuestions);
  const fontIncrease = useSelector(selectFontIncrease);

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
      <MainContainer>
        <ConfigModal show={useSelector(selectShowConfigModal)} />
        <BackContainer>
          <BackButton onSubmit={() => dispatch(goToHome)} />
        </BackContainer>
        <HamburguerMenu />
        <TitleContainer>
          <Title fontSize={40 + Number(fontIncrease) + "px"}>
            {currentQuestion.title}
          </Title>
        </TitleContainer>
        <AnswersContainer>
          {currentQuestion.answers.map((answ, index) => (
            <Answer key={index}>
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
                onClick={() =>
                  !answered
                    ? setSelectedAnswer(currentQuestion.answers[index])
                    : null
                }
                fontSize={20 + Number(fontIncrease) + "px"}
              >
                {answ.title}
              </AnswerTitle>
              <AnswerImage>{answ.img}</AnswerImage>
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
              <GenericButton text={"Más información"} />
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
