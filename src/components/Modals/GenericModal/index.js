import React from "react";
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
  return (
    <Wrapper>
      <Box
        role="dialog"
        aria-modal="true"
        aria-label={props.title}
        id={props.modalId}
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
