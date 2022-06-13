import styled from "styled-components";
import { COLORS } from "../../utils/colors";

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: ${COLORS.softWhite};
`;

export const MainContainer = styled.div`
  position: relative;
  width: auto;
  max-width: 800px;
  height: auto;
  margin: auto;
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  min-height: 500px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.lightGray};
`;

export const BackContainer = styled.div`
  position: absolute;
  left: 15px;
  top: 15px;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  width: 60%;
`;

export const Title = styled.p`
  font-size: ${(props) => props.fontSize || "40px"};
  color: ${(props) => props.color || COLORS.black};
  font-weight: bold;
  font-family: Arial;
  margin: 15px;
  text-align: center;
`;

export const AnswersContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 40px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Answer = styled.div`
  text-align: center;
  margin: 0 50px;
  display: flex;
  flex-direction: column;
`;

export const AnswerTitle = styled.div`
  font-size: ${(props) => props.fontSize || "20px"};
  color: ${(props) => props.color || COLORS.black};
  text-decoration: ${(props) =>
    props.underline ? "underline" : "none" || "none"};
`;

export const AnswerImage = styled.div`
  width: 100%;
  height: 200px;
`;

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

export const SendButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ResultTitle = styled.div`
  font-size: ${(props) => props.fontSize || "40px"};
  color: ${(props) => props.color || COLORS.black};
  font-weight: bold;
  font-family: Arial;
`;

export const ResultTip = styled.div`
  margin: 15px 0;
  font-size: ${(props) => props.fontSize || "20px"};
  color: ${(props) => props.color || COLORS.black};
  text-align: center;
`;

export const ResultButtons = styled.div`
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: row;
`;
