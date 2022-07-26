import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 20px 0px;
`;

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  @media (max-width: 767px) {
    width: 90%;
  }
`;

export const ResultTitle = styled.h2`
  font-size: ${(props) => props.fontSize || "40px"};
  color: ${(props) => props.color || props.theme.text};
  font-weight: bold;
  font-family: Arial;
  margin: 15px;
`;

export const ResultTip = styled.p`
  margin: 15px 0;
  font-size: ${(props) => props.fontSize || "20px"};
  font-family: Arial;
  color: ${(props) => props.color || props.theme.text};
  text-align: center;
`;

export const ResultButtons = styled.div`
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
