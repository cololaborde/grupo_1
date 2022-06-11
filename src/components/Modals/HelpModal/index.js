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
  if (!props.show) return null;

  const dispatch = useDispatch();
  return (
    <GenericModal
      title={"Ayuda"}
      closeAction={() => dispatch(setShowHelpModal(false))}
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
