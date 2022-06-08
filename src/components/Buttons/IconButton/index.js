import React from "react";
import { Wrapper, Button } from "./styled";

const IconButton = (props) => {
    return(
        <Wrapper>
            <Button onClick={props.onSubmit}>
                {props.icon}
            </Button>
        </Wrapper>
    )
}

export default IconButton