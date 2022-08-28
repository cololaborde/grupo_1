import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  goToInformationPage,
  setExitModalConfig,
  setGoBackHome,
  setShowExitModal,
  setShowHelpModal,
} from "../../../store/Home/actions";
import {
  selectFontIncrease,
  selectHighContrast,
  selectOpenModal,
  selectShowHelpModal,
} from "../../../store/Home/selectors";
import { theme } from "../../../theme";
import GenericButton from "../../Buttons/GenericButton";
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
  const highContrast = useSelector(selectHighContrast);
  const currentTheme = theme(highContrast);
  const modalOpened = useSelector(selectOpenModal);
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
        <GenericButton
          fontSize={15 + Number(fontIncrease) * 2 + "px"}
          text={"Más información"}
          onSubmit={() => {
            if (props.infoPath) {
              dispatch(setGoBackHome(false));
              dispatch(
                setExitModalConfig({
                  title: "¿Desea salir al apartado de información?",
                  onSubmit: () => {
                    goToInformationPage(props.infoPath);
                    dispatch(setShowHelpModal(false));
                  },
                })
              );
              dispatch(setShowExitModal(true));
            }
          }}
          backgroundColor={currentTheme.bg}
          hidden={modalOpened ? false : true}
        />
      </Container>
    </GenericModal>
  );
};

export default HelpModal;
