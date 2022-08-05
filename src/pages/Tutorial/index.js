import React from "react";
import { useDispatch, useSelector } from "react-redux";
import GenericButton from "../../components/Buttons/GenericButton";
import SettingsButton from "../../components/Buttons/SettingsButton";
import ConfigModal from "../../components/Modals/ConfigModal";
import {
  goToHome,
  goToInformation,
  goToInformationPage,
  goToQuestion,
  setShowConfigModal,
  setShowInformationTutorial,
  setShowQuestionTutorial,
} from "../../store/Home/actions";
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
import TutorialContent from "./Components/TutorialContent";
import { useParams } from "react-router-dom";

const Intro = () => {
  const { type, path } = useParams();
  const dispatch = useDispatch();
  if (type != "pregunta" && type != "info") {
    dispatch(goToHome);
  }

  const buttonOnSubmit = () => {
    if (type === "pregunta") {
      dispatch(setShowQuestionTutorial(false));
      dispatch(goToQuestion);
    } else if (type === "info") {
      dispatch(setShowInformationTutorial(false));
      if (path == null) {
        dispatch(goToInformation);
      } else {
        dispatch(goToInformationPage(path));
      }
    }
  };

  const fontIncrease = useSelector(selectFontIncrease);
  const showConfigModal = useSelector(selectShowConfigModal);

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
        <TutorialContent type={type} />
        <StartButtonContainer>
          <GenericButton
            fontSize={15 + Number(fontIncrease) * 2 + "px"}
            text={"Continuar"}
            onSubmit={() => buttonOnSubmit()}
            hidden={showConfigModal}
          />
        </StartButtonContainer>
      </MainContainer>
    </Wrapper>
  );
};
export default Intro;
