import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShowHelpModal } from "../../../store/Home/actions";
import { selectShowHelpModal } from "../../../store/Home/selectors";
import GenericModal from "../GenericModal";
import {
  Container,
  Text,
  TextContainer,
  Title,
  TitleContainer,
} from "./styled";

const HelpModal = (props) => {
  const dispatch = useDispatch();
  const showHelpModal = useSelector(selectShowHelpModal);
  return (
    <GenericModal
      title={"Ayuda"}
      closeAction={() => dispatch(setShowHelpModal(false))}
      show={showHelpModal}
      modalId="help-modal"
    >
      <Container>
        <TitleContainer>
          <Title>{props.title}</Title>
        </TitleContainer>
        <TextContainer>
          <Text>{props.text}</Text>
        </TextContainer>
      </Container>
    </GenericModal>
  );
};

export default HelpModal;
