/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';
import { PrimaryColor } from '../../../Assets/colorPalette';
import { Card, Carousel, Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import {
  ClientEcody,
  ClientPusaka,
  ClientReynolds,
  ClientSeedScholarship
} from '../../../Assets/Images/client/index';

const ContainerStyled = styled.div`
  background-color: ${PrimaryColor};
  padding: 2vw 11vw 8vw 11vw;

  @media (min-width: 1024px) {
    min-height: 35vw;
  }

  @media (max-width: 768px) {
    min-height: 668px;
    background-image: none;
  }
`;

const CardClients = styled(Card)`
  border: none;
  background-color: ${PrimaryColor};
  min-height: 10vw;
  text-align: center;
`;

const SectionTitle = styled.h3`
  color: #ffffff;
  font-weight: 700;
  text-align: center;
  margin-top: 5vw;
`;

const ImgStyled = styled.img`
  border-radius: 20px;
  padding: 30px;
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
  background: #fff;
  height: 160px;
`;

const OurClientsContainer = () => {
  const { t } = useTranslation();

  return (
    <ContainerStyled>
      <SectionTitle className="mb-5">{t('ourClients')}</SectionTitle>
      <Carousel variant="light">
        {/*interval={3000}*/}
        <Carousel.Item>
          <Row>
            <Col md={3} xl={3} className="mb-4">
              <CardClients>
                <ImgStyled
                  src={ClientPusaka}
                  className="img-fluid"
                  alt="client-logo"
                  style={{ background: '#cecece' }}
                />
              </CardClients>
            </Col>
            <Col md={3} xl={3} className="mb-4">
              <CardClients>
                <ImgStyled src={ClientEcody} className="img-fluid" alt="client-logo" />
              </CardClients>
            </Col>
            <Col md={3} xl={3} className="mb-4">
              <CardClients>
                <ImgStyled src={ClientReynolds} className="img-fluid" alt="client-logo" />
              </CardClients>
            </Col>
            <Col md={3} xl={3} className="mb-4">
              <CardClients>
                <ImgStyled src={ClientSeedScholarship} className="img-fluid" alt="client-logo" />
              </CardClients>
            </Col>
          </Row>
        </Carousel.Item>
        {/*<Carousel.Item>*/}
        {/*  <Row>*/}
        {/*    <Col md={3} xl={3} className="mb-4">*/}
        {/*      <CardClients>*/}
        {/*        <ImgStyled src={ClientYayasanMataAirBiru} className="img-fluid" alt="client-logo" />*/}
        {/*      </CardClients>*/}
        {/*    </Col>*/}
        {/*  </Row>*/}
        {/*</Carousel.Item>*/}
      </Carousel>
    </ContainerStyled>
  );
};

export default OurClientsContainer;
