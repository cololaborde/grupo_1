import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: ${(props) => props.fontSize || "24px"};
  color: ${(props) => props.textColor || "black"};
  font-weight: bold;
  font-family: Arial;
  margin-block: 0.5em;
`;

export const TextContainer = styled.div`
  display: flex;
  padding: 5px 10px;
`;

export const Text = styled.p`
  font-size: ${(props) => props.fontSize || "17px"};
  font-family: Arial;
  color: ${(props) => props.textColor || "black"};
  margin-block: 0px;
`;
