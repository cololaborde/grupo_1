import styled from "styled-components";

export const SpinbuttonInput = styled.input`
  font-size: ${(props) => props.fontSize || "20px"};
  &:focus {
    border: 2px solid black;
    outline-style: solid;
    outline-color: white;
    outline-width: medium;
  }
`;
