import React from 'react';
import { Card, CardImg, Col, Row } from 'react-bootstrap';
import styled from 'styled-components';

import { PrimaryColor, SecondaryColor, WhiteColor } from '../../../Assets/colorPalette';
import BusinessEnglishBalloon from '../../../Assets/Images/business_english_baloon.png';
import AcademicWritingBalloon from '../../../Assets/Images/academic_baloon.png';
import IELTSBalloon from '../../../Assets/Images/ielts_baloon.png';
import GeneralEnglishBalloon from '../../../Assets/Images/general_english_baloon.png';

const CardStyled = styled(Card)`
  background-color: ${WhiteColor};
  border: none;
  padding: 1vw;
  margin-bottom: 1vw;
  box-shadow: rgba(154, 64, 64, 0.08) 0px 8px 24px;
  border-radius: 20px;
`;

const ContainerStyled = styled.div`
  margin-bottom: 8vw;
  @media (min-width: 1024px) {
    min-height: 602px;
  }

  @media (max-width: 768px) {
    min-height: 668px;
    background-image: none;
  }
`;

const SectionTitle = styled.h1`
  color: #34364a;
  font-weight: 700;
  font-size: 40px;
  text-align: center;
  margin-top: 2vw;
  margin-bottom: 3vw;
`;

const SectionCard = styled.h3`
  margin-top: 1.4vw;
  color: ${PrimaryColor};
  font-weight: bolder;
`;

const SectionCardSmall = styled.h3`
  color: ${PrimaryColor};
  font-weight: bolder;
`;

const SectionDescription = styled.p`
  margin-top: 0.5vw;
  min-height: 8.5vw;
`;

const ButtonMore = styled.a`
  text-decoration: none;
  cursor: pointer;
  background-color: ${SecondaryColor};
  padding: 0.5vw;
  border-radius: 8px;
  color: white;
  text-align: right;

  &:hover {
    color: white;
    background-color: ${PrimaryColor};
  }
`;

const OurProgramsContainer = () => {
  return (
    <ContainerStyled className="mt-5">
      <SectionTitle>Our Programs</SectionTitle>
      <Row>
        <Col xl={6} md={6} sm={12}>
          <CardStyled>
            <Row>
              <Col xl={4} md={4} sm={4}>
                <CardImg src={BusinessEnglishBalloon} />
              </Col>
              <Col xl={8} md={8} sm={8}>
                <SectionCard> Business English</SectionCard>
                <SectionDescription className="mb-4">
                  Bored of the same old Business English modules? Our materials have been designed
                  to help you communicate in a formal business context. Come and learn with us!
                </SectionDescription>
                <ButtonMore>
                  Explore More{'  '} <i className="bi-arrow-right-circle-fill fa-fw" />
                </ButtonMore>
              </Col>
            </Row>
          </CardStyled>
        </Col>
        <Col xl={6} md={6} sm={12}>
          <CardStyled>
            <Row>
              <Col xl={4} md={4} sm={4}>
                <CardImg src={AcademicWritingBalloon} />
              </Col>
              <Col xl={8} md={8} sm={8}>
                <SectionCard> Academic Writing</SectionCard>
                <SectionDescription className="mb-4">
                  Are you preparing for your postgraduate degree? Want to excel in academic writing,
                  so you will not feel stressed out by your assignments, thesis, or dissertation? We
                  will guide you step-by-step!
                </SectionDescription>
                <ButtonMore>
                  Explore More{'  '} <i className="bi-arrow-right-circle-fill fa-fw" />
                </ButtonMore>
              </Col>
            </Row>
          </CardStyled>
        </Col>
        <Col xl={4} md={4} sm={12}>
          <CardStyled>
            <Row>
              <Col xl={4} md={4} sm={4}>
                <CardImg src={IELTSBalloon} />
              </Col>
              <Col xl={8} md={8} sm={8}>
                <SectionCardSmall>IELTS</SectionCardSmall>
                <SectionDescription className="mb-4">
                  Dreaming of going abroad for studying or working? This is the answer for you!
                  Improve your English skills by taking IELTS classes with us!
                </SectionDescription>
                <ButtonMore>
                  Explore More{'  '} <i className="bi-arrow-right-circle-fill fa-fw" />
                </ButtonMore>
              </Col>
            </Row>
          </CardStyled>
        </Col>
        <Col xl={4} md={4} sm={12}>
          <CardStyled>
            <Row>
              <Col xl={4} md={4} sm={4}>
                <CardImg src={IELTSBalloon} />
              </Col>
              <Col xl={8} md={8} sm={8}>
                <SectionCardSmall>TOEFL</SectionCardSmall>
                <SectionDescription className="mb-4">
                  Dreaming of going abroad for studying or working? This is the answer for you!
                  Improve your English skills by taking TOEFL classes with us!
                </SectionDescription>
                <ButtonMore>
                  Explore More{'  '} <i className="bi-arrow-right-circle-fill fa-fw" />
                </ButtonMore>
              </Col>
            </Row>
          </CardStyled>
        </Col>
        <Col xl={4} md={4} sm={12}>
          <CardStyled>
            <Row>
              <Col xl={4} md={4} sm={4}>
                <CardImg src={GeneralEnglishBalloon} />
              </Col>
              <Col xl={8} md={8} sm={8}>
                <SectionCardSmall>General English</SectionCardSmall>
                <SectionDescription className="mb-4">
                  Tired of checking your dictionary every time you watch your favorite movies? Sick
                  of using body language to communicate when you are travelling?
                </SectionDescription>
                <ButtonMore>
                  Explore More{'  '} <i className="bi-arrow-right-circle-fill fa-fw" />
                </ButtonMore>
              </Col>
            </Row>
          </CardStyled>
        </Col>
      </Row>
    </ContainerStyled>
  );
};

export default OurProgramsContainer;
