import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ConfigModal from "../../components/Modals/ConfigModal";
import ExitModal from "../../components/Modals/ExitModal";
import { setShowExitModal } from "../../store/Home/actions";
import { selectInformation } from "../../store/Information/selectors";
import Cards from "./Components/Cards";
import Content from "./Components/Content";
import NavBar from "./Components/NavBar";
import Search from "./Components/Search";
import Title from "./Components/Title";
import TopBar from "./Components/TopBar";
import PDFDownloadButton from "./Components/PDFDownloadButton";
import { Wrapper, MainContainer } from "./styled";

const Information = () => {
  const dispatch = useDispatch();

  const pages = useSelector(selectInformation);
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

  const goBackButton = () =>
    navPages.length > 1
      ? goBack(navPages.length - 2)
      : navPages.length == 1
      ? goMain()
      : showExitModalConst();

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

  const handleInputChange = (name, value) => {
    switch (name) {
      case "searchbar":
        console.log(name, value);
        break;
    }
  };

  useEffect(() => {
    setData(getDownloadData());
  }, [downloadIndex]);

  useEffect(() => {
    if (currentSection.pages) setDownloadIndex(initialCheckState());
  }, [currentSection]);

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

  return (
    <Wrapper>
      <ConfigModal />
      <ExitModal />

      <MainContainer>
        <TopBar
          downloadPressed={download}
          goBack={goBackButton}
          setDownload={() => setDownload(!download)}
        />
        <Title text="Información" />
        <Search onChange={handleInputChange} />
        <NavBar navPages={navPages} goMain={goMain} goBack={goBack} />
        {currentSection.type === "Section" ? (
          <>
            {download && (
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
            <Cards
              download={download}
              downloadIndex={downloadIndex}
              currentSection={currentSection}
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
          </>
        ) : (
          <Content currentSection={currentSection} />
        )}
      </MainContainer>
    </Wrapper>
  );
};

export default Information;
