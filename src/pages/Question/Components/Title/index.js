import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { selectFontIncrease } from "../../../../store/Home/selectors";
import { TitleContainer, TitleText } from "./styled";

const Title = ({ text }) => {
  const fontIncrease = useSelector(selectFontIncrease);
  return (
    <TitleContainer>
      <TitleText fontSize={40 + Number(fontIncrease) * 2 + "px"} id="title">
        {text}
      </TitleText>
    </TitleContainer>
  );
};

Title.propTypes = {
  text: PropTypes.string,
};

export default Title;
