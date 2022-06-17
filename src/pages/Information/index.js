import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BackButton from "../../components/Buttons/BackButton";
import HamburguerMenu from "../../components/Buttons/HamburguerMenu";
import SearchButton from "../../components/Buttons/SearchButton";
import ConfigModal from "../../components/Modals/ConfigModal";
import ExitModal from "../../components/Modals/ExitModal";
import { setShowExitModal, setShowHelpModal } from "../../store/Home/actions";
import {
  selectFontIncrease,
  selectHighContrast,
  selectShowConfigModal,
  selectShowExitModal,
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
  const highContrast = useSelector(selectHighContrast);
  const [currentSection, setCurrentSection] = useState(pages);
  const [navPages, setNavPages] = useState([]);
  function goMain() {
    if (navPages.length > 0) {
      setNavPages([]);
      setCurrentSection(pages);
    }
  }

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
  const showConfigModal = useSelector(selectShowConfigModal);
  const showExitModal = useSelector(selectShowExitModal);
  return (
    <Wrapper>
      <MainContainer>
        <ConfigModal show={showConfigModal} />
        <ExitModal show={showExitModal} />
        <BackContainer>
          <BackButton
            onSubmit={() =>
              navPages.length > 1
                ? goBack(navPages.length - 2)
                : navPages.length == 1
                ? goMain()
                : dispatch(setShowExitModal(true))
            }
          />
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
          <NavText
            fontSize={15 + Number(fontIncrease) + "px"}
            onClick={() => goMain()}
          >
            {" > Información"}
          </NavText>
          {navPages.map((page, index) => (
            <NavText
              key={index}
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
                <CardText fontSize={20 + Number(fontIncrease) + "px"}>
                  {page.name}
                </CardText>
              </CardContainer>
            ))}
          </CardsContainer>
        ) : (
          <ContentContainer>
            <Title>{currentSection.name}</Title>
            {currentSection.content.map((line, index) => (
              <Content key={index} fontSize={15 + Number(fontIncrease) + "px"}>
                {line}
              </Content>
            ))}
          </ContentContainer>
        )}
      </MainContainer>
    </Wrapper>
  );
};

export default Information;
