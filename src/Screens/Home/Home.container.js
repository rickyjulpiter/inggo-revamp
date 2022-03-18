import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import { PrimaryColor, SecondaryColor } from '../../Assets/colorPalette';
import {
  ButtonPrimaryComponent,
  WelcomeContainer,
  WelcomeDescription,
  WelcomeHeading,
  WelcomeImage,
  WelcomeSection
} from './Home.styled';

import { useTranslation } from 'react-i18next';
import MainPrograms from './OurPrograms/MainPrograms.container';
import TestimonialsContainer from './Testimonials/Testimonials.container';
import styled from 'styled-components';

const CustomMarginToParent = styled.div`
  margin-top: 3rem !important;

  @media (max-width: 768px) {
    margin-top: 0.2rem !important;
  }
`;

const HomeContainer = () => {
  const { t } = useTranslation();
  return (
    <>
      <WelcomeContainer>
        <Container>
          <WelcomeSection>
            <Row className="mt-5">
              <Col xl={6} md={12} sm={12}>
                <CustomMarginToParent>
                  <WelcomeHeading>{t('welcome')}</WelcomeHeading>
                  <WelcomeDescription>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex
                    sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis
                    convallis.
                  </WelcomeDescription>
                  <div className="mt-5">
                    <ButtonPrimaryComponent color={PrimaryColor}>
                      {t('freeTrial')}
                    </ButtonPrimaryComponent>
                    <ButtonPrimaryComponent color={SecondaryColor}>
                      {t('contactUs')}
                    </ButtonPrimaryComponent>
                  </div>
                </CustomMarginToParent>
              </Col>
              <Col xl={6} md={0} sm={0}>
                <WelcomeImage
                  src="https://buildwithangga.com/storage/assets/slider/Tsgl3Kt8ZWZ4CPy18A53LZruMZW7KgIMmjXMg3JA.png"
                  className="img-fluid"
                  alt="image"
                />
              </Col>
            </Row>
          </WelcomeSection>
        </Container>
      </WelcomeContainer>
      <MainPrograms />
      <TestimonialsContainer />
    </>
  );
};

export default HomeContainer;
