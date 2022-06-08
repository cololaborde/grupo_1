import React from "react";
import IconButton from "../IconButton";
import { Wrapper } from "./styled";
import DownloadIcon from '@mui/icons-material/Download';

const DownloadButton = (props) => {
    return(
        <Wrapper>
            <IconButton onSubmit={props.onSubmit} icon={<DownloadIcon/>}/>
        </Wrapper>
    )
}

export default DownloadButton