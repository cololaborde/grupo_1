import styled from "styled-components";

export const ContentContainer = styled.div`
  margin: 0 2% 4% 2%;
  width: 96%;
`;

export const ContentTitle = styled.h2`
  font-size: ${(props) => props.fontSize || "40px"};
  color: ${(props) => props.color || props.theme.text};
  font-weight: bold;
  font-family: Arial;
  margin: 15px;
`;

export const SecondContentTitle = styled.h3`
  font-size: ${(props) => props.fontSize || "30px"};
  color: ${(props) => props.color || props.theme.text};
  font-weight: bold;
  font-family: Arial;
  margin: 15px;
  @media (max-width: 420px) {
    margin: 5px;
  }
`;

export const ThirdContentTitle = styled.h4`
  font-size: ${(props) => props.fontSize || "20px"};
  color: ${(props) => props.color || props.theme.text};
  font-weight: bold;
  font-family: Arial;
  margin: 15px;
  @media (max-width: 420px) {
    margin: 5px;
  }
`;

export const ContentLine = styled.div``;

export const ContentText = styled.p`
  font-size: ${(props) => props.fontSize || "15px"};
  color: ${(props) => props.color || props.theme.text};
  font-family: Arial;
  margin: 15px;
  @media (max-width: 420px) {
    margin: 5px;
  }
`;

export const UnorderedList = styled.ul`
  padding-left: 5%;
`;

export const ContentList = styled.li`
  font-size: ${(props) => props.fontSize || "15px"};
  color: ${(props) => props.color || props.theme.text};
  font-family: Arial;
  margin: 15px;
  @media (max-width: 420px) {
    margin: 5px;
  }
`;
