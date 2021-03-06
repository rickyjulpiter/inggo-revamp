import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { PrimaryColor, SecondaryColor } from '../../Assets/colorPalette';
import {
  CustomMarginToParent,
  FloatingImage,
  WelcomeContainer,
  WelcomeHeading,
  WelcomeSection
} from './Home.styled';
import MainPrograms from './OurPrograms/MainPrograms.container';
import TestimonialsComponentContainer from './TestimonialsComponent/TestimonialsComponent.container';
import OurClientsContainer from './OurClients/OurClients.container';
import Playfull1 from '../../Assets/Images/playfull/playfull1.png';
import Playfull2 from '../../Assets/Images/playfull/playfull2.png';
import Playfull3 from '../../Assets/Images/playfull/playfull3.png';
import ContactContainer from './Contact/Contact.container';
import { ROUTE_FREE_TRIAL } from '../../Assets/utils';
import ButtonComponent from '../../Components/Button/Button.component';
import WhyChooseUsContainer from './WhyChooseUs/WhyChooseUs.container';

const HomeContainer = () => {
  const { t } = useTranslation();
  return (
    <>
      <WelcomeContainer>
        <Container>
          <WelcomeSection>
            <Row className="pt-5 mb-3">
              <Col xl={12} md={12} sm={12}>
                <CustomMarginToParent>
                  <div className="t_four p_absoulte">
                    <FloatingImage data-depth="0.30" src={Playfull3} alt="" />
                  </div>
                  <div className="t_two p_absoulte">
                    <FloatingImage data-depth="0.30" src={Playfull2} alt="" />
                  </div>
                  <div className="t_first p_absoulte">
                    <FloatingImage data-depth="0.30" src={Playfull1} alt="" />
                  </div>

                  <WelcomeHeading
                    className="slideUp mt-5"
                    dangerouslySetInnerHTML={{ __html: t('welcomeTitle') }}
                  />
                  <div className="d-flex justify-content-center mt-5 slideUp">
                    <ButtonComponent
                      color={PrimaryColor}
                      text={t('freeTrial')}
                      actionhref={ROUTE_FREE_TRIAL}
                    />
                    <ButtonComponent
                      color={SecondaryColor}
                      text={t('contactUs')}
                      actionhref="https://api.whatsapp.com/send?phone=6285772900593"
                      target="_blank"
                    />
                  </div>
                </CustomMarginToParent>
              </Col>
            </Row>
            <WhyChooseUsContainer />
          </WelcomeSection>
        </Container>
      </WelcomeContainer>
      <MainPrograms />
      <TestimonialsComponentContainer />
      <OurClientsContainer />
      <ContactContainer />
    </>
  );
};

export default HomeContainer;
