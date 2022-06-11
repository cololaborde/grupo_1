import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BackButton from "../../components/Buttons/BackButton";
import HamburguerMenu from "../../components/Buttons/HamburguerMenu";
import SearchButton from "../../components/Buttons/SearchButton";
import ConfigModal from "../../components/Modals/ConfigModal";
import { goToHome } from "../../store/Home/actions";
import {
  selectFontIncrease,
  selectShowConfigModal,
} from "../../store/Home/selectors";
import {
  Wrapper,
  MainContainer,
  BackContainer,
  TitleContainer,
  Title,
  SearchContainer,
  CardsContainer,
  CardContainer,
  CardText,
  SearchBar,
} from "./styled";

const Information = () => {
  const dispatch = useDispatch();
  const fontIncrease = useSelector(selectFontIncrease);
  return (
    <Wrapper>
      <MainContainer>
        <ConfigModal show={useSelector(selectShowConfigModal)} />
        <BackContainer>
          <BackButton onSubmit={() => dispatch(goToHome)} />
        </BackContainer>
        <HamburguerMenu />
        <TitleContainer>
          <Title fontSize={40 + Number(fontIncrease) + "px"}>Título</Title>
        </TitleContainer>
        <SearchContainer>
          <SearchBar type="text" name="searchbar" placeholder="Buscar" />
          <SearchButton />
        </SearchContainer>
        <CardsContainer>
          <CardContainer>
            <CardText>Card Test 1</CardText>
          </CardContainer>
          <CardContainer>
            <CardText>Card Test 2</CardText>
          </CardContainer>
          <CardContainer>
            <CardText>Card Test 3</CardText>
          </CardContainer>
          <CardContainer>
            <CardText>Card Test 4</CardText>
          </CardContainer>
          <CardContainer>
            <CardText>Card Test 5</CardText>
          </CardContainer>
        </CardsContainer>
      </MainContainer>
    </Wrapper>
  );
};

export default Information;
