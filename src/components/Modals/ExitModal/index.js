import React from "react";
import { useDispatch } from "react-redux";
import { setShowExitModal } from "../../../store/Home/actions";
import { ButtonsContainer, TextContainer, Text, ButtonWrapper } from "./styled";
import { goToHome } from "../../../store/Home/actions";
import { COLORS } from "../../../utils/colors";
import GenericModal from "../GenericModal";
import GenericButton from "../../Buttons/GenericButton";

const ExitModal = (props) => {
  if (!props.show) return null;
  const dispatch = useDispatch();
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
            backgroundColor={COLORS.btn_primary}
            onSubmit={() => {
              dispatch(goToHome);
              dispatch(setShowExitModal(false));
            }}
          />
        </ButtonWrapper>
        <ButtonWrapper>
          <GenericButton
            text={"No"}
            backgroundColor={COLORS.btn_error}
            onSubmit={() => dispatch(setShowExitModal(false))}
          />
        </ButtonWrapper>
      </ButtonsContainer>
    </GenericModal>
  );
};

export default ExitModal;
