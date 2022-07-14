import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import {
  selectFontIncrease,
  selectOpenModal,
} from "../../../../store/Home/selectors";
import { NavContainer, NavText } from "./styled";

const NavBar = ({ navPages, goMain, goBack }) => {
  const fontIncrease = useSelector(selectFontIncrease);
  const modalOpened = useSelector(selectOpenModal);
  return (
    <NavContainer>
      <NavText
        fontSize={15 + Number(fontIncrease) + "px"}
        onClick={goMain()}
        aria-hidden={modalOpened | false}
        tabIndex={modalOpened ? "-1" : ""}
      >
        {" - Información"}
      </NavText>
      {navPages.map((page, index) => (
        <NavText
          key={index}
          fontSize={15 + Number(fontIncrease) + "px"}
          onClick={goBack(index)}
          aria-hidden={modalOpened | false}
          tabIndex={modalOpened ? "-1" : ""}
        >
          {" -"} {page}
        </NavText>
      ))}
    </NavContainer>
  );
};

NavBar.propTypes = {
  navPages: PropTypes.arrayOf(PropTypes.string),
  goMain: PropTypes.func,
  goBack: PropTypes.func,
};

export default NavBar;
