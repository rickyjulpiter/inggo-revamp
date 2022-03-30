import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import {
  CardImgStyled,
  CardStyled,
  ColStyled,
  ImgContainer,
  SectionCardSmall,
  SectionDescription
} from '../MainPrograms.styled';
import BusinessEnglishBalloon from '../../../../Assets/Images/business_english_baloon.png';
import IELTSBalloon from '../../../../Assets/Images/ielts_baloon.png';
import AcademicBalloon from '../../../../Assets/Images/academic_baloon.png';
import GeneralEnglishBalloon from '../../../../Assets/Images/general_english_baloon.png';
import { ROUTE_BUSINESS_ENGLISH } from '../../../../Assets/utils';
import {
  CardImgStyledCustom,
  ContainerStyled,
  SectionDescriptionCustom,
  SectionTitle,
  ButtonMore
} from './EnglishCourses.styled';
import TestimonialsContainer from '../../Testimonials/Testimonials.container';
import OurClientsContainer from '../../OurClients/OurClients.container';
import ContactContainer from '../../Contact/Contact.container';

const EnglishCoursesContainer = () => {
  const { t } = useTranslation();
  return (
    <>
      <ContainerStyled className="mt-5">
        <SectionTitle>{t('englishCourses')}</SectionTitle>
        <Row>
          <ColStyled xl={6} md={6} sm={12}>
            <CardStyled>
              <Row>
                <Col xl={4} md={4} sm={4}>
                  <ImgContainer>
                    <CardImgStyledCustom src={BusinessEnglishBalloon} className="mx-auto d-block" />
                  </ImgContainer>
                </Col>
                <Col xl={8} md={8} sm={12}>
                  <SectionCardSmall>{t('businessEnglish')}</SectionCardSmall>
                  <SectionDescription>{t('businessEnglishDescription')}</SectionDescription>
                </Col>
                <ButtonMore href={ROUTE_BUSINESS_ENGLISH}>{t('exploreMore')}</ButtonMore>
              </Row>
            </CardStyled>
          </ColStyled>
          <ColStyled xl={6} md={6} sm={12}>
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
                </Col>
                <ButtonMore>{t('exploreMore')}</ButtonMore>
              </Row>
            </CardStyled>
          </ColStyled>
          <ColStyled xl={4} md={4} sm={12}>
            <CardStyled>
              <ImgContainer>
                <CardImgStyled variant="top" src={IELTSBalloon} className="mx-auto d-block" />
              </ImgContainer>
              <SectionCardSmall>{t('ielts')}</SectionCardSmall>
              <SectionDescriptionCustom>{t('ieltsDescription')}</SectionDescriptionCustom>
              <ButtonMore>{t('exploreMore')}</ButtonMore>
            </CardStyled>
          </ColStyled>
          <ColStyled xl={4} md={4} sm={12}>
            <CardStyled>
              <ImgContainer>
                <CardImgStyled variant="top" src={IELTSBalloon} className="mx-auto d-block" />
              </ImgContainer>
              <SectionCardSmall>{t('toefl')}</SectionCardSmall>
              <SectionDescriptionCustom>{t('toeflDescription')}</SectionDescriptionCustom>
              <ButtonMore>{t('exploreMore')}</ButtonMore>
            </CardStyled>
          </ColStyled>
          <ColStyled xl={4} md={4} sm={12}>
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
      <OurClientsContainer />
      <TestimonialsContainer />
      <ContactContainer />
    </>
  );
};

export default EnglishCoursesContainer;
