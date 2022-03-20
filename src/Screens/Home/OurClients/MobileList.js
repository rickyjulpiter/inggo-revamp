import React from 'react';
import { Carousel, Col, Row } from 'react-bootstrap';
import { CardClients, ImgStyled } from './OurClients.styled';
import { ClientPusaka } from '../../../Assets/Images/client';
import OurClientsComponent from './OurClients.component';
import styled from 'styled-components';

const MobileResponsive = styled(Carousel)`
  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileList = () => {
  return (
    <MobileResponsive variant="light">
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
        </Row>
      </Carousel.Item>
      <Carousel.Item>
        <Row>
          <Col md={3} xl={3} className="mb-4">
            <OurClientsComponent />
          </Col>
        </Row>
      </Carousel.Item>
    </MobileResponsive>
  );
};

export default MobileList;
