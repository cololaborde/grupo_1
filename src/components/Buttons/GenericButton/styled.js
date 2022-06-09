import styled from 'styled-components';
import { COLORS } from '../../../utils/colors';

export const Wrapper = styled.div `
  height: 100%;
  width: 100%;
`;

export const Button = styled.div `
  height: 100%;
  border-radius: 30px;
  color: ${(props) => props.textColor || 'white'};
  background-color: ${(props) => props.backgroundColor || COLORS.blue};
  font-size: ${(props) => props.fontSize || '20px'};
  text-align: center;
  padding: 10px;
  margin: 10px;
  font-family: Arial;
  transition: all 0.2s;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
`;