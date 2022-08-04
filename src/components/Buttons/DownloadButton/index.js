import React from "react";
import IconButton from "../IconButton";
import { Wrapper } from "./styled";
import DownloadIcon from "@mui/icons-material/Download";
import { theme } from "../../../theme";
import { useSelector } from "react-redux";
import { selectHighContrast } from "../../../store/Home/selectors";

const DownloadButton = (props) => {
  const highContrast = useSelector(selectHighContrast);
  return (
    <Wrapper>
      <IconButton
        backgroundColor={
          props.pressed ? theme(highContrast).btn_secondary : null
        }
        onSubmit={props.onSubmit}
        icon={<DownloadIcon />}
        ariaLabel="Descargar"
        hidden={props.hidden}
        tutorial={props.tutorial}
      />
    </Wrapper>
  );
};

export default DownloadButton;
