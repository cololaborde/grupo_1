import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const Title = styled.h1`
  font-size: ${(props) => props.fontSize || "24px"};
  color: ${(props) => props.textColor || "black"};
  font-weight: bold;
  font-family: Arial;
`;

export const TextContainer = styled.div`
  display: flex;
  padding: 10px;
`;

export const Text = styled.div`
  font-size: ${(props) => props.fontSize || "17px"};
  color: ${(props) => props.textColor || "black"};
`;
