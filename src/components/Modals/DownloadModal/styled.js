import styled from "styled-components";

export const Text = styled.p`
  margin: 0 10px;
  padding-top: 10px;
  width: 100%;
  font-size: ${(props) => props.fontSize || "20px"};
  font-weight: bold;
  font-family: Arial;
  text-align: center;
  color: black;
`;

export const List = styled.ul`
  padding: 0px;
  margin: 0px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0px;
`;

export const Link = styled.a`
  padding: 10px;
  font-size: ${(props) => props.fontSize || "20px"};
  font-weight: bold;
  font-family: Arial;
  text-align: center;
  color: ${(props) => props.color || props.theme.text};
  border-radius: 30px;
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => props.theme.btn_secondary};
  background-color: ${(props) =>
    props.backgroundColor || props.theme.btn_primary};
  text-decoration: none;
  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
  &:focus {
    border: 2px solid ${(props) => props.theme.btn_secondary};
    outline-style: solid;
    outline-color: white;
    outline-width: medium;
  }
`;
