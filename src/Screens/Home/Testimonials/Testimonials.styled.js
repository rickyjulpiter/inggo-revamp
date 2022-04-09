import styled from 'styled-components';
import { PrimaryColor, SecondaryColor } from '../../../Assets/colorPalette';
import { Card } from 'react-bootstrap';

export const SectionTitle = styled.h3`
  color: ${SecondaryColor};
  font-weight: 700;
  text-align: center;
  margin-top: 5vw;
`;

export const SectionSectionTitle = styled.h1`
  text-align: center;
  color: ${PrimaryColor};
  font-weight: bolder;
`;

export const ContainerStyled = styled.div`
  padding: 2vw 11vw 8vw 11vw;
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
`;

export const CardTestimonials = styled(Card)`
  padding: 2vw 2vw 1vw 2vw;
  transition: all 0.3s linear;
  margin-top: 3.3vw;
  background: linear-gradient(130.2deg, rgb(41, 60, 119) -2.91%, rgb(54, 119, 217) 119.44%);
  border: 0.5px solid #2d84b3;
  box-shadow: 6px 6px 0 rgb(45 132 179 / 25%);
  border-radius: 10px;

  min-height: 10vw;

  &:hover {
    box-shadow: rgb(139, 171, 250) 0 8px 24px;
  }

  @media (max-width: 425px) {
    padding: 5vw;
    margin-top: 7vw;
  }
`;

export const TestimonialsDescription = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  color: #ffffff;
  margin-top: 1vw;

  @media (max-width: 1024px) {
    font-size: 12px;
  }

  @media (max-width: 425px) {
    font-size: 12px;
  }
`;

export const LineStyled = styled.hr`
  margin-top: 0;
  margin-bottom: 0.7vw;
  color: #ffffff;
  font-weight: 800;

  @media (max-width: 425px) {
    margin-bottom: 2vw;
  }
`;

export const TestimonialsPerson = styled.p`
  padding: 2px;
  border-radius: 8px;
  text-align: right;
  margin-bottom: 0;
`;

export const AvatarImg = styled.img`
  width: 20%;
`;

export const PersonStyled = styled.span`
  color: #ffffff;
  font-weight: 600;

  @media (max-width: 425px) {
    font-size: 12px;
  }
`;

export const SourceStyled = styled.p`
  color: #ffffff;
`;

export const ImgStyled = styled.img`
  width: 75px;
  height: 75px;
  position: absolute !important;
  z-index: 1;
  outline: none !important;
  border-style: none;
  display: flex;
  justify-content: center;
  border-radius: 80px;

  @media (max-width: 1024px) {
    width: 50px;
  }

  @media (max-width: 425px) {
    width: 50px;
  }
`;

export const CenterDiv = styled.div`
  margin: auto;
  width: 20%;
`;
