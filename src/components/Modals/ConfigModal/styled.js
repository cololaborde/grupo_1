import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ConfigContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Text = styled.p`
  font-size: ${(props) => props.fontSize || "20px"};
  font-weight: bold;
  font-family: Arial;
  color: ${(props) => props.color || "black"};
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 100px;
`;

export const CheckboxContainer = styled.div`
  margin-top: 25px;
`;

export const RangeBarContainer = styled.div``;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
