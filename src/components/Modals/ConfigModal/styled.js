import styled from "styled-components";
import { COLORS } from "../../../utils/colors";

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

export const RangeBarContainer = styled.div`
  margin-bottom: 0px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: space-between;
  padding: 10px;
  width: auto;
  min-width: 130px;
`;

export const InfoButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: auto;
  min-width: 150px;
`;

export const InfoContainer = styled.div`
  width: auto;
  max-width: 300px;
  height: auto;
  margin: auto;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.softWhite};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
