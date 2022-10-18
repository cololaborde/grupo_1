import React from "react";
import {
  goToInformation,
  goToIntro,
  goToQuestion,
  setShowConfigModal,
  setGoBackHome,
} from "../../store/Home/actions";
import {
  Wrapper,
  Container,
  InfoContainer,
  InfoButtonContainer,
  ButtonContainer,
  SettingsButtonContainer,
} from "./styled";
import Button from "./Components/Button";
import Title from "./Components/Title";
import ConfigModal from "../../components/Modals/ConfigModal";
import SettingsButton from "../../components/Buttons/SettingsButton";
import { useDispatch, useSelector } from "react-redux";
import { selectShowConfigModal } from "../../store/Home/selectors";

const Home = () => {
  const showConfigModal = useSelector(selectShowConfigModal);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <ConfigModal show={showConfigModal} />
      <Container>
        <Title text="Flooded Quiz" />
        <SettingsButtonContainer>
          <SettingsButton
            onSubmit={() => {
              dispatch(setShowConfigModal(true));
              document
                .getElementById("option-modal")
                .querySelector("#close-icon")
                .focus();
            }}
            hidden={showConfigModal}
          />
        </SettingsButtonContainer>
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
