import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  restartFontIncrease,
  saveFontIncrease,
  setFontIncrease,
  setShowConfigModal,
} from "../../../store/Home/actions";
import GenericModal from "../GenericModal";
import {
  ConfigContainer,
  TextContainer,
  Text,
  InputsContainer,
  RangeBarContainer,
  CheckboxContainer,
  ButtonsContainer,
  Container,
} from "./styled";
import RangeBar from "../../Inputs/RangeBar";
import Checkbox from "../../Inputs/Checkbox";
import GenericButton from "../../Buttons/GenericButton";
import { selectFontIncrease } from "../../../store/Home/selectors";
import { COLORS } from "../../../utils/colors";

const ConfigModal = (props) => {
  if (!props.show) return null;

  const handleInputChange = (name, value) => {
    switch (name) {
      case "fontSizeRange":
        dispatch(setFontIncrease(value));
        break;
    }
  };

  const dispatch = useDispatch();
  const fontIncrease = useSelector(selectFontIncrease);
  return (
    <GenericModal
      title={"Opciones"}
      closeAction={() => dispatch(setShowConfigModal(false))}
    >
      <Container>
        <ConfigContainer>
          <TextContainer>
            <Text fontSize={15 + Number(fontIncrease) + "px"}>
              {"Tamaño del texto"}
            </Text>
            <Text fontSize={15 + Number(fontIncrease) + "px"}>
              {"Contraste alto"}
            </Text>
          </TextContainer>
          <InputsContainer>
            <RangeBarContainer>
              <RangeBar value={fontIncrease} onChange={handleInputChange} />
            </RangeBarContainer>
            <CheckboxContainer>
              <Checkbox />
            </CheckboxContainer>
          </InputsContainer>
        </ConfigContainer>
        <ButtonsContainer>
          <GenericButton
            text={"Guardar"}
            backgroundColor={COLORS.btn_primary}
            onSubmit={() => {
              dispatch(setShowConfigModal(false));
              dispatch(saveFontIncrease(fontIncrease));
            }}
          />
          <GenericButton
            text={"Cancelar"}
            backgroundColor={COLORS.btn_error}
            onSubmit={() => {
              dispatch(setShowConfigModal(false));
              dispatch(restartFontIncrease());
            }}
          />
          <GenericButton
            text={"Restablecer"}
            backgroundColor={COLORS.btn_secondary}
            onSubmit={() => dispatch(restartFontIncrease())}
          />
        </ButtonsContainer>
      </Container>
    </GenericModal>
  );
};

export default ConfigModal;
