import { Info } from "@material-ui/icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import GenericButton from "../../components/Buttons/GenericButton";
import Checkbox from "../../components/Inputs/Checkbox";
import RangeBar from "../../components/Inputs/RangeBar";
import { goToInformation, setFontIncrease } from "../../store/Home/actions";
import { 
    Wrapper, 
    ButtonContainer,
    Container, 
    Title, 
    TitleContainer,
    ConfigContainer, 
    LineContainer,
    Text,
    RangeBarContainer,
    CheckboxContainer,
    InfoContainer,
    InfoButtonContainer
} from "./styled";
import { selectFontIncrease } from '../../store/Home/selectors'

const Home = () => {
    const dispatch = useDispatch()
    const fontIncrease = useSelector(selectFontIncrease)

    const handleInputChange = (name, value) => {
        switch (name) {
        case 'fontSizeRange':
            dispatch(setFontIncrease(value))
            break;
        }
      };
    console.log(Number(fontIncrease) + 20)
    return(
        <Wrapper>
            <Container>
                <TitleContainer>
                    <Title fontSize={40 + Number(fontIncrease) * 2 + 'px'}>{"Juego de preguntas"}</Title>
                </TitleContainer>
                <ConfigContainer>
                    <LineContainer>
                        <Text fontSize={20 + Number(fontIncrease) * 2 + 'px'}>{"Tamaño del texto"}</Text>
                        <RangeBarContainer>
                            <RangeBar onChange={handleInputChange}/>
                        </RangeBarContainer>
                    </LineContainer>
                    <LineContainer>
                        <Text fontSize={20 + Number(fontIncrease) * 2 + 'px'}>{"Contraste alto"}</Text>
                        <CheckboxContainer>
                            <Checkbox />
                        </CheckboxContainer>
                    </LineContainer>
                </ConfigContainer>
                <ButtonContainer>
                    <GenericButton onSubmit={() => alert('Hello')} text={'Jugar'} fontSize={20 + Number(fontIncrease) * 2 + 'px'}/>
                </ButtonContainer>
            </Container>
            <InfoContainer>
                <InfoButtonContainer>
                    <GenericButton onSubmit={() => dispatch(goToInformation)} text={'Información'} fontSize={20 + Number(fontIncrease) * 2 + 'px'}/>
                </InfoButtonContainer>
            </InfoContainer>
        </Wrapper>
    )
}

export default Home