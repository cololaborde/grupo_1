import { Info } from "@material-ui/icons";
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
    CheckboxContainer,
    InfoContainer,
    InfoButtonContainer
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
                    <GenericButton onSubmit={() => alert('Hello')} text={'Jugar'}/>
                </ButtonContainer>
            </Container>
            <InfoContainer>
                <InfoButtonContainer>
                    <GenericButton onSubmit={() => dispatch(goToInformation)} text={'Información'}/>
                </InfoButtonContainer>
            </InfoContainer>
        </Wrapper>
    )
}

export default Home