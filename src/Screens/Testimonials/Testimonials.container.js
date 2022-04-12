import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

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
import { FloatingImage } from '../Home/Home.styled';
import Playfull3 from '../../Assets/Images/playfull/playfull3.png';
import Playfull2 from '../../Assets/Images/playfull/playfull2.png';
import Playfull1 from '../../Assets/Images/playfull/playfull1.png';

const ContainerCarousel = styled.div`
  min-height: 48vw;
`;

const TestimonialsContainer = () => {
  const { t } = useTranslation();

  return (
    <ContainerStyled>
      <div className="t_four p_absoulte">
        <FloatingImage className="layer layer2" data-depth="0.30" src={Playfull3} alt="" />
      </div>
      <div className="t_two p_absoulte">
        <FloatingImage className="layer layer2" data-depth="0.30" src={Playfull2} alt="" />
      </div>
      <div className="t_first p_absoulte">
        <FloatingImage className="layer layer2" data-depth="0.30" src={Playfull1} alt="" />
      </div>
      <SectionTitle>{t('testimonials')}</SectionTitle>
      <SectionSectionTitle className="mb-5">A Word From Our Customer</SectionSectionTitle>
      <ContainerCarousel>
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
      </ContainerCarousel>
      <hr />
      <CarouselResponsive fade variant="dark">
        <Carousel.Item interval={200000}>
          <Row>
            <FachriAkbar />
            <FandiAfianataDarmawan />
            <MuhammadHafizhAsad />
          </Row>
        </Carousel.Item>
        <Carousel.Item interval={200000}>
          <Row>
            <RifkaCharmelita />
          </Row>
        </Carousel.Item>
      </CarouselResponsive>
    </ContainerStyled>
  );
};

export default TestimonialsContainer;
