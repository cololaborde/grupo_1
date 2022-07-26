import React from "react";
import { useSelector } from "react-redux";
import { theme } from "../../../theme";
import { selectHighContrast } from "../../../store/Home/selectors";
import { CrossSvg } from "./styled";

const Cross = () => {
  const highContrast = useSelector(selectHighContrast);
  const currentTheme = theme(highContrast);
  return (
    <CrossSvg viewBox="0 0 100 100">
      <line
        x1="0"
        y1="0"
        x2="100"
        y2="100"
        stroke={currentTheme.incorrect}
        strokeWidth={10}
      />
      <line
        x1="100"
        y1="0"
        x2="0"
        y2="100"
        stroke={currentTheme.incorrect}
        strokeWidth={10}
      />
    </CrossSvg>
  );
};

export default Cross;
