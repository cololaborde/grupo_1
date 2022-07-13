import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
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
import Cards from "./Components/Cards";
import Content from "./Components/Content";
import {
  Wrapper,
  MainContainer,
  BackContainer,
  TitleContainer,
  Title,
  SearchContainer,
  SearchBar,
  NavContainer,
  NavText,
} from "./styled";

const Information = () => {
  const dispatch = useDispatch();

  const pages = useSelector(selectInformation);
  const fontIncrease = useSelector(selectFontIncrease);
  const [currentSection, setCurrentSection] = useState(pages);
  const [navPages, setNavPages] = useState([]);
  const initialCheckState = () => {
    let checks = {};
    if (currentSection.pages) {
      for (let i = 0; i < currentSection.pages.length; i++) checks[i] = false;
    }
    return checks;
  };
  const [downloadIndex, setDownloadIndex] = useState(initialCheckState());
  const [download, setDownload] = useState(false);

  const showConfigModal = useSelector(selectShowConfigModal);
  const showExitModal = useSelector(selectShowExitModal);

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
    } else toDownload = currentSection;

    console.log(toDownload);
    return toDownload;
  };

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

  const { path } = useParams();
  useEffect(() => {
    if (path != null) {
      let newSection = pages;
      path.split("-").forEach((sectionName) => {
        let auxSection = null;
        if (newSection == null) return;
        if (newSection.type == "Page") return;
        auxSection = newSection.pages.find((s) => {
          return s.name === sectionName;
        });
        if (newSection != null) {
          newSection = auxSection;
        } else {
          newSection = null;
        }
      });
      if (newSection != null) {
        setCurrentSection(newSection);
        setNavPages(path.split("-"));
      }
    }
  }, []);

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
            fontSize={15 + Number(fontIncrease) + "px"}
            onClick={() => goMain()}
            aria-hidden={modalOpened() | false}
            tabIndex={modalOpened() ? "-1" : ""}
          >
            {" - Información"}
          </NavText>
          {navPages.map((page, index) => (
            <NavText
              key={index}
              fontSize={15 + Number(fontIncrease) + "px"}
              onClick={() => goBack(index)}
              aria-hidden={modalOpened() | false}
              tabIndex={modalOpened() ? "-1" : ""}
            >
              {" -"} {page}
            </NavText>
          ))}
        </NavContainer>
        {currentSection.type === "Section" ? (
          <Cards
            download={download}
            downloadIndex={downloadIndex}
            currentSection={currentSection}
            fontIncrease={fontIncrease}
            modalOpened={modalOpened}
            startDownload={() => {
              getDownloadData();
              setDownloadIndex(initialCheckState());
            }}
            goToSection={(page) => {
              setNavPages(navPages.concat(page.name));
              setCurrentSection(page);
            }}
            checkSection={(index) => {
              setDownloadIndex({
                ...downloadIndex,
                [index]: !downloadIndex[index],
              });
            }}
          />
        ) : (
          <Content
            currentSection={currentSection}
            fontIncrease={fontIncrease}
          />
        )}
      </MainContainer>
    </Wrapper>
  );
};

export default Information;
