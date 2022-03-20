import React from 'react';
import { Carousel, Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { ClientPusaka } from '../../../Assets/Images/client/index';
import { CardClients, ContainerStyled, ImgStyled, SectionTitle } from './OurClients.styled';
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
              <OurClientsComponent />
            </Col>
            <Col md={3} xl={3} className="mb-4">
              <OurClientsComponent />
            </Col>
            <Col md={3} xl={3} className="mb-4">
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
