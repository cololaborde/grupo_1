import styled from "styled-components";

export const TutorialContainer = styled.div`
  margin: 0 2%;
  width: auto;
  padding: 15px;
  @media (max-width: 420px) {
    padding: 5px;
  }
`;

export const Text = styled.p`
  font-size: ${(props) => props.fontSize || "15px"};
  color: ${(props) => props.color || props.theme.text};
  font-family: Arial;
`;

export const List = styled.ul`
  padding-left: 5px;
  text-align: left;
  @media (max-width: 420px) {
    padding: 0px;
  }
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 0px;
  text-align: left;
`;

export const SearchBar = styled.input`
  height: 36px;
  margin-right: 5px;
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
  margin-right: 5px;
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

export const CardContainer = styled.button`
  min-height: 50px;
  width: 40%;
  margin: 0px;
  margin-bottom: 30px;
  margin-right: 5px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  border-width: 2px;
  border-style: solid;
  border-color: ${(props) => props.theme.btn_primary};
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.bg_secondary};
  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
  &:focus {
    border: 2px solid ${(props) => props.theme.btn_primary};
    outline-style: solid;
    outline-color: white;
    outline-width: medium;
  }
`;

export const CardText = styled.h2`
  font-size: ${(props) => props.fontSize || "20px"};
  color: ${(props) => props.color || props.theme.text};
  font-weight: bold;
  font-family: Arial;
  margin: 15px;
`;
