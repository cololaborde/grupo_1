import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import {
  selectFontIncrease,
  selectHighContrast,
} from "../../../../store/Home/selectors";
import {
  CheckboxContainer,
  ConfigContainer,
  LineContainer,
  SpinbuttonContainer,
  Text,
} from "./styled";
import Spinbutton from "../../../../components/Inputs/Spinbutton";
import Checkbox from "../../../../components/Inputs/Checkbox";
import {
  setFontIncrease,
  setHighContrast,
} from "../../../../store/Home/actions";

const Config = () => {
  const fontIncrease = useSelector(selectFontIncrease);
  const highContrast = useSelector(selectHighContrast);
  const dispatch = useDispatch();

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
    <ConfigContainer>
      <LineContainer>
        <Text fontSize={20 + Number(fontIncrease) * 2 + "px"}>
          {"Tamaño del texto"}
        </Text>
        <SpinbuttonContainer>
          <Spinbutton
            value={fontIncrease}
            onChange={handleInputChange}
            label="Tamaño del texto"
            fontSize={20 + Number(fontIncrease) * 2 + "px"}
          />
        </SpinbuttonContainer>
      </LineContainer>
      <LineContainer>
        <Text fontSize={20 + Number(fontIncrease) * 2 + "px"}>
          {"Contraste alto"}
        </Text>
        <CheckboxContainer height={26 + Number(fontIncrease) * 2 + "px"}>
          <Checkbox
            value={highContrast}
            onChange={handleInputChange}
            label="Contraste Alto"
            scale={(15 + Number(fontIncrease) * 2) / 10 + ""}
          />
        </CheckboxContainer>
      </LineContainer>
    </ConfigContainer>
  );
};

Config.propTypes = {
  handleInputChange: PropTypes.func,
};

export default Config;
