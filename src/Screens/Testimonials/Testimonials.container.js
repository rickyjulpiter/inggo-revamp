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
  KathyAiraSurono,
  LodangJati,
  MuhammadHafizhAsad,
  MutiaSekarDini,
  NahlaJovial,
  PutriAyudita,
  RifkaCharmelita,
  SerlyKusumadewi,
  SitiKarinThaliaMirza,
  SyahzamiPutra,
  ThantowySyamsuddin
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
      <SectionSectionTitle className="mb-5">{t('testimonialsDescription')}</SectionSectionTitle>
      <ContainerCarousel>
        <CarouselResponsive fade variant="dark">
          <Carousel.Item interval={5000}>
            <Row>
              <PutriAyudita />
              <NahlaJovial />
              <BeatrixMarendeng />
            </Row>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <Row>
              <FachriAkbar />
              <MuhammadHafizhAsad />
              <RifkaCharmelita />
            </Row>
          </Carousel.Item>
        </CarouselResponsive>
      </ContainerCarousel>
      <hr />
      <CarouselResponsive fade variant="dark">
        <Carousel.Item interval={5000}>
          <Row>
            <SyahzamiPutra />
            <AkmiliaAswarini />
            <AyuDewilestariNapitupulu />
          </Row>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <Row>
            <SitiKarinThaliaMirza />
            <FandiAfianataDarmawan />
          </Row>
        </Carousel.Item>
      </CarouselResponsive>
      <hr />
      <CarouselResponsive fade variant="dark">
        <Carousel.Item interval={5000}>
          <Row>
            <MutiaSekarDini />
            <LodangJati />
            <ThantowySyamsuddin />
          </Row>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <Row>
            <SerlyKusumadewi />
            <KathyAiraSurono />
          </Row>
        </Carousel.Item>
      </CarouselResponsive>
    </ContainerStyled>
  );
};

export default TestimonialsContainer;
