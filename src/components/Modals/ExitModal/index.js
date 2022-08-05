import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShowExitModal } from "../../../store/Home/actions";
import { ButtonsContainer, TextContainer, Text, ButtonWrapper } from "./styled";
import { goToHome } from "../../../store/Home/actions";
import GenericModal from "../GenericModal";
import GenericButton from "../../Buttons/GenericButton";
import { theme } from "../../../theme";
import {
  selectFontIncrease,
  selectHighContrast,
  selectShowExitModal,
} from "../../../store/Home/selectors";

const ExitModal = ({ action }) => {
  const dispatch = useDispatch();
  const fontIncrease = useSelector(selectFontIncrease);
  const highContrast = useSelector(selectHighContrast);
  const current_theme = theme(highContrast);
  const showExitModal = useSelector(selectShowExitModal);
  return (
    <GenericModal
      title={"Salir"}
      closeAction={() => dispatch(setShowExitModal(false))}
      show={showExitModal}
      modalId="exit-modal"
    >
      <TextContainer>
        <Text fontSize={20 + Number(fontIncrease) * 2 + "px"}>
          {"¿Desea volver al menú principal?"}
        </Text>
        <Text fontSize={15 + Number(fontIncrease) * 2 + "px"}>
          {"Su progreso en el juego se conservará"}
        </Text>
      </TextContainer>
      <ButtonsContainer>
        <ButtonWrapper>
          <GenericButton
            text={"Si"}
            backgroundColor={current_theme.btn_primary}
            onSubmit={() => {
              dispatch(goToHome);
              dispatch(setShowExitModal(false));
              if (action) action();
            }}
            hidden={!showExitModal}
            fontSize={20 + Number(fontIncrease) * 2 + "px"}
          />
        </ButtonWrapper>
        <ButtonWrapper>
          <GenericButton
            text={"No"}
            backgroundColor={current_theme.btn_error}
            onSubmit={() => dispatch(setShowExitModal(false))}
            hidden={!showExitModal}
            fontSize={20 + Number(fontIncrease) * 2 + "px"}
          />
        </ButtonWrapper>
      </ButtonsContainer>
    </GenericModal>
  );
};

export default ExitModal;
