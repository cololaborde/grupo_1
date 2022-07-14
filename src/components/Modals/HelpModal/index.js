import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShowHelpModal } from "../../../store/Home/actions";
import {
  selectFontIncrease,
  selectShowHelpModal,
} from "../../../store/Home/selectors";
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
  const fontIncrease = useSelector(selectFontIncrease);
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
          <Title fontSize={24 + Number(fontIncrease) * 2 + "px"}>
            {props.title}
          </Title>
        </TitleContainer>
        <TextContainer>
          <Text fontSize={17 + Number(fontIncrease) * 2 + "px"}>
            {props.text}
          </Text>
        </TextContainer>
      </Container>
    </GenericModal>
  );
};

export default HelpModal;
