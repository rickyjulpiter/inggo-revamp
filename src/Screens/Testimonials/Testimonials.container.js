import React from 'react';
import { useTranslation } from 'react-i18next';

import {
  CarouselResponsive,
  ContainerStyled,
  SectionSectionTitle,
  SectionTitle
} from '../Home/TestimonialsComponent/TestimonialsComponent.styled';
import { Carousel, Row } from 'react-bootstrap';
import {
  AkmiliaAswarini,
  AyuDewilestariNapitupulu,
  BeatrixMarendeng,
  FachriAkbar,
  FandiAfianataDarmawan,
  MuhammadHafizhAsad,
  NahlaJovial,
  PutriAyudita,
  RifkaCharmelita,
  SyahzamiPutra
} from '../Home/TestimonialsComponent/List/TestimonialComponentList';

const TestimonialsContainer = () => {
  const { t } = useTranslation();

  return (
    <ContainerStyled>
      <SectionTitle>{t('testimonials')}</SectionTitle>
      <SectionSectionTitle className="mb-5">A Word From Our Customer</SectionSectionTitle>
      <CarouselResponsive fade variant="dark">
        <Carousel.Item interval={2000}>
          <Row>
            <PutriAyudita />
            <NahlaJovial />
            <BeatrixMarendeng />
          </Row>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <Row>
            <SyahzamiPutra />
            <AkmiliaAswarini />
            <AyuDewilestariNapitupulu />
          </Row>
        </Carousel.Item>
      </CarouselResponsive>
      <hr />
      <CarouselResponsive fade variant="dark">
        <Carousel.Item interval={2000}>
          <Row>
            <FachriAkbar />
            <FandiAfianataDarmawan />
            <MuhammadHafizhAsad />
          </Row>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <Row>
            <RifkaCharmelita />
          </Row>
        </Carousel.Item>
      </CarouselResponsive>
    </ContainerStyled>
  );
};

export default TestimonialsContainer;
