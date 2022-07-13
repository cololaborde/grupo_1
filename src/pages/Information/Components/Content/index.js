import React from "react";
import {
  ContentContainer,
  ContentLine,
  ContentList,
  ContentText,
  ContentTitle,
  SecondContentTitle,
  ThirdContentTitle,
} from "./styled";

const Content = (props) => {
  return (
    <ContentContainer>
      <ContentTitle>{props.currentSection.name}</ContentTitle>
      {props.currentSection.content.map((line, index) => (
        <ContentLine key={index}>
          {typeof line === "string" ? (
            line[0] == "&" ? (
              line[1] == "1" ? (
                <SecondContentTitle
                  fontSize={25 + Number(props.fontIncrease) * 2 + "px"}
                >
                  {line.substring(2)}
                </SecondContentTitle>
              ) : (
                <ThirdContentTitle
                  fontSize={20 + Number(props.fontIncrease) * 2 + "px"}
                >
                  {line.substring(2)}
                </ThirdContentTitle>
              )
            ) : (
              <ContentText
                fontSize={15 + Number(props.fontIncrease) * 2 + "px"}
              >
                {line}
              </ContentText>
            )
          ) : (
            <ul>
              {line.map((item, i) => (
                <ContentList
                  key={i}
                  fontSize={15 + Number(props.fontIncrease) * 2 + "px"}
                >
                  {item}
                </ContentList>
              ))}
            </ul>
          )}
        </ContentLine>
      ))}
    </ContentContainer>
  );
};

export default Content;
