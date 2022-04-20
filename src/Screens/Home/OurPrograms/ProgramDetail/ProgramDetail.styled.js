import styled from 'styled-components';
import { PrimaryColor } from '../../../../Assets/colorPalette';
import { Row } from 'react-bootstrap';

export const ContainerStyled = styled.div`
  //padding: 1vw 5vw 8vw 5vw;
  @media (min-width: 1024px) {
    min-height: 602px;
  }

  @media (max-width: 768px) {
    min-height: 668px;
    background-image: none;
  }

  @media (max-width: 425px) {
    min-height: 400px;
    background-image: none;
  }

  &:hover {
    .t_four {
      top: 90px;
    }

    .t_two {
      right: 180px;
      bottom: 185px;
    }

    .t_first {
      left: 50px;
      top: 275px;
    }
  }
`;

export const ImgStyled = styled.img`
  border-radius: 27%;
`;

export const ProgramTitle = styled.h1`
  color: ${PrimaryColor};
  font-weight: bolder;
`;

export const ProgramDescription = styled.p`
  line-height: 1.6em;
  text-align: justify;
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

export const H5 = styled.h5`
  font-weight: bold;
  font-size: 16px;
  color: ${PrimaryColor};
`;

export const ImgBanner = styled.img`
  display: block;
  width: 100% !important;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 3vw;
`;

export const RowContainer = styled(Row)`
  padding-right: 2vw;
  padding-left: 2vw;
`;
