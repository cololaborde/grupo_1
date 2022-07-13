import styled from "styled-components";

export const Text = styled.p`
  font-size: ${(props) => props.fontSize || "20px"};
  font-family: Arial;
  color: ${(props) => props.color || props.theme.text};
  margin-top: 3px;
  max-width: 50%;
  height: 100%;
`;

export const HighlightedText = styled.span`
  background-color: ${(props) => props.backgroundColor};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  bottom: 0;
  position: absolute;
`;
