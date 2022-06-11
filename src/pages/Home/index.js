import React from "react";
import { useDispatch, useSelector } from "react-redux";
import GenericButton from "../../components/Buttons/GenericButton";
import Checkbox from "../../components/Inputs/Checkbox";
import RangeBar from "../../components/Inputs/RangeBar";
import { goToInformation, setFontIncrease } from "../../store/Home/actions";
import {
  Wrapper,
  ButtonContainer,
  Container,
  Title,
  TitleContainer,
  ConfigContainer,
  TextContainer,
  Text,
  RangeBarContainer,
  InputsContainer,
  CheckboxContainer,
  InfoContainer,
  InfoButtonContainer,
} from "./styled";
import { selectFontIncrease } from "../../store/Home/selectors";

const Home = () => {
  const dispatch = useDispatch();
  const fontIncrease = useSelector(selectFontIncrease);

  const handleInputChange = (name, value) => {
    switch (name) {
      case "fontSizeRange":
        dispatch(setFontIncrease(value));
        break;
    }
  };
  return (
    <Wrapper>
      <Container>
        <TitleContainer>
          <Title fontSize={40 + Number(fontIncrease) + "px"}>
            {"Juego de preguntas"}
          </Title>
        </TitleContainer>
        <ConfigContainer>
          <TextContainer>
            <Text fontSize={20 + Number(fontIncrease) + "px"}>
              {"Tamaño del texto"}
            </Text>
            <Text fontSize={20 + Number(fontIncrease) + "px"}>
              {"Contraste alto"}
            </Text>
          </TextContainer>
          <InputsContainer>
            <RangeBarContainer>
              <RangeBar onChange={handleInputChange} />
            </RangeBarContainer>
            <CheckboxContainer>
              <Checkbox />
            </CheckboxContainer>
          </InputsContainer>
        </ConfigContainer>
        <ButtonContainer>
          <GenericButton onSubmit={() => alert("Hello")} text={"Jugar"} />
        </ButtonContainer>
      </Container>
      <InfoContainer>
        <InfoButtonContainer>
          <GenericButton
            onSubmit={() => dispatch(goToInformation)}
            text={"Información"}
          />
        </InfoButtonContainer>
      </InfoContainer>
    </Wrapper>
  );
};

export default Home;
