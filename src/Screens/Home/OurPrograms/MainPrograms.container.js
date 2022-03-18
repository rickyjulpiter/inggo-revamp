import React from 'react';
import { CardImg, Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import {
  ButtonMore,
  CardStyled,
  ContainerStyled,
  SectionCardSmall,
  SectionDescription,
  SectionTitle
} from './MainPrograms.styled';
import styled from 'styled-components';
import EnglishCourseBalloon from '../../../Assets/Images/english_course_baloon.png';
import ProofReadingBalloon from '../../../Assets/Images/proofreading_baloon.png';
import TranslationCourseBalloon from '../../../Assets/Images/translation_baloon.png';

const ColStyled = styled(Col)`
  animation: fadeInUp 0.9s both 0.8s;
`;

const CardImgStyled = styled(CardImg)`
  width: 60%;
  text-align: center;
`;

const ImgContainer = styled.div`
  min-height: 16.5vw;
`;

const MainPrograms = () => {
  const { t } = useTranslation();
  return (
    <ContainerStyled className="mt-5">
      <SectionTitle>{t('menuOurPrograms')}</SectionTitle>
      <Row>
        <ColStyled xl={4} md={4} sm={12}>
          <CardStyled>
            <ImgContainer>
              <CardImgStyled variant="top" src={EnglishCourseBalloon} className="mx-auto d-block" />
            </ImgContainer>

            <SectionCardSmall>{t('englishCourses')}</SectionCardSmall>
            <SectionDescription>{t('englishCoursesDescription')}</SectionDescription>
            <ButtonMore>{t('exploreMore')}</ButtonMore>
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
