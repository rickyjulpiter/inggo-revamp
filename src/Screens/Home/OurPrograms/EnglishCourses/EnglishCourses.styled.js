import styled from 'styled-components';
import { CardImg } from 'react-bootstrap';
import { PrimaryColor } from '../../../../Assets/colorPalette';

export const CardImgStyledCustom = styled(CardImg)`
  width: 100%;
  text-align: center;
`;

export const ContainerStyled = styled.div`
  margin: 2vw 6vw 8vw 6vw;
  @media (min-width: 1024px) {
    min-height: 602px;
  }

  @media (max-width: 768px) {
    min-height: 668px;
    background-image: none;
  }
`;

export const SectionDescriptionCustom = styled.p`
  margin-top: 0.5vw;
  min-height: 12vw;
  text-align: justify;
`;

export const SectionTitle = styled.h1`
  color: ${PrimaryColor};
  font-weight: 700;
  font-size: 30px;
  text-align: center;
  margin-bottom: 4vw;
  margin-top: 3vw;

  @media (max-width: 768px) {
    margin-bottom: 10vw;
  }

  @media (max-width: 450px) {
    font-size: 28px;
    margin-bottom: 3.5vw;
  }
`;
