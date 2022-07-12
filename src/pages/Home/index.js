import React from "react";
import { useDispatch, useSelector } from "react-redux";
import GenericButton from "../../components/Buttons/GenericButton";
import Checkbox from "../../components/Inputs/Checkbox";
import {
  goToInformation,
  goToIntro,
  goToQuestion,
  saveFontIncrease,
  saveHighContrast,
  setFontIncrease,
  setHighContrast,
} from "../../store/Home/actions";
import {
  Wrapper,
  ButtonContainer,
  Container,
  Title,
  TitleContainer,
  ConfigContainer,
  LineContainer,
  Text,
  SpinbuttonContainer,
  CheckboxContainer,
  InfoContainer,
  InfoButtonContainer,
} from "./styled";
import {
  selectFontIncrease,
  selectHighContrast,
} from "../../store/Home/selectors";
import Spinbutton from "../../components/Inputs/Spinbutton";

const Home = () => {
  const dispatch = useDispatch();
  const fontIncrease = useSelector(selectFontIncrease);
  const highContrast = useSelector(selectHighContrast);

  const handleInputChange = (name, value) => {
    switch (name) {
      case "fontSizeSpinbutton":
        dispatch(setFontIncrease(value));
        break;
      case "highContrastCheckbox":
        dispatch(setHighContrast(value));
        break;
    }
  };
  console.log(highContrast);
  return (
    <Wrapper>
      <Container>
        <TitleContainer>
          <Title fontSize={40 + Number(fontIncrease) * 2 + "px"}>
            {"Juego de preguntas"}
          </Title>
        </TitleContainer>
        <ConfigContainer>
          <LineContainer>
            <Text fontSize={20 + Number(fontIncrease) * 2 + "px"}>
              {"Tamaño del texto"}
            </Text>
            <SpinbuttonContainer>
              <Spinbutton
                value={fontIncrease}
                onChange={handleInputChange}
                label="Tamaño del texto"
                fontSize={20 + Number(fontIncrease) * 2 + "px"}
              />
            </SpinbuttonContainer>
          </LineContainer>
          <LineContainer>
            <Text fontSize={20 + Number(fontIncrease) * 2 + "px"}>
              {"Contraste alto"}
            </Text>
            <CheckboxContainer height={26 + Number(fontIncrease) * 2 + "px"}>
              <Checkbox
                value={highContrast}
                onChange={handleInputChange}
                label="Contraste Alto"
                scale={(15 + Number(fontIncrease) * 2) / 10 + ""}
              />
            </CheckboxContainer>
          </LineContainer>
        </ConfigContainer>
        <ButtonContainer>
          <GenericButton
            onSubmit={() => {
              dispatch(saveFontIncrease(fontIncrease));
              dispatch(saveHighContrast(highContrast));
              dispatch(goToQuestion());
            }}
            text={"Jugar"}
            fontSize={20 + Number(fontIncrease) * 2 + "px"}
          />
        </ButtonContainer>
      </Container>
      <InfoContainer>
        <InfoButtonContainer>
          <GenericButton
            onSubmit={() => {
              dispatch(saveFontIncrease(fontIncrease));
              dispatch(saveHighContrast(highContrast));
              dispatch(goToIntro);
            }}
            text={"Ayuda"}
            fontSize={20 + Number(fontIncrease) * 2 + "px"}
          />
          <GenericButton
            onSubmit={() => {
              dispatch(saveFontIncrease(fontIncrease));
              dispatch(saveHighContrast(highContrast));
              dispatch(goToInformation);
            }}
            text={"Información"}
            fontSize={20 + Number(fontIncrease) * 2 + "px"}
          />
        </InfoButtonContainer>
      </InfoContainer>
    </Wrapper>
  );
};

export default Home;
