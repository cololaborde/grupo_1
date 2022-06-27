import styled from "styled-components";

export const CheckboxInput = styled.input`
  transform: scale(${(props) => props.scale || 1.0});
  &:focus {
    border: 2px solid black;
    outline-style: solid;
    outline-color: white;
    outline-width: medium;
  }
`;

export const Container = styled.div`
  height: 100%;
`;
