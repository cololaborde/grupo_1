import React from "react";
import { useSelector } from "react-redux";
import {
  selectFontIncrease,
  selectOpenModal,
} from "../../../../store/Home/selectors";
import SearchButton from "../../../../components/Buttons/SearchButton";
import DeleteButton from "../../../../components/Buttons/DeleteButton";
import {
  TutorialContainer,
  Text,
  List,
  ListItem,
  SearchBar,
  NavText,
  CardContainer,
  CardText,
} from "./styled";
import { CONSTANTS } from "../../constants";

const TutorialContent = ({ type }) => {
  const fontIncrease = useSelector(selectFontIncrease);
  const modalOpened = useSelector(selectOpenModal);
  return (
    <TutorialContainer>
      {type === "pregunta" ? (
        <>
          <Text fontSize={18 + Number(fontIncrease) * 2 + "px"}>
            {CONSTANTS.questionText1}
          </Text>
          <Text fontSize={18 + Number(fontIncrease) * 2 + "px"}>
            {CONSTANTS.questionText2}
          </Text>
          <Text fontSize={18 + Number(fontIncrease) * 2 + "px"}>
            {CONSTANTS.questionText3}
          </Text>
        </>
      ) : type === "info" ? (
        <>
          <Text fontSize={18 + Number(fontIncrease) * 2 + "px"}>
            {CONSTANTS.infoText}
          </Text>
          <List>
            <ListItem>
              <SearchBar
                type="text"
                name="searchbar"
                placeholder="Buscar"
                aria-hidden={modalOpened ? "true" : "false"}
                tabIndex={modalOpened ? "-1" : "0"}
                ariaLabel={"Botón de tutorial: Ingresar palabras clave"}
                disabled={true}
                aria-disabled={true}
              />
              <Text fontSize={18 + Number(fontIncrease) * 2 + "px"}>
                Entrada de palabras claves a buscar
              </Text>
            </ListItem>
            <ListItem>
              <SearchButton
                hidden={modalOpened}
                tutorial={true}
                disabled={true}
              />
              <Text fontSize={18 + Number(fontIncrease) * 2 + "px"}>
                Botón para buscar lo ingresado
              </Text>
            </ListItem>
            <ListItem>
              <DeleteButton
                hidden={modalOpened}
                ariaLabel={"Botón de tutorial: Restablecer búsqueda"}
                disabled={true}
              />
              <Text fontSize={18 + Number(fontIncrease) * 2 + "px"}>
                Botón para limpiar la entrada de búsqueda
              </Text>
            </ListItem>
            <ListItem>
              <NavText
                fontSize={15 + Number(fontIncrease) + "px"}
                aria-hidden={modalOpened ? "true" : "false"}
                tabIndex={modalOpened ? "-1" : "0"}
                disabled={true}
                aria-disabled={true}
              >
                {" - Nombre de sección"}
              </NavText>
              <Text fontSize={18 + Number(fontIncrease) * 2 + "px"}>
                {
                  "Botón de navegación entre secciones (Siendo Información la sección principal)"
                }
              </Text>
            </ListItem>
            <ListItem>
              <CardContainer
                aria-hidden={modalOpened ? "true" : "false"}
                tabIndex={modalOpened ? "-1" : "0"}
                disabled={true}
                aria-disabled={true}
              >
                <CardText fontSize={20 + Number(fontIncrease) + "px"}>
                  Nombre de sección
                </CardText>
              </CardContainer>
              <Text fontSize={18 + Number(fontIncrease) * 2 + "px"}>
                Botón para ir a la sección especificada
              </Text>
            </ListItem>
          </List>
        </>
      ) : (
        ""
      )}
    </TutorialContainer>
  );
};

export default TutorialContent;
