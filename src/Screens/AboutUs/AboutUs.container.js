import React from 'react';
import { FloatingImage } from '../Home/Home.styled';
import Playfull3 from '../../Assets/Images/playfull/playfull3.png';
import Playfull2 from '../../Assets/Images/playfull/playfull2.png';
import Playfull1 from '../../Assets/Images/playfull/playfull1.png';
import { ContainerStyled, Paragraph, Title } from './AboutUs.styled';
import { useTranslation } from 'react-i18next';
import { Col, Row } from 'react-bootstrap';

const AboutUsContainer = () => {
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

      <Row className="slideDown">
        <Col xl={4} md={4} sm={0}>
          <img
            src="https://www.english-academy.id/hubfs/English%20Academy/About%20Us/mt-about-ea.png"
            alt="img"
          />
        </Col>
        <Col xl={8} md={8} sm={12}>
          <Title>{t('menuAboutUs')} Inggo</Title>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae
            pellentesque sem placerat. Lorem ipsum dolor sit amet consectetur adipiscing elit.
            Quisque faucibus ex sapien vitae pellentesque sem placerat. Lorem ipsum dolor sit amet
            consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae
            pellentesque sem placerat. Lorem ipsum dolor sit amet consectetur adipiscing elit.
            Quisque faucibus ex sapien vitae pellentesque sem placerat. Lorem ipsum dolor sit amet
            consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae
            pellentesque sem placerat. Lorem ipsum dolor sit amet consectetur adipiscing elit.
            Quisque faucibus ex sapien vitae pellentesque sem placerat. Lorem ipsum dolor sit amet
            consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.
          </Paragraph>
        </Col>
      </Row>
    </ContainerStyled>
  );
};

export default AboutUsContainer;
