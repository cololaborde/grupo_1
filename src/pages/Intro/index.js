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
import {
  MainContainer,
  MenuContainer,
  StartButtonContainer,
  Wrapper,
} from "./styled";
import Title from "./Components/Title";
import Tutorial from "./Components/Tutorial";

const Intro = () => {
  const fontIncrease = useSelector(selectFontIncrease);
  const showConfigModal = useSelector(selectShowConfigModal);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <ConfigModal show={showConfigModal} />
      <MainContainer>
        <Title />
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
        <Tutorial />
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
