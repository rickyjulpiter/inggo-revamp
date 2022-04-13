import styled from 'styled-components';
import { PrimaryColor } from '../../../Assets/colorPalette';
import { Card } from 'react-bootstrap';

export const ContainerStyled = styled.div`
  background-color: ${PrimaryColor};
  padding: 2vw 11vw 8vw 11vw;

  @media (min-width: 1024px) {
    min-height: 35vw;
  }

  @media (max-width: 768px) {
    min-height: 668px;
    background-image: none;
  }

  @media (max-width: 425px) {
    min-height: 350px;
  }
`;

export const CardClients = styled(Card)`
  border: none;
  background-color: ${PrimaryColor};
  min-height: 10vw;
  text-align: center;
`;

export const SectionTitle = styled.h3`
  color: #ffffff;
  font-weight: 700;
  text-align: center;
  margin-top: 5vw;
`;

export const ImgStyled = styled.img`
  //border-radius: 20px;
  //padding: 2vw;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  overflow: hidden;
`;
