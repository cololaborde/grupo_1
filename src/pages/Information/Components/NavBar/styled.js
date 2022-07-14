import styled from "styled-components";

export const NavContainer = styled.nav`
  width: 100%;
  text-align: center;
  margin-bottom: 10px;
`;

export const NavText = styled.button`
  font-size: ${(props) => props.fontSize || "15px"};
  color: ${(props) => props.color || props.theme.btn_text};
  font-weight: bold;
  font-family: Arial;
  display: inline;
  background-color: ${(props) => props.theme.btn_primary};
  border-radius: 2px;
  border-style: none;
  padding: 2px;
  &:hover {
    cursor: pointer;
    border: 2px solid ${(props) => props.theme.bg_secondary};
  }
  &:focus {
    border: 2px solid ${(props) => props.theme.bg_secondary};
    outline-style: solid;
    outline-color: white;
    outline-width: medium;
  }
`;
