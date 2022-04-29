import styled from 'styled-components';
import { CardImg } from 'react-bootstrap';
import { PrimaryColor, SecondaryColor } from '../../../../Assets/colorPalette';
import { PHONE_SIZE } from '../../../../Assets/utils';

export const CardImgStyledCustom = styled(CardImg)`
  width: 100%;
  text-align: center;

  @media (max-width: ${PHONE_SIZE}) {
    width: 50%;
  }
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
  min-height: 20vw;
  text-align: justify;

  @media (max-width: 768px) {
    font-size: 11px;
    min-height: 28vw !important;
  }

  @media (max-width: 1024px) {
    min-height: 38vw;
  }

  @media (min-width: 1200px) {
    min-height: 28vw;
  }

  @media (min-width: 1400px) {
    min-height: 17vw;
  }

  @media (min-width: 1600px) {
    min-height: 13vw;
  }
`;

export const SectionTitle = styled.h1`
  color: ${PrimaryColor};
  font-weight: 700;
  font-size: 30px;
  text-align: center;
  margin-bottom: 4vw;
  margin-top: 3vw;

  @media (max-width: 768px) {
    margin-bottom: 6vw;
  }

  @media (max-width: 450px) {
    font-size: 28px;
    margin-bottom: 3.5vw;
  }
`;

export const ButtonMore = styled.a`
  text-decoration: none;
  cursor: pointer;
  background-color: ${SecondaryColor};
  color: white;
  text-align: center;
  float: right;

  font-size: 13px;
  font-weight: 500;
  border-radius: 50px;
  letter-spacing: 1.3px;
  text-transform: uppercase;
  display: inline-block;
  padding: 11px 53px 10px;
  transition: all 0.3s linear;

  &:hover {
    color: white;
    background-color: ${PrimaryColor};
  }

  @media (max-width: 768px) {
    font-size: 12px !important;
  }

  @media (max-width: 1024px) {
    font-size: 8px;
    font-weight: bold;
    padding: 11px 16px 10px;
  }
`;
