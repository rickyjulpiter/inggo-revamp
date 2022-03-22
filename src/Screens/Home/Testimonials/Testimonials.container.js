/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Carousel, Col, Row } from 'react-bootstrap';
import { ContainerStyled, SectionSectionTitle, SectionTitle } from './Testimonials.styled';
import { ExampleCardPerson } from './Testimonials.component';
import MobileList from './MobileList';
import styled from 'styled-components';
import ButtonComponent from '../../../Components/Button/Button.component';
import { SecondaryColor } from '../../../Assets/colorPalette';

const CarouselResponsive = styled(Carousel)`
  @media (max-width: 425px) {
    display: none;
  }
`;

const TestimonialsContainer = () => {
  const { t } = useTranslation();
  return (
    <ContainerStyled>
      <SectionTitle>{t('testimonials')}</SectionTitle>
      <SectionSectionTitle className="mb-5">A Word From Our Customer</SectionSectionTitle>
      <CarouselResponsive fade variant="dark">
        <Carousel.Item interval={1000}>
          <Row>
            <Col md={4} xl={4} className="mb-4">
              <ExampleCardPerson />
            </Col>
            <Col md={4} xl={4} className="mb-4">
              <ExampleCardPerson />
            </Col>
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
            <Col md={4} xl={4} className="mb-4">
              <ExampleCardPerson />
            </Col>
            <Col md={4} xl={4} className="mb-4">
              <ExampleCardPerson />
            </Col>
          </Row>
        </Carousel.Item>
      </CarouselResponsive>
      <MobileList />
      <div className="text-center mt-5">
        <ButtonComponent color={SecondaryColor} actionhref="#" text="Lihat Testimoni Lainnya" />
      </div>
    </ContainerStyled>
  );
};

export default TestimonialsContainer;
