import React from "react";
import { useSelector } from "react-redux";
import SettingsButton from "../../../../components/Buttons/SettingsButton";
import HomeButton from "../../../../components/Buttons/HomeButton";
import HelpButton from "../../../../components/Buttons/HelpButton";
import DownloadButton from "../../../../components/Buttons/DownloadButton";
import MenuButton from "../../../../components/Buttons/MenuButton";
import {
  selectFontIncrease,
  selectShowConfigModal,
} from "../../../../store/Home/selectors";
import { TutorialContainer, Text, List, ListItem } from "./styled";
import { CONSTANTS } from "../../constants";

const Tutorial = () => {
  const fontIncrease = useSelector(selectFontIncrease);
  const showConfigModal = useSelector(selectShowConfigModal);
  return (
    <TutorialContainer>
      <Text fontSize={18 + Number(fontIncrease) * 2 + "px"}>
        {CONSTANTS.informationText}
      </Text>
      <Text fontSize={18 + Number(fontIncrease) * 2 + "px"}>
        Significado de íconos:
      </Text>
      <List>
        <ListItem>
          <SettingsButton
            hidden={showConfigModal}
            tutorial={true}
            disabled={true}
          />
          <Text fontSize={18 + Number(fontIncrease) * 2 + "px"}>
            Botón para cambiar las configuraciones
          </Text>
        </ListItem>
        <ListItem>
          <HomeButton
            hidden={showConfigModal}
            tutorial={true}
            disabled={true}
          />
          <Text fontSize={18 + Number(fontIncrease) * 2 + "px"}>
            Botón para volver al menu principal
          </Text>
        </ListItem>
        <ListItem>
          <MenuButton
            hidden={showConfigModal}
            tutorial={true}
            disabled={true}
          />
          <Text fontSize={18 + Number(fontIncrease) * 2 + "px"}>
            Menú desplegable de botones
          </Text>
        </ListItem>
        <ListItem>
          <HelpButton
            hidden={showConfigModal}
            tutorial={true}
            disabled={true}
          />
          <Text fontSize={18 + Number(fontIncrease) * 2 + "px"}>
            Botón para obtener ayuda durante el juego
          </Text>
        </ListItem>
        <ListItem>
          <DownloadButton
            hidden={showConfigModal}
            tutorial={true}
            disabled={true}
          />
          <Text fontSize={18 + Number(fontIncrease) * 2 + "px"}>
            Botón para descargar información
          </Text>
        </ListItem>
      </List>
    </TutorialContainer>
  );
};

export default Tutorial;
