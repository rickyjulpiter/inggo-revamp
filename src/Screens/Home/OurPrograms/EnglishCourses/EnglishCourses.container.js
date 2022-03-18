import React from 'react';
import { CardImg, Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import {
  ButtonMore,
  CardImgStyled,
  CardStyled,
  ColStyled,
  ImgContainer,
  SectionCardSmall,
  SectionDescription,
  SectionTitle
} from '../MainPrograms.styled';
import BusinessEnglishBalloon from '../../../../Assets/Images/business_english_baloon.png';
import IELTSBalloon from '../../../../Assets/Images/ielts_baloon.png';
import AcademicBalloon from '../../../../Assets/Images/academic_baloon.png';
import GeneralEnglishBalloon from '../../../../Assets/Images/general_english_baloon.png';
import { ROUTE_ENGLISH_COURSES } from '../../../../Assets/utils';
import styled from 'styled-components';

const CardImgStyledCustom = styled(CardImg)`
  width: 100%;
  text-align: center;
`;

const ContainerStyled = styled.div`
  margin: 2vw 6vw 8vw 6vw;
  @media (min-width: 1024px) {
    min-height: 602px;
  }

  @media (max-width: 768px) {
    min-height: 668px;
    background-image: none;
  }
`;

const SectionDescriptionCustom = styled.p`
  margin-top: 0.5vw;
  min-height: 12vw;
  text-align: justify;
`;

const EnglishCoursesContainer = () => {
  const { t } = useTranslation();
  return (
    <ContainerStyled className="mt-5">
      <SectionTitle>{t('englishCourses')}</SectionTitle>
      <Row>
        <ColStyled xl={6} md={12} sm={12}>
          <CardStyled>
            <Row>
              <Col xl={4} md={4} sm={4}>
                <ImgContainer>
                  <CardImgStyledCustom src={BusinessEnglishBalloon} className="mx-auto d-block" />
                </ImgContainer>
              </Col>
              <Col xl={8} md={8} sm={8}>
                <SectionCardSmall>{t('businessEnglish')}</SectionCardSmall>
                <SectionDescription>{t('businessEnglishDescription')}</SectionDescription>
                <ButtonMore href={ROUTE_ENGLISH_COURSES}>{t('exploreMore')}</ButtonMore>
              </Col>
            </Row>
          </CardStyled>
        </ColStyled>
        <ColStyled xl={6} md={12} sm={12}>
          <CardStyled>
            <Row>
              <Col xl={4} md={4} sm={4}>
                <ImgContainer>
                  <CardImgStyledCustom src={AcademicBalloon} className="mx-auto d-block" />
                </ImgContainer>
              </Col>
              <Col xl={8} md={8} sm={8}>
                <SectionCardSmall>{t('academicWriting')}</SectionCardSmall>
                <SectionDescription>{t('academicWritingDescription')}</SectionDescription>
                <ButtonMore>{t('exploreMore')}</ButtonMore>
              </Col>
            </Row>
          </CardStyled>
        </ColStyled>
        <ColStyled xl={4} md={12} sm={12}>
          <CardStyled>
            <ImgContainer>
              <CardImgStyled variant="top" src={IELTSBalloon} className="mx-auto d-block" />
            </ImgContainer>
            <SectionCardSmall>{t('ielts')}</SectionCardSmall>
            <SectionDescriptionCustom>{t('ieltsDescription')}</SectionDescriptionCustom>
            <ButtonMore>{t('exploreMore')}</ButtonMore>
          </CardStyled>
        </ColStyled>
        <ColStyled xl={4} md={12} sm={12}>
          <CardStyled>
            <ImgContainer>
              <CardImgStyled variant="top" src={IELTSBalloon} className="mx-auto d-block" />
            </ImgContainer>
            <SectionCardSmall>{t('toefl')}</SectionCardSmall>
            <SectionDescriptionCustom>{t('toeflDescription')}</SectionDescriptionCustom>
            <ButtonMore>{t('exploreMore')}</ButtonMore>
          </CardStyled>
        </ColStyled>
        <ColStyled xl={4} md={12} sm={12}>
          <CardStyled>
            <ImgContainer>
              <CardImgStyled
                variant="top"
                src={GeneralEnglishBalloon}
                className="mx-auto d-block"
              />
            </ImgContainer>
            <SectionCardSmall>{t('generalEnglish')}</SectionCardSmall>
            <SectionDescriptionCustom>{t('generalEnglishDescription')}</SectionDescriptionCustom>
            <ButtonMore>{t('exploreMore')}</ButtonMore>
          </CardStyled>
        </ColStyled>
      </Row>
    </ContainerStyled>
  );
};

export default EnglishCoursesContainer;
