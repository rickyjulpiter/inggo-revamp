import styled from 'styled-components';
import { PrimaryColor, SecondaryColor } from '../../../Assets/colorPalette';

export const ContainerStyled = styled.div`
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

export const ContactButton = styled.a.attrs((props: { color: string }) => props)`
  text-decoration: none;
  color: #ffffff;
  background-color: ${(props) => props?.color};
  padding: 10px;
  border-radius: 8px;
  font-weight: bold;
  margin-right: 5px;
  transition: 1s;
  border: 1px solid ${(props) => props?.color};

  &:hover {
    color: #484848;
    background-color: #ffffff;
  }

  @media (max-width: 400px) {
    font-size: 14px;
  }
`;

export const IconStyled = styled.i`
  text-align: center;
  font-size: 35px;
  margin-right: 47.5%;
  margin-left: 47.5%;
  background-color: ${SecondaryColor};
  border-radius: 50%;
  padding: 10px 15px 10px 15px;
  color: white;

  @media (max-width: 400px) {
    margin-right: 40%;
    margin-left: 40%;
    font-size: 25px;
    padding: 15px 15px 10px 15px;
  }
`;
