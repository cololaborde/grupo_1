import { PDFDownloadLink } from "@react-pdf/renderer";
import React from "react";
import { useSelector } from "react-redux";
import GenericButton from "../../../../components/Buttons/GenericButton";
import { selectFontIncrease } from "../../../../store/Home/selectors";
import DocumentViewer from "../../../DocumentViewer";
import { ButtonContainer } from "./styled";

const PDFDownloadButton = ({
  downloadIndex,
  currentSection,
  data,
  onClick,
  download,
}) => {
  const fontIncrease = useSelector(selectFontIncrease);

  return (
    <ButtonContainer
      disabled={
        !Object.values(downloadIndex).includes(true) && currentSection.pages
      }
    >
      <PDFDownloadLink
        document={<DocumentViewer data={data} />}
        fileName="informacion.pdf"
      >
        {({ loading }) =>
          loading ? (
            <GenericButton
              fontSize={15 + Number(fontIncrease) * 2 + "px"}
              disabled={true}
              label={"Comenzar descarga"}
              hidden={!download}
              text={"Cargando..."}
            />
          ) : (
            <GenericButton
              fontSize={15 + Number(fontIncrease) * 2 + "px"}
              disabled={
                !Object.values(downloadIndex).includes(true) &&
                currentSection.pages
              }
              label={"Comenzar descarga"}
              onSubmit={() => onClick()}
              hidden={!download}
              text={"Descargar"}
            />
          )
        }
      </PDFDownloadLink>
    </ButtonContainer>
  );
};

export default PDFDownloadButton;
