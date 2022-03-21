import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'react-bootstrap';
import BusinessEnglishDetail from '../../../../Assets/Images/business_english_detail.png';
import { PrimaryColor } from '../../../../Assets/colorPalette';
import { useTranslation } from 'react-i18next';

const ContainerStyled = styled.div`
  margin-top: 5vw;
  padding: 2vw 5vw 8vw 5vw;
  @media (min-width: 1024px) {
    min-height: 602px;
  }

  @media (max-width: 768px) {
    min-height: 668px;
    background-image: none;
  }

  @media (max-width: 425px) {
    min-height: 400px;
    background-image: none;
  }
`;

const ImgStyled = styled.img`
  border-radius: 27%;
  //border: 1px solid ${PrimaryColor};
`;

const ProgramTitle = styled.h1`
  color: ${PrimaryColor};
  font-weight: bolder;
`;

const ProgramDescription = styled.p`
  line-height: 1.6em;
`;

const ULStyled = styled.ul`
  line-height: 1.8em;
`;

const LiStyled = styled.li`
  &:before {
    content: '\\f00c'; /* FontAwesome Unicode */
    font-family: FontAwesome;
    display: inline-block;
    margin-left: -1.3em; /* same as padding-left set on li */
    width: 1.3em; /* same as padding-left set on li */
    color: ${PrimaryColor};
  }
`;

const ProgramDetailContainer = () => {
  const { t } = useTranslation();

  return (
    <ContainerStyled>
      <Row>
        <Col xl={4} md={4} sm={0}>
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

export default ProgramDetailContainer;
