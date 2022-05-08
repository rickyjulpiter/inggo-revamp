import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Row } from 'react-bootstrap';

// import { FloatingImage } from '../Home/Home.styled';
// import Playfull3 from '../../Assets/Images/playfull/playfull3.png';
// import Playfull2 from '../../Assets/Images/playfull/playfull2.png';
// import Playfull1 from '../../Assets/Images/playfull/playfull1.png';
import { ContainerStyled, Paragraph, Title } from './AboutUs.styled';
import WhyChooseUsContainer from '../Home/WhyChooseUs/WhyChooseUs.container';
import TestimonialsComponentContainer from '../Home/TestimonialsComponent/TestimonialsComponent.container';
import OurClientsContainer from '../Home/OurClients/OurClients.container';
import ContactContainer from '../Home/Contact/Contact.container';
import TeacherContainer from '../Teacher/Teacher.container';

const AboutUsContainer = () => {
  const { t } = useTranslation();
  return (
    <>
      <ContainerStyled>
        {/*<div className="t_four p_absoulte">*/}
        {/*  <FloatingImage className="layer layer2" data-depth="0.30" src={Playfull3} alt="" />*/}
        {/*</div>*/}
        {/*<div className="t_two p_absoulte">*/}
        {/*  <FloatingImage className="layer layer2" data-depth="0.30" src={Playfull2} alt="" />*/}
        {/*</div>*/}
        {/*<div className="t_first p_absoulte">*/}
        {/*  <FloatingImage className="layer layer2" data-depth="0.30" src={Playfull1} alt="" />*/}
        {/*</div>*/}

        <Row className="slideDown">
          <Col xl={10} md={10} sm={11} className="mx-auto">
            <Title>{t('about')} INGGO</Title>
            <Paragraph>{t('aboutUsDescription')}</Paragraph>
          </Col>
        </Row>
        <TeacherContainer />
      </ContainerStyled>
      <WhyChooseUsContainer />
      <TestimonialsComponentContainer />
      <OurClientsContainer />
      <ContactContainer />
    </>
  );
};

export default AboutUsContainer;
