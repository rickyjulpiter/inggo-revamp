import { Carousel, Col, Row } from 'react-bootstrap';
import { ExampleCardPerson } from './Testimonials.component';
import React from 'react';
import styled from 'styled-components';

const MobileResponsive = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileList = () => {
  return (
    <MobileResponsive>
      <Carousel fade variant="dark">
        <Carousel.Item interval={1000}>
          <Row>
            <Col md={4} xl={4} className="mb-4">
              <ExampleCardPerson />
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <Row>
            <Col md={4} xl={4} className="mb-4">
              <ExampleCardPerson />
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </MobileResponsive>
  );
};

export default MobileList;
