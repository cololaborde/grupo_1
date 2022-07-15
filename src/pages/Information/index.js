import { Checkbox } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BackButton from "../../components/Buttons/BackButton";
import HamburguerMenu from "../../components/Buttons/HamburguerMenu";
import SearchButton from "../../components/Buttons/SearchButton";
import ConfigModal from "../../components/Modals/ConfigModal";
import ExitModal from "../../components/Modals/ExitModal";
import {
  setShowConfigModal,
  setShowExitModal,
  setShowHelpModal,
} from "../../store/Home/actions";
import {
  selectFontIncrease,
  selectShowConfigModal,
  selectShowExitModal,
} from "../../store/Home/selectors";
import { selectInformation } from "../../store/Information/selectors";
import PDFDownloadButton from "./Components/PDFDownloadButton";
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
  ContentTitle,
  CheckBoxContainer,
  SecondContentTitle,
  ThirdContentTitle,
  ContentText,
  ContentList,
} from "./styled";

const Information = () => {
  const initialCheckState = () => {
    let checks = {};
    if (currentSection.pages) {
      for (let i = 0; i < currentSection.pages.length; i++) checks[i] = false;
    }
    return checks;
  };

  const dispatch = useDispatch();

  const pages = useSelector(selectInformation);
  const fontIncrease = useSelector(selectFontIncrease);
  const showConfigModal = useSelector(selectShowConfigModal);
  const showExitModal = useSelector(selectShowExitModal);

  const [currentSection, setCurrentSection] = useState(pages);
  const [navPages, setNavPages] = useState([]);
  const [downloadIndex, setDownloadIndex] = useState(initialCheckState());
  const [download, setDownload] = useState(false);
  const [data, setData] = useState([]);

  const showExitModalConst = () => {
    dispatch(setShowExitModal(true));
    document.getElementById("exit-modal").querySelector("#close-icon").focus();
  };

  const goMain = () => {
    if (navPages.length > 0) {
      setNavPages([]);
      setCurrentSection(pages);
    }
  };

  const goBack = (index = -1) => {
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
  };
  const modalOpened = () => {
    return showConfigModal || showExitModal;
  };

  const getDownloadData = () => {
    let toDownload = [];
    if (currentSection.pages) {
      const pagesCopy = [...currentSection.pages];
      pagesCopy.map((item, index) => {
        if (downloadIndex[index]) toDownload.push(item);
      });
    } else toDownload = [currentSection];

    return toDownload;
  };

  useEffect(() => {
    setData(getDownloadData());
  }, [downloadIndex]);

  useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        dispatch(setShowHelpModal(false));
        dispatch(setShowExitModal(false));
        dispatch(setShowConfigModal(false));
      }
    };
    document.addEventListener("keydown", keyDownHandler);
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  useEffect(() => {
    if (currentSection.pages) setDownloadIndex(initialCheckState());
  }, [currentSection]);

  return (
    <Wrapper>
      <MainContainer>
        <ConfigModal show={showConfigModal} />
        <ExitModal
          show={showExitModal}
          fontSize={15 + Number(fontIncrease) * 2 + "px"}
        />
        <BackContainer>
          <BackButton
            onSubmit={() =>
              navPages.length > 1
                ? goBack(navPages.length - 2)
                : navPages.length == 1
                ? goMain()
                : showExitModalConst()
            }
            hidden={modalOpened()}
          />
        </BackContainer>
        <HamburguerMenu
          onSubmit={() => setDownload(!download)}
          hidden={modalOpened()}
        />
        <TitleContainer>
          <Title fontSize={40 + Number(fontIncrease) * 2 + "px"}>
            Información
          </Title>
        </TitleContainer>
        <SearchContainer role="search">
          <SearchBar
            type="text"
            name="searchbar"
            placeholder="Buscar"
            aria-hidden={modalOpened() | false}
            tabIndex={modalOpened() ? "-1" : ""}
          />
          <SearchButton hidden={modalOpened()} />
        </SearchContainer>
        <NavContainer>
          <NavText
            fontSize={15 + Number(fontIncrease) * 2 + "px"}
            onClick={() => goMain()}
            aria-hidden={modalOpened() | false}
            tabIndex={modalOpened() ? "-1" : ""}
          >
            {" - Información"}
          </NavText>
          {navPages.map((page, index) => (
            <NavText
              key={index}
              fontSize={15 + Number(fontIncrease) * 2 + "px"}
              onClick={() => goBack(index)}
              aria-hidden={modalOpened() | false}
              tabIndex={modalOpened() ? "-1" : ""}
            >
              {" -"} {page}
            </NavText>
          ))}
        </NavContainer>
        {download && currentSection.type === "Section" && (
          <PDFDownloadButton
            downloadIndex={downloadIndex}
            currentSection={currentSection}
            data={data}
            onClick={() => {
              setDownloadIndex(initialCheckState());
              setData([]);
            }}
            download={download}
          />
        )}
        {currentSection.type === "Section" ? (
          <CardsContainer>
            {currentSection.pages.map((page, index) => (
              // eslint-disable-next-line react/jsx-key
              <CheckBoxContainer>
                <CardContainer
                  key={index}
                  onClick={() => (
                    setNavPages(navPages.concat(page.name)),
                    setCurrentSection(page)
                  )}
                  aria-hidden={modalOpened() | false}
                  tabIndex={modalOpened() ? "-1" : ""}
                >
                  <CardText fontSize={20 + Number(fontIncrease) * 2 + "px"}>
                    {page.name}
                  </CardText>
                </CardContainer>
                {download && (
                  <Checkbox
                    aria-label={"Seleccionar" + page.name}
                    color={"default"}
                    checked={!!downloadIndex[index]}
                    onClick={() => {
                      setDownloadIndex({
                        ...downloadIndex,
                        [index]: !downloadIndex[index],
                      });
                    }}
                  />
                )}
              </CheckBoxContainer>
            ))}
          </CardsContainer>
        ) : (
          <ContentContainer>
            <ContentTitle>{currentSection.name}</ContentTitle>
            {currentSection.content.map((line, index) => (
              <Content key={index}>
                {typeof line === "string" ? (
                  line[0] == "&" ? (
                    line[1] == "1" ? (
                      <SecondContentTitle
                        fontSize={25 + Number(fontIncrease) * 2 + "px"}
                      >
                        {line.substring(2)}
                      </SecondContentTitle>
                    ) : (
                      <ThirdContentTitle
                        fontSize={20 + Number(fontIncrease) * 2 + "px"}
                      >
                        {line.substring(2)}
                      </ThirdContentTitle>
                    )
                  ) : (
                    <ContentText
                      fontSize={15 + Number(fontIncrease) * 2 + "px"}
                    >
                      {line}
                    </ContentText>
                  )
                ) : (
                  <ul>
                    {line.map((item, i) => (
                      <ContentList
                        key={i}
                        fontSize={15 + Number(fontIncrease) * 2 + "px"}
                      >
                        {item}
                      </ContentList>
                    ))}
                  </ul>
                )}
              </Content>
            ))}
          </ContentContainer>
        )}
      </MainContainer>
    </Wrapper>
  );
};

export default Information;
