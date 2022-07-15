import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import {
  selectFontIncrease,
  selectOpenModal,
} from "../../../../store/Home/selectors";
import {
  CardsContainer,
  RowContainer,
  CheckBoxContainer,
  CardContainer,
  CardText,
} from "./styled";
import Checkbox from "../../../../components/Inputs/Checkbox";

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
        <RowContainer>
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
            <CheckBoxContainer
              marginTop={20 + Number(fontIncrease) * 0.5 + "px"}
              marginLeft={10 + Number(fontIncrease) * 1.5 + "px"}
            >
              <Checkbox
                value={!!downloadIndex[index]}
                onChange={() => checkSection(index)}
                label={"Seleccionar" + page.name}
                scale={(15 + Number(fontIncrease) * 2) / 10 + ""}
              />
            </CheckBoxContainer>
          )}
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
