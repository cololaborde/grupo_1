import React, { useEffect, useState } from "react";
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
  const dispatch = useDispatch();
  const fontIncrease = useSelector(selectFontIncrease);
  const highContrast = useSelector(selectHighContrast);
  const current_theme = theme(highContrast);

  const [font, setFont] = useState(fontIncrease);
  const [check, setCheck] = useState(highContrast);

  const handleInputChange = (name, value) => {
    switch (name) {
      case "fontSizeSpinbutton":
        setFont(value);
        dispatch(setFontIncrease(value));
        break;
      case "highContrastCheckbox":
        setCheck(value);
        dispatch(setHighContrast(value));
        break;
    }
  };

  useEffect(() => {
    setFont(fontIncrease);
  }, [fontIncrease]);

  useEffect(() => {
    setCheck(highContrast);
  }, [highContrast]);

  return (
    <GenericModal
      title={"Opciones"}
      closeAction={() => dispatch(setShowConfigModal(false))}
      show={props.show}
      modalId="option-modal"
    >
      <Container>
        <ConfigContainer>
          <LineContainer>
            <Text fontSize={15 + Number(font) * 2 + "px"}>
              {"Tamaño del texto"}
            </Text>
            <SpinbuttonContainer>
              <Spinbutton
                value={font}
                onChange={handleInputChange}
                label="Tamaño del texto"
                fontSize={15 + Number(font) * 2 + "px"}
                hidden={!props.show}
              />
            </SpinbuttonContainer>
          </LineContainer>
          <LineContainer>
            <Text fontSize={15 + Number(font) * 2 + "px"}>
              {"Contraste alto"}
            </Text>
            <CheckboxContainer height={26 + Number(font) * 2 + "px"}>
              <Checkbox
                value={check}
                onChange={handleInputChange}
                label="Contraste Alto"
                scale={(10 + Number(font) * 2) / 10 + ""}
                hidden={!props.show}
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
              dispatch(saveFontIncrease(font));
              dispatch(saveHighContrast(check));
            }}
            hidden={!props.show}
          />
          <GenericButton
            text={"Cancelar"}
            backgroundColor={current_theme.btn_error}
            onSubmit={() => {
              dispatch(setShowConfigModal(false));
              //dispatch(restartFontIncrease());
              //dispatch(restartHighContrast());
            }}
            hidden={!props.show}
          />
          {/* <GenericButton
            text={"Por defecto"}
            backgroundColor={current_theme.btn_secondary}
            onSubmit={() => {
              dispatch(setFontIncrease(0));
              dispatch(setHighContrast(false));
            }}
            hidden={!props.show}
          /> */}
        </ButtonsContainer>
      </Container>
    </GenericModal>
  );
};

export default ConfigModal;
