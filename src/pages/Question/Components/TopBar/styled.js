import styled from "styled-components";

export const BackContainer = styled.div`
  position: absolute;
  left: 15px;
  top: 15px;
`;

export const CounterContainer = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.bg_primary};
  border-radius: 10px;
  padding: 5px;
  margin-top: 30px;
  position: absolute;
  top: 0;
`;

export const CounterText = styled.p`
  font-size: ${(props) => props.fontSize || "20px"};
  font-family: Arial;
  font-weight: bold;
  color: ${(props) => props.color || props.theme.text};
  margin: 0;
`;
