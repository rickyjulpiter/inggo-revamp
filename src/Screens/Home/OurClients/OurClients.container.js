import React from 'react';
import { Carousel, Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { ContainerStyled, SectionTitle } from './OurClients.styled';
import styled from 'styled-components';
import OurClientsComponent from './OurClients.component';
import MobileList from './MobileList';

const CarouselResponsive = styled(Carousel)`
  @media (max-width: 425px) {
    display: none;
  }
`;

const OurClientsContainer = () => {
  const { t } = useTranslation();

  return (
    <ContainerStyled>
      <SectionTitle className="mb-5">{t('ourClients')}</SectionTitle>
      <CarouselResponsive variant="light">
        {/*interval={3000}*/}
        <Carousel.Item>
          <Row className="mt-5">
            <Col md={2} xl={2}>
              <OurClientsComponent />
            </Col>
            <Col md={2} xl={2}>
              <OurClientsComponent />
            </Col>
            <Col md={2} xl={2}>
              <OurClientsComponent />
            </Col>
            <Col md={2} xl={2}>
              <OurClientsComponent />
            </Col>
            <Col md={2} xl={2}>
              <OurClientsComponent />
            </Col>
            <Col md={2} xl={2}>
              <OurClientsComponent />
            </Col>
          </Row>
        </Carousel.Item>
      </CarouselResponsive>
      <MobileList />
    </ContainerStyled>
  );
};

export default OurClientsContainer;
