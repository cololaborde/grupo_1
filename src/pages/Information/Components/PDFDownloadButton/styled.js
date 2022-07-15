import styled from "styled-components";

export const ButtonContainer = styled.div`
  pointer-events: ${(props) => (props.disabled ? "none" : "")};
`;
