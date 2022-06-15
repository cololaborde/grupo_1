import styled from "styled-components";
import { COLORS } from "../../utils/colors";

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-left: 15px;
  margin-right: 15px;
`;

export const Title = styled.p`
  font-size: ${(props) => props.fontSize || "40px"};
  color: ${(props) => props.color || COLORS.black};
  font-weight: bold;
  font-family: Arial;
`;

export const ConfigContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const LineContainer = styled.div`
  width: 100%;
  display: inline-block;
  margin-bottom: 20px;
`;

export const Text = styled.p`
  font-size: ${(props) => props.fontSize || "20px"};
  font-weight: bold;
  font-family: Arial;
  color: ${(props) => props.color || COLORS.black};
  float: left;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 30px;
  max-width: 50%;
`;

export const CheckboxContainer = styled.div`
  float: right;
  margin-top: auto;
  margin-bottom: auto;
  margin-right: 30px;
  padding-right: 50px;
  max-width: 50%;
`;

export const RangeBarContainer = styled.div`
  float: right;
  margin-top: auto;
  margin-bottom: auto;
  margin-right: 30px;
  max-width: 50%;
`;

export const Container = styled.div`
  width: auto;
  max-width: 500px;
  height: auto;
  margin: auto;
  margin-top: 10%;
  margin-bottom: 5%;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.softWhite};
`;

export const InfoButtonContainer = styled.div`
  margin: 10px;
  width: auto;
  min-width: 150px;
`;

export const InfoContainer = styled.div`
  min-width: 100px;
  width: auto;
  max-width: 500px;
  height: auto;
  margin: auto;
  margin-top: 20px;
  display: flex;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.softWhite};
`;

export const ButtonContainer = styled.div`
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.softWhite};
`;
