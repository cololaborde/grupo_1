import React from "react";
import { useSelector } from "react-redux";
import SearchButton from "../../../../components/Buttons/SearchButton";
import { selectOpenModal } from "../../../../store/Home/selectors";
import { SearchBar, SearchContainer } from "./styled";

const Search = ({ onChange }) => {
  const modalOpened = useSelector(selectOpenModal);
  const handleChange = (event) => {
    onChange(event.target.name, event.target.value);
  };
  return (
    <SearchContainer role="search">
      <SearchBar
        type="text"
        name="searchbar"
        placeholder="Buscar"
        onChange={handleChange}
        aria-hidden={modalOpened | false}
        tabIndex={modalOpened ? "-1" : ""}
      />
      <SearchButton hidden={modalOpened} />
    </SearchContainer>
  );
};

export default Search;
