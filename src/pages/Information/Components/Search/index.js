import React from "react";
import { useSelector } from "react-redux";
import SearchButton from "../../../../components/Buttons/SearchButton";
import TrashButton from "../../../../components/Buttons/TrashButton";
import { selectOpenModal } from "../../../../store/Home/selectors";
import { SearchBar, SearchContainer } from "./styled";

const Search = ({
  onChange,
  onClick,
  searchInput,
  onTrashClick,
  showTrash,
}) => {
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
        onChange={handleChange}
        aria-hidden={modalOpened | false}
        tabIndex={modalOpened ? "-1" : ""}
      />
      <SearchButton hidden={modalOpened} onSubmit={onClick} />
      <TrashButton onClick={onTrashClick} show={showTrash} />
    </SearchContainer>
  );
};

export default Search;
