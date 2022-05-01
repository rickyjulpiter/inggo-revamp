import { Carousel } from 'react-bootstrap';
import React from 'react';
import styled from 'styled-components';
import {
  AkmiliaAswarini,
  AnnisaSriBaskara,
  AnnisaWardhani,
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
} from './List/TestimonialComponentList';

const MobileResponsive = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileListTestimonialsScreen = () => {
  return (
    <MobileResponsive>
      <Carousel fade variant="dark">
        <Carousel.Item interval={5000}>
          <PutriAyudita />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <NahlaJovial />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <BeatrixMarendeng />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <FachriAkbar />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <MuhammadHafizhAsad />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <RifkaCharmelita />
        </Carousel.Item>
      </Carousel>

      <Carousel fade variant="dark">
        <Carousel.Item interval={5000}>
          <SyahzamiPutra />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <AkmiliaAswarini />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <AyuDewilestariNapitupulu />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <AnnisaWardhani />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <SitiKarinThaliaMirza />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <FandiAfianataDarmawan />
        </Carousel.Item>
      </Carousel>

      <Carousel fade variant="dark">
        <Carousel.Item interval={5000}>
          <MutiaSekarDini />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <LodangJati />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <ThantowySyamsuddin />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <AnnisaSriBaskara />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <SerlyKusumadewi />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <KathyAiraSurono />
        </Carousel.Item>
      </Carousel>
    </MobileResponsive>
  );
};

export default MobileListTestimonialsScreen;
