import React, { useEffect, useState } from "react";
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
import { selectInformation } from "../../store/Information/selectors";
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
  NavContainer,
  NavText,
  ContentContainer,
  Content,
} from "./styled";

const Information = () => {
  const dispatch = useDispatch();

  const pages = useSelector(selectInformation);
  const fontIncrease = useSelector(selectFontIncrease);

  const [currentSection, setCurrentSection] = useState(pages);
  const [navPages, setNavPages] = useState([]);

  function goBack(index = -1) {
    if (index < navPages.length - 1) {
      let newSection = pages;
      for (var i = 0; i <= index; i++) {
        newSection = newSection.pages.find((page) => page.name === navPages[i]);
      }
      for (i = navPages.length - 1; i > index; i--) {
        navPages.pop();
      }
      setCurrentSection(newSection);
    }
  }
  return (
    <Wrapper>
      <MainContainer>
        <ConfigModal show={useSelector(selectShowConfigModal)} />
        <BackContainer>
          <BackButton onSubmit={() => dispatch(goToHome)} />
        </BackContainer>
        <HamburguerMenu />
        <TitleContainer>
          <Title fontSize={40 + Number(fontIncrease) + "px"}>Información</Title>
        </TitleContainer>
        <SearchContainer>
          <SearchBar type="text" name="searchbar" placeholder="Buscar" />
          <SearchButton />
        </SearchContainer>
        <NavContainer>
          {navPages.map((page, index) => (
            <NavText
              key={index}
              underline={true}
              fontSize={15 + Number(fontIncrease) + "px"}
              onClick={() => goBack(index)}
            >
              {" >"} {page}
            </NavText>
          ))}
        </NavContainer>
        {currentSection.type === "Section" ? (
          <CardsContainer>
            {currentSection.pages.map((page, index) => (
              <CardContainer
                key={index}
                onClick={() => (
                  setNavPages(navPages.concat(page.name)),
                  setCurrentSection(page)
                )}
              >
                <CardText>{page.name}</CardText>
              </CardContainer>
            ))}
          </CardsContainer>
        ) : (
          <ContentContainer>
            <Title>{currentSection.name}</Title>
            {currentSection.content.map((line, index) => (
              <Content key={index}>{line}</Content>
            ))}
          </ContentContainer>
        )}
      </MainContainer>
    </Wrapper>
  );
};

export default Information;
