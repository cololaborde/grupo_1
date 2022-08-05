import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const Value = styled.p`
  font-size: ${(props) => props.fontSize || "20px"};
  font-weight: bold;
  font-family: Arial;
  color: ${(props) => props.theme.text};
  float: left;
  margin-top: 3px;
  margin-bottom: auto;
  margin-left: 30px;
  max-width: 50%;
  height: 100%;
`;
