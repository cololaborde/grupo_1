import { Checkbox } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import {
  selectFontIncrease,
  selectOpenModal,
} from "../../../../store/Home/selectors";
import {
  CardContainer,
  CardsContainer,
  CardText,
  CheckBoxContainer,
} from "./styled";

const Cards = ({
  currentSection,
  download,
  downloadIndex,
  goToSection,
  checkSection,
}) => {
  const fontIncrease = useSelector(selectFontIncrease);
  const modalOpened = useSelector(selectOpenModal);
  return (
    <CardsContainer>
      {currentSection.pages.map((page, index) => (
        // eslint-disable-next-line react/jsx-key
        <CheckBoxContainer>
          <CardContainer
            key={index}
            onClick={() => goToSection(page)}
            aria-hidden={modalOpened | false}
            tabIndex={modalOpened ? "-1" : ""}
          >
            <CardText fontSize={20 + Number(fontIncrease) + "px"}>
              {page.name}
            </CardText>
          </CardContainer>
          {download && (
            <Checkbox
              aria-label={"Seleccionar" + page.name}
              color={"default"}
              checked={!!downloadIndex[index]}
              onClick={() => checkSection(index)}
            />
          )}
        </CheckBoxContainer>
      ))}
    </CardsContainer>
  );
};

Cards.propTypes = {
  download: PropTypes.bool,
  // currentSection: PropTypes.func,
  downloadIndex: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.bool)),
  goToSection: PropTypes.func,
  checkSection: PropTypes.func,
};

export default Cards;
