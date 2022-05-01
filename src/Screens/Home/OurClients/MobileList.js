import React from 'react';
import { Carousel } from 'react-bootstrap';
import {
  ClientEcody,
  ClientPusaka,
  ClientReynolds,
  ClientSeedScholarship,
  ClientYayasanMataAirBiru
} from '../../../Assets/Images/client';
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
        <OurClientsComponent images={ClientYayasanMataAirBiru} />
      </Carousel.Item>
      <Carousel.Item>
        <OurClientsComponent images={ClientPusaka} />
      </Carousel.Item>
      <Carousel.Item>
        <OurClientsComponent images={ClientReynolds} />
      </Carousel.Item>
      <Carousel.Item>
        <OurClientsComponent images={ClientSeedScholarship} />
      </Carousel.Item>
      <Carousel.Item>
        <OurClientsComponent images={ClientEcody} />
      </Carousel.Item>
    </MobileResponsive>
  );
};

export default MobileList;
