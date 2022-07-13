import { Checkbox } from "@material-ui/core";
import React from "react";
import GenericButton from "../../../../components/Buttons/GenericButton";
import {
  DownloadButtonContainer,
  CardContainer,
  CardsContainer,
  CardText,
  CheckBoxContainer,
} from "./styled";

const Cards = (props) => {
  return (
    <CardsContainer>
      {props.download && (
        <DownloadButtonContainer>
          <GenericButton
            disabled={
              !Object.values(props.downloadIndex).includes(true) &&
              props.currentSection.pages
            }
            label={"Comenzar descarga"}
            onSubmit={() => props.startDownload()}
            hidden={!props.download}
            aria-hidden={!props.download}
            text={"Descargar"}
          />
        </DownloadButtonContainer>
      )}
      {props.currentSection.pages.map((page, index) => (
        // eslint-disable-next-line react/jsx-key
        <CheckBoxContainer>
          <CardContainer
            key={index}
            onClick={() => props.goToSection(page)}
            aria-hidden={props.modalOpened() | false}
            tabIndex={props.modalOpened() ? "-1" : ""}
          >
            <CardText fontSize={20 + Number(props.fontIncrease) + "px"}>
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
