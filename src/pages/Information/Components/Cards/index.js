import { Checkbox } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import GenericButton from "../../../../components/Buttons/GenericButton";
import {
  selectFontIncrease,
  selectOpenModal,
} from "../../../../store/Home/selectors";
import {
  DownloadButtonContainer,
  CardContainer,
  CardsContainer,
  CardText,
  CheckBoxContainer,
} from "./styled";

const Cards = (props) => {
  const fontIncrease = useSelector(selectFontIncrease);
  const modalOpened = useSelector(selectOpenModal);
  return (
    <CardsContainer>
      {props.currentSection.pages.map((page, index) => (
        // eslint-disable-next-line react/jsx-key
        <CheckBoxContainer>
          <CardContainer
            key={index}
            onClick={() => props.goToSection(page)}
            aria-hidden={modalOpened | false}
            tabIndex={modalOpened ? "-1" : ""}
          >
            <CardText fontSize={20 + Number(fontIncrease) + "px"}>
              {page.name}
            </CardText>
          </CardContainer>
          {props.download && (
            <Checkbox
              aria-label={"Seleccionar" + page.name}
              color={"default"}
              checked={!!props.downloadIndex[index]}
              onClick={() => props.checkSection(index)}
            />
          )}
        </CheckBoxContainer>
      ))}
    </CardsContainer>
  );
};

export default Cards;
