import React from "react";
import { useSelector } from "react-redux";
import { theme } from "../../../theme";
import { selectHighContrast } from "../../../store/Home/selectors";
import { CheckSvg } from "./styled";

const Check = () => {
  const highContrast = useSelector(selectHighContrast);
  const currentTheme = theme(highContrast);
  return (
    <CheckSvg viewBox="0 0 100 100">
      <line
        x1="0"
        y1="50"
        x2="30"
        y2="100"
        stroke={currentTheme.correct}
        strokeWidth={10}
      />
      <line
        x1="100"
        y1="0"
        x2="30"
        y2="100"
        stroke={currentTheme.correct}
        strokeWidth={10}
      />
    </CheckSvg>
  );
};

export default Check;
