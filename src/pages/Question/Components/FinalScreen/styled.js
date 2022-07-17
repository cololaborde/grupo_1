import styled from "styled-components";

export const Text = styled.p`
  font-size: ${(props) => props.fontSize || "20px"};
  font-family: Arial;
  color: ${(props) => props.color || props.theme.text};
  margin: 3px 0px;
  max-width: 50%;
  height: 100%;
`;

export const HighlightedText = styled.p`
  background-color: ${(props) => props.backgroundColor};
  font-size: ${(props) => props.fontSize || "20px"};
  font-family: Arial;
  color: ${(props) => props.color || props.theme.text};
  margin: 3px 0px;
`;

export const LineContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5px;
`;

export const SvgContainer = styled.div`
  position: relative;
  height: ${(props) => props.lineSize || "20px"};
  width: ${(props) => props.lineSize || "20px"};
  margin-right: 5px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  bottom: 0;
  position: absolute;
`;
