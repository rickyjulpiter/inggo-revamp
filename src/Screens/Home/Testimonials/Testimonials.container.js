import React from 'react';
import { useTranslation } from 'react-i18next';
import { Carousel, Row } from 'react-bootstrap';
import { ContainerStyled, SectionSectionTitle, SectionTitle } from './Testimonials.styled';
import MobileList from './MobileList';
import styled from 'styled-components';
import ButtonComponent from '../../../Components/Button/Button.component';
import { SecondaryColor } from '../../../Assets/colorPalette';
import {
  AkmiliaAswarini,
  AyuDewilestariNapitupulu,
  BeatrixMarendeng,
  NahlaJovial,
  PutriAyudita,
  SyahzamiPutra
} from './List/TestimonialList';

const CarouselResponsive = styled(Carousel)`
  min-height: 45vw;
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
        <Carousel.Item interval={3000}>
          <Row>
            <PutriAyudita />
            <NahlaJovial />
            <BeatrixMarendeng />
          </Row>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <Row>
            <SyahzamiPutra />
            <AkmiliaAswarini />
            <AyuDewilestariNapitupulu />
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
