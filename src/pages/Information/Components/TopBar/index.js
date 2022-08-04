import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { selectOpenModal } from "../../../../store/Home/selectors";
import BackButton from "../../../../components/Buttons/BackButton";
import HamburgerMenu from "../../../../components/Buttons/HamburgerMenu";
import { BackContainer } from "./styled";

const TopBar = ({ goBack }) => {
  const modalOpened = useSelector(selectOpenModal);
  return (
    <>
      <BackContainer>
        <BackButton onSubmit={goBack} hidden={modalOpened} />
      </BackContainer>
      <HamburgerMenu hidden={modalOpened} />
    </>
  );
};

TopBar.propTypes = {
  goBack: PropTypes.func,
  setDownload: PropTypes.func,
};

export default TopBar;
