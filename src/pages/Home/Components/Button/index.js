import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import GenericButton from "../../../../components/Buttons/GenericButton";
import {
  saveFontIncrease,
  saveHighContrast,
} from "../../../../store/Home/actions";
import {
  selectFontIncrease,
  selectHighContrast,
} from "../../../../store/Home/selectors";

const Button = ({ text, action }) => {
  const dispatch = useDispatch();
  const fontIncrease = useSelector(selectFontIncrease);
  const highContrast = useSelector(selectHighContrast);
  return (
    <GenericButton
      onSubmit={() => {
        dispatch(saveFontIncrease(fontIncrease));
        dispatch(saveHighContrast(highContrast));
        dispatch(action());
      }}
      text={text}
      fontSize={20 + Number(fontIncrease) * 2 + "px"}
    />
  );
};

Button.propTypes = {
  text: PropTypes.string,
  action: PropTypes.func,
};

export default Button;
