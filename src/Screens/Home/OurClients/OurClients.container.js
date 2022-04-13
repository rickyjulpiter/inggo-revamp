import React from 'react';
import { Carousel, Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { ContainerStyled, SectionTitle } from './OurClients.styled';
import OurClientsComponent from './OurClients.component';
import MobileList from './MobileList';
import {
  ClientEcody,
  ClientPusaka,
  ClientReynolds,
  ClientSeedScholarship,
  // ClientYayasanMataAirBiru
} from '../../../Assets/Images/client';

const CarouselResponsive = styled(Carousel)`
  @media (max-width: 425px) {
    display: none;
  }
`;

const OurClientsContainer = () => {
  const { t } = useTranslation();

  const COL = 3;

  return (
    <ContainerStyled>
      <SectionTitle className="mb-5">{t('ourClients')}</SectionTitle>
      <CarouselResponsive variant="light">
        {/*interval={3000}*/}
        <Carousel.Item>
          <Row>
            <Col md={COL} xl={COL}>
              <OurClientsComponent images={ClientEcody} />
            </Col>
            <Col md={COL} xl={COL}>
              <OurClientsComponent images={ClientPusaka} />
            </Col>
            <Col md={COL} xl={COL}>
              <OurClientsComponent images={ClientReynolds} />
            </Col>
            <Col md={COL} xl={COL}>
              <OurClientsComponent images={ClientSeedScholarship} />
            </Col>
          </Row>
        </Carousel.Item>
        {/*<Carousel.Item>*/}
        {/*  <Row className="mt-5">*/}
        {/*    <Col md={COL} xl={COL}>*/}
        {/*      <OurClientsComponent images={ClientYayasanMataAirBiru} />*/}
        {/*    </Col>*/}
        {/*  </Row>*/}
        {/*</Carousel.Item>*/}
      </CarouselResponsive>
      <MobileList />
    </ContainerStyled>
  );
};

export default OurClientsContainer;
