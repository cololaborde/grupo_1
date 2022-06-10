import React from "react";
import { useDispatch } from "react-redux";
import { setShowExitModal } from "../../../store/Home/actions";
import GenericButton from "../../Buttons/GenericButton";
import { 
    CloseIcon, 
    IconContainer,
    TopBar,
    ModalBg,
    Box,
    Container,
    Wrapper,
    ButtonsContainer,
    TextContainer,
    Text,
    Title,
    TitleContainer,
    ButtonWrapper,
} from "./styled";
import { goToHome } from '../../../store/Home/actions'
import IconButton from "../../Buttons/IconButton";
import { COLORS } from "../../../utils/colors";

const ExitModal = (props) => {
    if (!props.show) return null
    const dispatch = useDispatch()
    return(
        <Wrapper>
            <Box>
                <Container>
                    <TopBar>
                        <TitleContainer>
                            <Title>{'Salir'}</Title>
                        </TitleContainer>
                        <IconContainer onClick={() => dispatch(setShowExitModal(false))}>
                            <CloseIcon />
                        </IconContainer>
                    </TopBar>
                    <TextContainer>
                        <Text>{'¿Desea volver al menú principal?'}</Text>
                    </TextContainer>
                    <ButtonsContainer>
                        <ButtonWrapper>
                            <IconButton icon={'Si'} textColor={COLORS.softWhite} backgroundColor={COLORS.lightBlue} onSubmit={() => {dispatch(goToHome); dispatch(setShowExitModal(false))}}/>
                        </ButtonWrapper>
                        <ButtonWrapper>
                            <IconButton icon={'No'} textColor={COLORS.softWhite} backgroundColor={COLORS.lightRed} onSubmit={() => dispatch(setShowExitModal(false))}/>
                            </ButtonWrapper>
                    </ButtonsContainer>
                </Container>
            </Box>
            <ModalBg />
        </Wrapper>
    )
}

export default ExitModal