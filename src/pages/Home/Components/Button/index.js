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
  selectOpenModal,
} from "../../../../store/Home/selectors";

const Button = ({ text, action }) => {
  const dispatch = useDispatch();
  const fontIncrease = useSelector(selectFontIncrease);
  const highContrast = useSelector(selectHighContrast);
  const modalOpened = useSelector(selectOpenModal);
  return (
    <GenericButton
      onSubmit={() => {
        dispatch(saveFontIncrease(fontIncrease));
        dispatch(saveHighContrast(highContrast));
        action();
      }}
      text={text}
      fontSize={20 + Number(fontIncrease) * 2 + "px"}
      hidden={modalOpened ? "true" : "false"}
    />
  );
};

Button.propTypes = {
  text: PropTypes.string,
  action: PropTypes.func,
};

export default Button;
