import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShowDownloadModal } from "../../../store/Home/actions";
import GenericModal from "../GenericModal";
import GenericButton from "../../Buttons/GenericButton";
import {
  selectDownloadModal,
  selectFontIncrease,
} from "../../../store/Home/selectors";
import { Link, List, ListItem, Text } from "./styled";
import TestPdf from "../../../pdfs/test.pdf";

const DownloadModal = () => {
  const dispatch = useDispatch();
  const fontIncrease = useSelector(selectFontIncrease);
  const showDownloadModal = useSelector(selectDownloadModal);
  return (
    <GenericModal
      title={"Descargas"}
      closeAction={() => dispatch(setShowDownloadModal(false))}
      show={showDownloadModal}
      modalId="download-modal"
    >
      <Text fontSize={20 + Number(fontIncrease) * 2 + "px"}>
        Lista de archivos informativos
      </Text>
      <List>
        <ListItem>
          <Link
            href={TestPdf}
            role="link"
            hidden={!showDownloadModal}
            fontSize={15 + Number(fontIncrease) * 2 + "px"}
          >
            Recomendaciones
          </Link>
        </ListItem>
        <ListItem>
          <Link
            role="link"
            hidden={!showDownloadModal}
            fontSize={15 + Number(fontIncrease) * 2 + "px"}
          >
            Sitios Existentes
          </Link>
        </ListItem>
      </List>
    </GenericModal>
  );
};

export default DownloadModal;
