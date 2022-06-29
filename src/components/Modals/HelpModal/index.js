import React from "react";
import { useDispatch } from "react-redux";
import { setShowHelpModal } from "../../../store/Home/actions";
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
  return (
    <GenericModal
      title={"Ayuda"}
      closeAction={() => dispatch(setShowHelpModal(false))}
      show={props.show}
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
