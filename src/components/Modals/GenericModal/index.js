import React, { useEffect } from "react";
import {
  CloseIcon,
  IconContainer,
  TopBar,
  ModalBg,
  Box,
  Container,
  Wrapper,
  Title,
  TitleContainer,
} from "./styled";

const GenericModal = (props) => {
  useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        props.closeAction();
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);
  return (
    <Wrapper>
      <Box
        role="dialog"
        aria-modal="true"
        aria-label={props.title}
        id={props.modalId}
        aria-hidden={!props.show}
      >
        <Container>
          <TopBar>
            <TitleContainer>
              <Title>{props.title}</Title>
            </TitleContainer>
            <IconContainer
              onClick={props.closeAction}
              aria-label="Cerrar"
              aria-hidden={!props.show | false}
              tabIndex={!props.show ? "-1" : ""}
              id="close-icon"
            >
              <CloseIcon />
            </IconContainer>
          </TopBar>
          {props.children}
        </Container>
      </Box>
      {props.show ? <ModalBg /> : null}
    </Wrapper>
  );
};

export default GenericModal;
