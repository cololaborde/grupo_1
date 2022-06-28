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
  Text,
  CheckboxContainer,
  ButtonsContainer,
  Container,
  LineContainer,
  SpinbuttonContainer,
} from "./styled";
import Checkbox from "../../Inputs/Checkbox";
import GenericButton from "../../Buttons/GenericButton";
import {
  selectFontIncrease,
  selectHighContrast,
} from "../../../store/Home/selectors";
import { theme } from "../../../theme";
import Spinbutton from "../../Inputs/Spinbutton";

const ConfigModal = (props) => {
  if (!props.show) return null;

  const dispatch = useDispatch();
  const fontIncrease = useSelector(selectFontIncrease);
  const highContrast = useSelector(selectHighContrast);
  const current_theme = theme(highContrast);

  const handleInputChange = (name, value) => {
    switch (name) {
      case "fontSizeSpinbutton":
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
          <LineContainer>
            <Text fontSize={15 + Number(fontIncrease) * 2 + "px"}>
              {"Tamaño del texto"}
            </Text>
            <SpinbuttonContainer>
              <Spinbutton
                value={fontIncrease}
                onChange={handleInputChange}
                label="Tamaño del texto"
                fontSize={15 + Number(fontIncrease) * 2 + "px"}
              />
            </SpinbuttonContainer>
          </LineContainer>
          <LineContainer>
            <Text fontSize={15 + Number(fontIncrease) * 2 + "px"}>
              {"Contraste alto"}
            </Text>
            <CheckboxContainer height={26 + Number(fontIncrease) * 2 + "px"}>
              <Checkbox
                value={highContrast}
                onChange={handleInputChange}
                label="Contraste Alto"
                scale={(10 + Number(fontIncrease) * 2) / 10 + ""}
              />
            </CheckboxContainer>
          </LineContainer>
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
