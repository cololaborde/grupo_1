import React from "react";
import { useDispatch } from "react-redux";
import GenericButton from "../../components/Buttons/GenericButton";
import Checkbox from "../../components/Inputs/Checkbox";
import RangeBar from "../../components/Inputs/RangeBar";
import { goToInformation } from "../../store/Home/actions";
import { 
    Wrapper, 
    ButtonContainer,
    Container, 
    Title, 
    TitleContainer,
    ConfigContainer, 
    TextContainer,
    Text,
    RangeBarContainer,
    InputsContainer,
    CheckboxContainer
} from "./styled";

const Home = () => {
    const dispatch = useDispatch()
    return(
        <Wrapper>
            <Container>
                <TitleContainer>
                    <Title>{"Juego de preguntas"}</Title>
                </TitleContainer>
                <ConfigContainer>
                    <TextContainer>
                        <Text>{"Tamaño del texto"}</Text>
                        <Text>{"Contraste alto"}</Text>
                    </TextContainer>
                    <InputsContainer>
                        <RangeBarContainer>
                            <RangeBar />
                        </RangeBarContainer>
                        <CheckboxContainer>
                            <Checkbox />
                        </CheckboxContainer>
                    </InputsContainer>
                </ConfigContainer>
                <ButtonContainer>
                    <GenericButton onSubmit={() => dispatch(goToInformation)} text={'Información'}/>
                    <GenericButton onSubmit={() => alert('Hello')} text={'Jugar'}/>
                </ButtonContainer>
            </Container>
        </Wrapper>
    )
}

export default Home