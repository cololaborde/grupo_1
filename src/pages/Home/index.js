import React from "react";
import {
  goToInformation,
  goToIntro,
  goToQuestion,
  setGoBackHome,
} from "../../store/Home/actions";
import {
  Wrapper,
  Container,
  InfoContainer,
  InfoButtonContainer,
  ButtonContainer,
} from "./styled";
import Button from "./Components/Button";
import Title from "./Components/Title";
import Config from "./Components/Config";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <Container>
        <Title text="Juego de preguntas" />
        <Config />
        <ButtonContainer>
          <Button text="Jugar" action={goToQuestion} />
        </ButtonContainer>
      </Container>
      <InfoContainer>
        <InfoButtonContainer>
          <Button text="Ayuda" action={goToIntro} />
          <Button
            text="Información"
            action={() => {
              dispatch(setGoBackHome(true));
              goToInformation();
            }}
          />
        </InfoButtonContainer>
      </InfoContainer>
    </Wrapper>
  );
};

export default Home;
