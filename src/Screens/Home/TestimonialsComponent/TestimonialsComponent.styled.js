import styled from 'styled-components';
import { PrimaryColor, SecondaryColor } from '../../../Assets/colorPalette';
import { Card, Carousel } from 'react-bootstrap';
import BannerHomeTransparent from '../../../Assets/Images/bannerhome-transparent.png';

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
  background-image: url(${BannerHomeTransparent});
  background-repeat: no-repeat;
  background-size: 60%;
  background-position: right 0 top 0;
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

export const ContainerStyledMain = styled.div`
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
  @media (min-width: 1400px) {
    min-height: 5vw;
  }
`;

export const CardTestimonialsBlue = styled(Card)`
  padding: 2vw 2vw 1vw 2vw;
  transition: all 0.3s linear;
  margin-top: 3.3vw;
  border: 0.5px solid #2d84b3;
  box-shadow: 6px 6px 0 rgb(45 132 179 / 25%);
  border-radius: 10px;
  min-height: 10vw;

  @media (max-width: 425px) {
    padding: 5vw;
    margin-top: 7vw;
  }
  @media (min-width: 1400px) {
    min-height: 5vw;
  }
`;

export const TestimonialsDescription = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  color: #ffffff;
  margin-top: 1vw;
  min-height: 30vw;

  @media (max-width: 1024px) {
    font-size: 12px;
  }

  @media (max-width: 425px) {
    font-size: 12px;
  }

  @media (min-width: 1400px) {
    min-height: 28vw;
  }

  @media (min-width: 1600px) {
    min-height: 15vw;
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
  min-height: 9.8vw;

  @media (min-width: 1600px) {
    min-height: 7vw;
  }
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
  font-size: 13px;
`;

export const ImgStyled = styled.img`
  width: 75px;
  height: 75px;
  object-fit: cover;
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
    height: 50px;
    width: 50px;
    display: none;
  }
`;

export const CenterDiv = styled.div`
  margin: auto;
  width: 20%;
`;

export const CarouselResponsive = styled(Carousel)`
  padding: 0.5vw;
  min-height: 45vw;
  @media (max-width: 425px) {
    display: none;
  }
  @media (min-width: 1400px) {
    min-height: 20vw;
  }
`;
