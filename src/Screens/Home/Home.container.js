import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import { PrimaryColor, SecondaryColor } from '../../Assets/colorPalette';
import {
  ButtonPrimaryComponent,
  WelcomeContainer,
  WelcomeDescription,
  WelcomeHeading,
  WelcomeSection
} from './Home.styled';

import { useTranslation } from 'react-i18next';
import MainPrograms from './OurPrograms/MainPrograms.container';
import TestimonialsContainer from './Testimonials/Testimonials.container';
import styled from 'styled-components';
import OurClientsContainer from './OurClients/OurClients.container';

const CustomMarginToParent = styled.div`
  margin-top: 3rem !important;
  margin-right: 4rem;
  margin-left: 4rem;

  @media (max-width: 768px) {
    margin-top: 0.2rem !important;
  }

  @media (max-width: 450px) {
    margin-right: 1rem;
    margin-left: 1rem;
  }
`;

const FloatingImage = styled.img`
  position: absolute;
  display: block;
  left: 0;
  top: 0;
  transform: translate3d(-2.17813px, 0px, 0px);
  transform-style: preserve-3d;
  backface-visibility: hidden;
`;

const HomeContainer = () => {
  const { t } = useTranslation();
  return (
    <>
      <WelcomeContainer>
        <Container>
          <WelcomeSection>
            <Row className="mt-5 mb-3">
              <Col xl={12} md={12} sm={12}>
                <CustomMarginToParent>
                  <div className="t_four p_absoulte">
                    <FloatingImage
                      className="layer layer2"
                      data-depth="0.30"
                      src="http://inggo.co/img/home_one/triangle_shap_three.png"
                      alt=""
                    />
                  </div>
                  <div className="t_two p_absoulte">
                    <FloatingImage
                      className="layer layer2"
                      data-depth="0.30"
                      src="http://inggo.co/img/home_one/triangle_shap_two.png"
                      alt=""
                    />
                  </div>

                  <div className="t_first p_absoulte">
                    <FloatingImage
                      className="layer layer2"
                      data-depth="0.30"
                      src="http://inggo.co/img/home_one/t_angle.png"
                      alt=""
                    />
                  </div>

                  <WelcomeHeading>{t('welcome')}</WelcomeHeading>
                  <WelcomeDescription>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex
                    sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis
                    convallis.
                  </WelcomeDescription>
                  <div className="d-flex justify-content-center mt-5">
                    <ButtonPrimaryComponent color={PrimaryColor}>
                      {t('freeTrial')}
                    </ButtonPrimaryComponent>
                    <ButtonPrimaryComponent color={SecondaryColor}>
                      {t('contactUs')}
                    </ButtonPrimaryComponent>
                  </div>
                </CustomMarginToParent>
              </Col>
            </Row>
          </WelcomeSection>
        </Container>
      </WelcomeContainer>
      <MainPrograms />
      <TestimonialsContainer />
      <OurClientsContainer />
    </>
  );
};

export default HomeContainer;
