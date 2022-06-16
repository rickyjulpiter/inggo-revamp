import styled from 'styled-components';
import { Card } from 'react-bootstrap';

export const ContainerTest = styled.div`
  //margin: 2vh 1vw;
  min-height: 550px;
`;

export const CardTest = styled(Card)`
  border: none;
  padding: 10px;
  border-radius: 8px;
`;

export const Input = styled.input`
  display: block;
  box-sizing: border-box;
  width: 100%;
  min-height: 46px;
  padding: 10px 14px;
  color: #1a1a1a;
  font-size: 16px;
  line-height: 1.5;
  overflow-wrap: normal;
  background: #fff;
  border: 1px solid #d0d0d0;
  border-radius: 8px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;
