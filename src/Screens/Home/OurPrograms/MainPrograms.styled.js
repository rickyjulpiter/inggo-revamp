import styled from 'styled-components';
import { Card, CardImg, Col } from 'react-bootstrap';
import { PrimaryColor, SecondaryColor, WhiteColor } from '../../../Assets/colorPalette';
import { PHONE_SIZE, TABLET_SIZE } from '../../../Assets/utils';

export const CardStyled = styled(Card)`
  background-color: ${WhiteColor};
  margin-bottom: 1vw;
  box-shadow: rgba(154, 64, 64, 0.08) 0 8px 24px;
  border-radius: 20px;

  border: 1px solid #f3c58e;
  padding: 40px;
  position: relative;
  transition: all 0.3s linear;
  z-index: 1;

  &:hover {
    border: 1px solid ${PrimaryColor};
    box-shadow: rgba(243, 197, 142, 0.5) 0 8px 24px;
  }
`;

export const ContainerStyled = styled.div`
  background-color: ${PrimaryColor};
  padding: 2vw 4vw 8vw 4vw;
  @media (min-width: 1024px) {
    min-height: 602px;
  }

  @media (max-width: 768px) {
    min-height: 668px;
    background-image: none;
  }
`;

export const SectionTitle = styled.h1`
  color: #ffffff;
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

export const SectionCard = styled.h3`
  margin-top: 1.4vw;
  color: ${PrimaryColor};
  font-weight: bolder;
`;

export const SectionCardSmall = styled.h3`
  color: ${PrimaryColor};
  text-align: center;
  font-size: 24px;
  font-weight: bolder;
  line-height: 32px;
  min-height: 5vw;

  @media (max-width: 768px) {
    font-size: 16px !important;
  }

  @media (max-width: 1024px) {
    font-size: 18px;
    line-height: 24px;
    min-height: 6.5vw;
  }

  @media (max-width: 1280px) {
    min-height: 8vw;
  }
`;

export const SectionDescription = styled.p`
  margin-top: 0.5vw;
  min-height: 8.4vw;
  text-align: justify;

  @media (max-width: ${PHONE_SIZE}) {
    font-size: 14px !important;
  }

  @media (min-width: ${TABLET_SIZE}) {
    font-size: 11px;
  }

  @media (min-width: 1024px) {
    font-size: 16px;
  }

  @media (min-width: 1280px) {
    min-height: 9vw;
  }
`;

export const CenterDiv = styled.div`
  text-align: center;
`;

export const ButtonMore = styled.a`
  text-decoration: none;
  cursor: pointer;
  background-color: ${SecondaryColor};
  color: white;
  text-align: center;

  font-size: 13px;
  font-weight: 500;
  border-radius: 50px;
  letter-spacing: 1.3px;
  text-transform: uppercase;
  display: inline-block;
  padding: 11px 25px 10px;
  transition: all 0.3s linear;

  &:hover {
    color: white;
    background-color: ${PrimaryColor};
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 1024px) {
    font-size: 12px;
    font-weight: bold;
    padding: 11px 20px 10px;
  }
`;

export const ColStyled = styled(Col)`
  animation: fadeInUp 0.9s both 0.8s;
`;

export const CardImgStyled = styled(CardImg)`
  width: 80%;
  text-align: center;

  @media (max-width: ${PHONE_SIZE}) {
    width: 50%;
  }
`;

export const ImgContainer = styled.div`
  min-height: 13.5vw;

  @media (max-width: 768px) {
    min-height: 12.5vw;
  }
`;
