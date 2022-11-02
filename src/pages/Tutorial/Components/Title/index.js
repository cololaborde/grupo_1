import React from "react";
import { useSelector } from "react-redux";
import { selectFontIncrease } from "../../../../store/Home/selectors";
import { TitleContainer, TitleText } from "./styled";

const Title = ({ type }) => {
  const fontIncrease = useSelector(selectFontIncrease);
  return (
    <TitleContainer>
      <TitleText fontSize={40 + Number(fontIncrease) * 2 + "px"}>
        {type === "pregunta" ? "Tutorial de juego" : "Tutorial de Información"}
      </TitleText>
    </TitleContainer>
  );
};

export default Title;
