import React from "react";
import { useDispatch } from "react-redux";
import { setShowExitModal } from "../../../store/Home/actions";
import { ButtonsContainer, TextContainer, Text, ButtonWrapper } from "./styled";
import { goToHome } from "../../../store/Home/actions";
import IconButton from "../../Buttons/IconButton";
import { COLORS } from "../../../utils/colors";
import GenericModal from "../GenericModal";

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
          <IconButton
            icon={"Si"}
            textColor={COLORS.softWhite}
            backgroundColor={COLORS.lightBlue}
            onSubmit={() => {
              dispatch(goToHome);
              dispatch(setShowExitModal(false));
            }}
          />
        </ButtonWrapper>
        <ButtonWrapper>
          <IconButton
            icon={"No"}
            textColor={COLORS.softWhite}
            backgroundColor={COLORS.lightRed}
            onSubmit={() => dispatch(setShowExitModal(false))}
          />
        </ButtonWrapper>
      </ButtonsContainer>
    </GenericModal>
  );
};

export default ExitModal;
