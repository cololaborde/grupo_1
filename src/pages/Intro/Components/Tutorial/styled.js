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
  @media (max-width: 420px) {
    padding: 0px;
  }
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 0px;
`;
