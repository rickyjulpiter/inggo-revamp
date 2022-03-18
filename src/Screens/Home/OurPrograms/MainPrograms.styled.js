import styled from 'styled-components';
import { Card, CardImg, Col } from 'react-bootstrap';
import { PrimaryColor, SecondaryColor, WhiteColor } from '../../../Assets/colorPalette';

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
  margin: 2vw 11vw 8vw 11vw;
  @media (min-width: 1024px) {
    min-height: 602px;
  }

  @media (max-width: 768px) {
    min-height: 668px;
    background-image: none;
  }
`;

export const SectionTitle = styled.h1`
  color: #34364a;
  font-weight: 700;
  font-size: 40px;
  text-align: center;
  margin-bottom: 3vw;

  @media (max-width: 768px) {
    margin-bottom: 10vw;
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

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const SectionDescription = styled.p`
  margin-top: 0.5vw;
  min-height: 10vw;
  text-align: justify;
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
    font-size: 12px;
  }
`;

export const ColStyled = styled(Col)`
  animation: fadeInUp 0.9s both 0.8s;
`;

export const CardImgStyled = styled(CardImg)`
  width: 60%;
  text-align: center;
`;

export const ImgContainer = styled.div`
  min-height: 16.5vw;
`;
