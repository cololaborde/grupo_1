import styled from "styled-components";

export const SearchContainer = styled.div`
  margin: 10px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchBar = styled.input`
  height: 36px;
  margin-right: 0px;
  margin-left: 5px;
  font-size: 16px;
  padding: 4px;
  padding-left: 8px;
  padding-right: 0px;
  border-radius: 10px;
  border-width: 2px;
  border-style: solid;
  border-color: ${(props) => props.theme.btn_primary};
  background-color: ${(props) => props.theme.bg_secondary};
  &:focus {
    border: 2px solid ${(props) => props.theme.btn_primary};
    outline-style: solid;
    outline-color: white;
    outline-width: medium;
  }
`;
