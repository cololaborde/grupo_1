import React from "react";
import { useSelector } from "react-redux";
import { selectFontIncrease } from "../../../../store/Home/selectors";
import {
  ContentContainer,
  ContentLine,
  ContentList,
  ContentText,
  ContentTitle,
  SecondContentTitle,
  ThirdContentTitle,
  ForthContentTitle,
  UnorderedList,
} from "./styled";

const Content = ({ currentSection }) => {
  const fontIncrease = useSelector(selectFontIncrease);
  return (
    <ContentContainer>
      <ContentTitle>{currentSection.name}</ContentTitle>
      {currentSection.content.map((line, index) => (
        <ContentLine key={index}>
          {typeof line === "string" ? (
            line[0] == "&" ? (
              line[1] == "1" ? (
                <SecondContentTitle
                  fontSize={25 + Number(fontIncrease) * 2 + "px"}
                >
                  {line.substring(2)}
                </SecondContentTitle>
              ) : line[1] == "2" ? (
                <ThirdContentTitle
                  fontSize={20 + Number(fontIncrease) * 2 + "px"}
                >
                  {line.substring(2)}
                </ThirdContentTitle>
              ) : (
                <ForthContentTitle
                  fontSize={18 + Number(fontIncrease) * 2 + "px"}
                >
                  {line.substring(2)}
                </ForthContentTitle>
              )
            ) : (
              <ContentText fontSize={15 + Number(fontIncrease) * 2 + "px"}>
                {line}
              </ContentText>
            )
          ) : (
            <UnorderedList>
              {line.map((item, i) => (
                <ContentList
                  key={i}
                  fontSize={15 + Number(fontIncrease) * 2 + "px"}
                >
                  {item}
                </ContentList>
              ))}
            </UnorderedList>
          )}
        </ContentLine>
      ))}
    </ContentContainer>
  );
};

export default Content;
