import React from "react";
import { useDispatch } from "react-redux";
import BackButton from "../../components/Buttons/BackButton";
import DownloadButton from "../../components/Buttons/DownloadButton";
import SettingsButton from "../../components/Buttons/SettingsButton";
import HomeButton from "../../components/Buttons/HomeButton";
import SearchButton from "../../components/Buttons/SearchButton";
import { goToHome } from "../../store/Home/actions";
import { 
    Wrapper,
    MainContainer,
    BackContainer,
    MenuContainer,
    TitleContainer,
    Title,
    SearchContainer,
    CardsContainer,
    CardContainer,
    CardText,
    SearchBar,
} from "./styled";

const Information = () => {
    const dispatch = useDispatch()
    return(
        <Wrapper>
            <MainContainer>
                <BackContainer>
                    <BackButton onSubmit={() => dispatch(goToHome)}/>
                </BackContainer>
                <MenuContainer>
                    <DownloadButton/>
                    <SettingsButton/>
                    <HomeButton/>
                </MenuContainer>
                <TitleContainer>
                    <Title>Título</Title>
                </TitleContainer>
                <SearchContainer>
                    <SearchBar type="text" name="searchbar" placeholder="Buscar"/>
                    <SearchButton/>
                </SearchContainer>
                <CardsContainer>
                    <CardContainer><CardText>Card Test 1</CardText></CardContainer>
                    <CardContainer><CardText>Card Test 2</CardText></CardContainer>
                    <CardContainer><CardText>Card Test 3</CardText></CardContainer>
                    <CardContainer><CardText>Card Test 4</CardText></CardContainer>
                    <CardContainer><CardText>Card Test 5</CardText></CardContainer>
                </CardsContainer>
            </MainContainer>
        </Wrapper>
    )
}

export default Information