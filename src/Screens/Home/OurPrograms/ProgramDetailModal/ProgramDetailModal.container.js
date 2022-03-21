import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import BusinessEnglishDetail from '../../../../Assets/Images/business_english_detail.png';
import {
  ContainerStyled,
  ImgStyled,
  LiStyled,
  ProgramDescription,
  ProgramTitle,
  ULStyled
} from './ProgramDetailModal.styled';

const ProgramDetailModalContainer = () => {
  const { t } = useTranslation();

  return (
    <ContainerStyled>
      <Row>
        <Col xl={4} md={4} sm={0} className="mb-3">
          <ImgStyled src={BusinessEnglishDetail} className="img-fluid" alt="img" />
        </Col>
        <Col xl={8} md={8} sm={12}>
          <ProgramTitle>{t('businessEnglish')}</ProgramTitle>
          <ProgramDescription>{t('businessEnglishDescription')}</ProgramDescription>
          <ULStyled>
            <LiStyled>{t('BAFirstList')}</LiStyled>
            <LiStyled>{t('BASecondList')}</LiStyled>
            <LiStyled>{t('BAThirdList')}</LiStyled>
            <LiStyled>{t('BAFourthList')}</LiStyled>
            <LiStyled>{t('BAFifthList')}</LiStyled>
            <LiStyled>{t('BASixthList')}</LiStyled>
          </ULStyled>
        </Col>
      </Row>
    </ContainerStyled>
  );
};

export default ProgramDetailModalContainer;
