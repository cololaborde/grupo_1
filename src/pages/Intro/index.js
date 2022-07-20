import React, { useEffect } from "react";
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

  useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        dispatch(setShowConfigModal(false));
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  return (
    <Wrapper>
      <ConfigModal show={showConfigModal} />
      <MainContainer>
        <TitleContainer>
          <Title fontSize={40 + Number(fontIncrease) * 2 + "px"}>
            {"Juego de preguntas"}
          </Title>
        </TitleContainer>
        <MenuContainer>
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
        </MenuContainer>
        <Content fontSize={18 + Number(fontIncrease) * 2 + "px"}>
          {CONSTANTS.informationText}
        </Content>
        <StartButtonContainer>
          <GenericButton
            fontSize={15 + Number(fontIncrease) * 2 + "px"}
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
