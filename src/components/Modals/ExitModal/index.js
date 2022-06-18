import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShowExitModal } from "../../../store/Home/actions";
import { ButtonsContainer, TextContainer, Text, ButtonWrapper } from "./styled";
import { goToHome } from "../../../store/Home/actions";
import GenericModal from "../GenericModal";
import GenericButton from "../../Buttons/GenericButton";
import { theme } from "../../../theme";
import { selectHighContrast } from "../../../store/Home/selectors";

const ExitModal = (props) => {
  if (!props.show) return null;
  const dispatch = useDispatch();
  const highContrast = useSelector(selectHighContrast);
  const current_theme = theme(highContrast);
  return (
    <GenericModal
      title={"Salir"}
      closeAction={() => dispatch(setShowExitModal(false))}
    >
      <TextContainer>
        <Text>{"¿Desea volver al menú principal?"}</Text>
      </TextContainer>
      <ButtonsContainer>
        <ButtonWrapper>
          <GenericButton
            text={"Si"}
            backgroundColor={current_theme.btn_primary}
            onSubmit={() => {
              dispatch(goToHome);
              dispatch(setShowExitModal(false));
            }}
          />
        </ButtonWrapper>
        <ButtonWrapper>
          <GenericButton
            text={"No"}
            backgroundColor={current_theme.btn_error}
            onSubmit={() => dispatch(setShowExitModal(false))}
          />
        </ButtonWrapper>
      </ButtonsContainer>
    </GenericModal>
  );
};

export default ExitModal;
