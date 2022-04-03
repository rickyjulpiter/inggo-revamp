import styled from 'styled-components';
import { PrimaryColor, SecondaryColor } from '../../../Assets/colorPalette';
import BannerHomeTransparent from '../../../Assets/Images/bannerhome-transparent-copy.png';

export const ContainerStyled = styled.div`
  background-color: white;
  background-image: url(${BannerHomeTransparent});
  background-repeat: no-repeat;
  background-size: contain;
  padding: 2vw 11vw 8vw 11vw;
  @media (min-width: 1024px) {
    min-height: 302px;
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

export const SectionTitle = styled.h1`
  color: ${PrimaryColor};
  font-weight: 700;
  text-align: center;
  margin-top: 1vw;
  margin-bottom: 1vw;

  @media (max-width: 400px) {
    font-size: 24px;
    margin-top: 5vw;
  }
`;

export const SectionParagraph = styled.h5`
  color: grey;
  font-weight: 600;
  text-align: center;

  @media (max-width: 400px) {
    font-size: 17px;
    margin-top: 5vw;
  }
`;

export const CenterDiv = styled.div`
  text-align: center;
  margin-top: 7vw;

  @media (max-width: 400px) {
    margin-top: 15vw;
  }
`;

export const IconStyled = styled.i`
  text-align: center;
  font-size: 35px;
  margin-right: 47.5%;
  margin-left: 47.5%;
  //background-color: ${SecondaryColor};
  border-radius: 50%;
  padding: 14px 15px 9px 15px;
  color: ${SecondaryColor};

  @media (max-width: 400px) {
    margin-right: 40%;
    margin-left: 40%;
    font-size: 25px;
    padding: 15px 15px 10px 15px;
  }
`;
