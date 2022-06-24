import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  restartFontIncrease,
  restartHighContrast,
  saveFontIncrease,
  saveHighContrast,
  setFontIncrease,
  setHighContrast,
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
import {
  selectFontIncrease,
  selectHighContrast,
} from "../../../store/Home/selectors";
import { theme } from "../../../theme";

const ConfigModal = (props) => {
  if (!props.show) return null;

  const dispatch = useDispatch();
  const fontIncrease = useSelector(selectFontIncrease);
  const highContrast = useSelector(selectHighContrast);
  const current_theme = theme(highContrast);

  const handleInputChange = (name, value) => {
    switch (name) {
      case "fontSizeRange":
        dispatch(setFontIncrease(value));
        break;
      case "highContrastCheckbox":
        dispatch(setHighContrast(value));
        break;
    }
  };

  return (
    <GenericModal
      title={"Opciones"}
      closeAction={() => dispatch(setShowConfigModal(false))}
    >
      <Container>
        <ConfigContainer>
          <TextContainer>
            <Text
              fontSize={15 + Number(fontIncrease) + "px"}
              label="Tamaño del texto"
            >
              {"Tamaño del texto"}
            </Text>
            <Text
              fontSize={15 + Number(fontIncrease) + "px"}
              label="Contraste alto"
            >
              {"Contraste alto"}
            </Text>
          </TextContainer>
          <InputsContainer>
            <RangeBarContainer>
              <RangeBar value={fontIncrease} onChange={handleInputChange} />
            </RangeBarContainer>
            <CheckboxContainer>
              <Checkbox value={highContrast} onChange={handleInputChange} />
            </CheckboxContainer>
          </InputsContainer>
        </ConfigContainer>
        <ButtonsContainer>
          <GenericButton
            text={"Guardar"}
            backgroundColor={current_theme.btn_primary}
            onSubmit={() => {
              dispatch(setShowConfigModal(false));
              dispatch(saveFontIncrease(fontIncrease));
              dispatch(saveHighContrast(highContrast));
            }}
          />
          <GenericButton
            text={"Cancelar"}
            backgroundColor={current_theme.btn_error}
            onSubmit={() => {
              dispatch(setShowConfigModal(false));
              dispatch(restartFontIncrease());
              dispatch(restartHighContrast());
            }}
          />
          <GenericButton
            text={"Restablecer"}
            backgroundColor={current_theme.btn_secondary}
            onSubmit={() => {
              dispatch(restartFontIncrease());
              dispatch(restartHighContrast());
            }}
          />
        </ButtonsContainer>
      </Container>
    </GenericModal>
  );
};

export default ConfigModal;
