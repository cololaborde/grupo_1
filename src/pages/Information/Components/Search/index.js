import React from "react";
import { useSelector } from "react-redux";
import SearchButton from "../../../../components/Buttons/SearchButton";
import TrashButton from "../../../../components/Buttons/TrashButton";
import {
  selectHighContrast,
  selectOpenModal,
} from "../../../../store/Home/selectors";
import { theme } from "../../../../theme";
import { SearchBar, SearchContainer } from "./styled";

const Search = ({
  onChange,
  onClick,
  searchInput,
  onTrashClick,
  showTrash,
}) => {
  const highContrast = useSelector(selectHighContrast);
  const modalOpened = useSelector(selectOpenModal);
  const handleChange = (event) => {
    onChange(event.target.name, event.target.value);
  };
  return (
    <SearchContainer role="search">
      <SearchBar
        value={searchInput}
        type="text"
        name="searchbar"
        placeholder="Buscar"
        aria-hidden={modalOpened ? "true" : "false"}
        onChange={handleChange}
        tabIndex={modalOpened ? "-1" : ""}
      />
      <SearchButton hidden={modalOpened} onSubmit={onClick} />
      <TrashButton
        ariaLabel={"Restablecer búsqueda"}
        onClick={onTrashClick}
        show={showTrash}
        color={theme(highContrast).text}
      />
    </SearchContainer>
  );
};

export default Search;
