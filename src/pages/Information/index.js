import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ConfigModal from "../../components/Modals/ConfigModal";
import ExitModal from "../../components/Modals/ExitModal";
import {
  goToHome,
  goToQuestion,
  setShowExitModal,
} from "../../store/Home/actions";
import { selectInformation } from "../../store/Information/selectors";
import Cards from "./Components/Cards";
import Content from "./Components/Content";
import NavBar from "./Components/NavBar";
import Search from "./Components/Search";
import Title from "./Components/Title";
import TopBar from "./Components/TopBar";
import { Wrapper, MainContainer } from "./styled";
import DownloadModal from "../../components/Modals/DownloadModal";
import { infoGoBackHome } from "../../store/Home/selectors";

const Information = () => {
  const dispatch = useDispatch();

  const pages = useSelector(selectInformation);
  const goBackToHome = useSelector(infoGoBackHome);

  const [currentSection, setCurrentSection] = useState(pages);
  const [navPages, setNavPages] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  console.log(goBackToHome);

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

  const goBackButton = () => (goBackToHome ? goToHome() : goToQuestion());
  /* navPages.length > 1
      ? goBack(navPages.length - 2)
      : navPages.length == 1
      ? goMain()
      : showExitModalConst(); */

  const searchIn = (obj, matches, currentPath) => {
    let object = { ...obj };
    if (object.name) {
      currentPath.push(object.name);
      if (object.name.toLowerCase().includes(searchInput.toLowerCase())) {
        object["path"] = [...currentPath];
        matches.push(object);
      }
    }
    if (object.pages) {
      for (let index in object.pages) {
        searchIn(object.pages[index], matches, currentPath);
      }
    }
    currentPath.pop();
  };

  const handleSearchOnClick = () => {
    if (searchInput.trim().length > 0) {
      setNavPages([]);
      const matches = [];
      const currentPath = [];
      if (pages) searchIn(pages, matches, currentPath);
      setCurrentSection({ type: "Section", pages: matches });
    }
  };

  const handleInputChange = (name, value) => {
    switch (name) {
      case "searchbar":
        setSearchInput(value);
        break;
    }
  };

  const { path } = useParams();
  useEffect(() => {
    if (path != null) {
      let newSection = pages;
      path.split("-").forEach((sectionName) => {
        if ((newSection == null) | (newSection.type == "Page")) return;
        let auxSection = null;
        auxSection = newSection.pages.find((s) => {
          return s.name === sectionName;
        });
        newSection = auxSection;
      });
      if (newSection != null) {
        setCurrentSection(newSection);
        setNavPages(path.split("-"));
      }
    }
  }, []);

  useEffect(() => {
    if (currentSection.path) {
      setNavPages(currentSection.path);
    }
  }, [currentSection]);

  return (
    <Wrapper>
      <ConfigModal />
      <ExitModal />
      <DownloadModal />

      <MainContainer>
        <TopBar goBack={goBackButton} />
        <Title text="Información" />
        <Search
          searchInput={searchInput}
          onChange={handleInputChange}
          onClick={() => handleSearchOnClick()}
          showTrash={searchInput !== ""}
          onTrashClick={() => {
            setSearchInput("");
            setCurrentSection(pages);
            setNavPages([]);
          }}
        />
        <NavBar navPages={navPages} goMain={goMain} goBack={goBack} />
        {currentSection.type === "Section" ? (
          <Cards
            currentSection={currentSection}
            goToSection={(page) => {
              setNavPages(navPages.concat(page.name));
              setCurrentSection(page);
            }}
          />
        ) : (
          <Content currentSection={currentSection} />
        )}
      </MainContainer>
    </Wrapper>
  );
};

export default Information;
