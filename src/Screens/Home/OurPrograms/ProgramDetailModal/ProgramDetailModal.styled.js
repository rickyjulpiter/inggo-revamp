import styled from 'styled-components';
import { PrimaryColor } from '../../../../Assets/colorPalette';

export const ContainerStyled = styled.div`
  padding: 1vw;
`;

export const ImgStyled = styled.img`
  border-radius: 27%;
  //border: 1px solid ${PrimaryColor};
`;

export const ProgramTitle = styled.h1`
  color: ${PrimaryColor};
  font-weight: bolder;
`;

export const ProgramDescription = styled.p`
  line-height: 1.6em;
`;

export const ULStyled = styled.ul`
  line-height: 1.8em;
`;

export const LiStyled = styled.li`
  &:before {
    content: '\\f00c';
    font-family: FontAwesome;
    display: inline-block;
    margin-left: -1.3em;
    width: 1.3em;
    color: ${PrimaryColor};
  }
`;
