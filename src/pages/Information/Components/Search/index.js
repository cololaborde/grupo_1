import React from "react";
import { useSelector } from "react-redux";
import SearchButton from "../../../../components/Buttons/SearchButton";
import DeleteButton from "../../../../components/Buttons/DeleteButton";
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
        aria-hidden={modalOpened ? "true" : "false"}
        onChange={handleChange}
        tabIndex={modalOpened ? "-1" : ""}
      />
      <SearchButton hidden={modalOpened} onSubmit={onClick} />
      {showTrash ? (
        <DeleteButton
          hidden={modalOpened}
          ariaLabel={"Restablecer búsqueda"}
          onSubmit={onTrashClick}
        />
      ) : (
        ""
      )}
    </SearchContainer>
  );
};

export default Search;
