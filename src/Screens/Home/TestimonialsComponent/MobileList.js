import { Carousel, Col, Row } from 'react-bootstrap';
import React from 'react';
import styled from 'styled-components';
import {
  AnnisaSriBaskara,
  BeatrixMarendeng,
  MutiaSekarDini,
  NahlaJovial,
  ThantowySyamsuddin
} from './List/TestimonialComponentList';

const MobileResponsive = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileList = () => {
  return (
    <MobileResponsive>
      <Carousel fade variant="dark">
        <Carousel.Item interval={5000}>
          <Row>
            <Col md={4} xl={4} className="mb-4">
              <NahlaJovial />
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <Row>
            <Col md={4} xl={4} className="mb-4">
              <BeatrixMarendeng />
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <Row>
            <Col md={4} xl={4} className="mb-4">
              <AnnisaSriBaskara />
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <Row>
            <Col md={4} xl={4} className="mb-4">
              <ThantowySyamsuddin />
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <Row>
            <Col md={4} xl={4} className="mb-4">
              <MutiaSekarDini />
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </MobileResponsive>
  );
};

export default MobileList;
