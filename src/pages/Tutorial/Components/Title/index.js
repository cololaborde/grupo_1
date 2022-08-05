import React from "react";
import { useSelector } from "react-redux";
import { selectFontIncrease } from "../../../../store/Home/selectors";
import { TitleContainer, TitleText } from "./styled";

const Title = () => {
  const fontIncrease = useSelector(selectFontIncrease);
  return (
    <TitleContainer>
      <TitleText fontSize={40 + Number(fontIncrease) * 2 + "px"}>
        {"Juego de preguntas"}
      </TitleText>
    </TitleContainer>
  );
};

export default Title;
