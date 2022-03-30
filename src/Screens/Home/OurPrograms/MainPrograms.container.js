import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import {
  ButtonMore,
  CardImgStyled,
  CardStyled,
  ColStyled,
  ContainerStyled,
  ImgContainer,
  SectionCardSmall,
  SectionDescription,
  SectionTitle
} from './MainPrograms.styled';
import EnglishCourseBalloon from '../../../Assets/Images/english_course_baloon.png';
import TranslationCourseBalloon from '../../../Assets/Images/translation_baloon.png';
import { ROUTE_ENGLISH_COURSES } from '../../../Assets/utils';

const MainPrograms = () => {
  const { t } = useTranslation();
  return (
    <ContainerStyled>
      <SectionTitle>{t('menuOurPrograms')}</SectionTitle>
      <Row className="justify-content-center">
        <ColStyled xl={6} md={6} sm={12}>
          <CardStyled>
            <Row>
              <Col xl={5} sm={5} md={5}>
                <ImgContainer>
                  <CardImgStyled src={EnglishCourseBalloon} className="mx-auto d-block" />
                </ImgContainer>
              </Col>
              <Col>
                <SectionCardSmall>{t('englishCourses')}</SectionCardSmall>
                <SectionDescription>{t('englishCoursesDescription')}</SectionDescription>
              </Col>
              <ButtonMore href={ROUTE_ENGLISH_COURSES} className="mt-2">
                {t('exploreMore')}
              </ButtonMore>
            </Row>
          </CardStyled>
        </ColStyled>
        <ColStyled xl={6} md={6} sm={12}>
          <CardStyled>
            <Row>
              <Col xl={5} sm={5} md={5}>
                <ImgContainer>
                  <CardImgStyled src={TranslationCourseBalloon} className="mx-auto d-block" />
                </ImgContainer>
              </Col>
              <Col>
                <SectionCardSmall>
                  <span dangerouslySetInnerHTML={{ __html: t('translationServices') }} />
                </SectionCardSmall>
                <SectionDescription>{t('translationServicesDescription')}</SectionDescription>
              </Col>
              <ButtonMore className="mt-2">{t('exploreMore')}</ButtonMore>
            </Row>
          </CardStyled>
        </ColStyled>
      </Row>
    </ContainerStyled>
  );
};

export default MainPrograms;
