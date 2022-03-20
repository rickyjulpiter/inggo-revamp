import React from 'react';
import { Row } from 'react-bootstrap';
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
import ProofReadingBalloon from '../../../Assets/Images/proofreading_baloon.png';
import TranslationCourseBalloon from '../../../Assets/Images/translation_baloon.png';
import { ROUTE_ENGLISH_COURSES } from '../../../Assets/utils';

const MainPrograms = () => {
  const { t } = useTranslation();
  return (
    <ContainerStyled>
      <SectionTitle>{t('menuOurPrograms')}</SectionTitle>
      <Row>
        <ColStyled xl={4} md={4} sm={12}>
          <CardStyled>
            <ImgContainer>
              <CardImgStyled variant="top" src={EnglishCourseBalloon} className="mx-auto d-block" />
            </ImgContainer>
            <SectionCardSmall>{t('englishCourses')}</SectionCardSmall>
            <SectionDescription>{t('englishCoursesDescription')}</SectionDescription>
            <ButtonMore href={ROUTE_ENGLISH_COURSES}>{t('exploreMore')}</ButtonMore>
          </CardStyled>
        </ColStyled>
        <ColStyled xl={4} md={4} sm={12}>
          <CardStyled>
            <ImgContainer>
              <CardImgStyled
                variant="top"
                src={TranslationCourseBalloon}
                className="mx-auto d-block"
              />
            </ImgContainer>
            <SectionCardSmall>{t('translationServices')}</SectionCardSmall>
            <SectionDescription>{t('translationServicesDescription')}</SectionDescription>
            <ButtonMore>{t('exploreMore')}</ButtonMore>
          </CardStyled>
        </ColStyled>
        <ColStyled xl={4} md={4} sm={12}>
          <CardStyled>
            <ImgContainer>
              <CardImgStyled variant="top" src={ProofReadingBalloon} className="mx-auto d-block" />
            </ImgContainer>
            <SectionCardSmall>{t('proofReadingServices')}</SectionCardSmall>
            <SectionDescription>{t('proofReadingDescription')}</SectionDescription>
            <ButtonMore>{t('exploreMore')}</ButtonMore>
          </CardStyled>
        </ColStyled>
      </Row>
    </ContainerStyled>
  );
};

export default MainPrograms;
