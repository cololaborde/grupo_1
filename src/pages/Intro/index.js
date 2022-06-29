import React from "react";
import { useDispatch, useSelector } from "react-redux";
import GenericButton from "../../components/Buttons/GenericButton";
import SettingsButton from "../../components/Buttons/SettingsButton";
import ConfigModal from "../../components/Modals/ConfigModal";
import { goToHome, setShowConfigModal } from "../../store/Home/actions";
import {
  selectFontIncrease,
  selectShowConfigModal,
} from "../../store/Home/selectors";
import { CONSTANTS } from "./constants";
import {
  Content,
  MainContainer,
  MenuContainer,
  StartButtonContainer,
  Title,
  TitleContainer,
  Wrapper,
} from "./styled";

const Intro = () => {
  const fontIncrease = useSelector(selectFontIncrease);
  const showConfigModal = useSelector(selectShowConfigModal);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <ConfigModal show={showConfigModal} />
      <MainContainer>
        <TitleContainer>
          <Title fontSize={40 + Number(fontIncrease) + "px"}>
            {"Juego de preguntas"}
          </Title>
        </TitleContainer>
        <MenuContainer>
          <SettingsButton
            onSubmit={() => dispatch(setShowConfigModal(true))}
            hidden={showConfigModal}
          />
        </MenuContainer>
        <Content fontSize={18 + Number(fontIncrease) + "px"}>
          {CONSTANTS.informationText}
        </Content>
        <StartButtonContainer>
          <GenericButton
            text={"Comenzar"}
            onSubmit={() => dispatch(goToHome)}
            hidden={showConfigModal}
          />
        </StartButtonContainer>
      </MainContainer>
    </Wrapper>
  );
};
export default Intro;
