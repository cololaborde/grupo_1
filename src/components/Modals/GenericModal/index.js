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
      <Box>
        <Container>
          <TopBar>
            <TitleContainer>
              <Title>{props.title}</Title>
            </TitleContainer>
            <IconContainer onClick={props.closeAction} aria-label="Cerrar">
              <CloseIcon />
            </IconContainer>
          </TopBar>
          {props.children}
        </Container>
      </Box>
      <ModalBg />
    </Wrapper>
  );
};

export default GenericModal;
