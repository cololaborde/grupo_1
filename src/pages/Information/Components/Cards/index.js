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
  RowContainer,
  CardText,
} from "./styled";

const Cards = ({ currentSection, goToSection }) => {
  const fontIncrease = useSelector(selectFontIncrease);
  const modalOpened = useSelector(selectOpenModal);
  return (
    <CardsContainer>
      {currentSection.pages.map((page, index) => (
        // eslint-disable-next-line react/jsx-key
        <RowContainer>
          <CardContainer
            key={index}
            onClick={() => goToSection(page)}
            aria-hidden={modalOpened ? "true" : "false"}
            tabIndex={modalOpened ? "-1" : ""}
          >
            <CardText fontSize={20 + Number(fontIncrease) + "px"}>
              {page.name}
            </CardText>
          </CardContainer>
        </RowContainer>
      ))}
    </CardsContainer>
  );
};

Cards.propTypes = {
  download: PropTypes.bool,
  // currentSection: PropTypes.object,
  downloadIndex: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.bool)),
  goToSection: PropTypes.func,
  checkSection: PropTypes.func,
};

export default Cards;
