import React from 'react';
import { useTranslation } from 'react-i18next';
import { Carousel, Row } from 'react-bootstrap';

import {
  CarouselResponsive,
  ContainerStyled,
  SectionSectionTitle,
  SectionTitle
} from './TestimonialsComponent.styled';
import MobileList from './MobileList';
import ButtonComponent from '../../../Components/Button/Button.component';
import { SecondaryColor } from '../../../Assets/colorPalette';
import {
  AkmiliaAswarini,
  AyuDewilestariNapitupulu,
  BeatrixMarendeng,
  NahlaJovial,
  PutriAyudita,
  SyahzamiPutra
} from './List/TestimonialComponentList';

const TestimonialsComponentContainer = () => {
  const { t } = useTranslation();
  return (
    <ContainerStyled>
      <SectionTitle>{t('testimonials')}</SectionTitle>
      <SectionSectionTitle className="mb-5">{t('testimonialsDescription')}</SectionSectionTitle>
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
        <ButtonComponent
          color={SecondaryColor}
          actionhref="/testimonials"
          text="Lihat Testimoni Lainnya"
        />
      </div>
    </ContainerStyled>
  );
};

export default TestimonialsComponentContainer;