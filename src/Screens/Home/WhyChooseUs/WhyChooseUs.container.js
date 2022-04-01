import React from 'react';
import styled from 'styled-components';
import { PrimaryColor, SecondaryColor } from '../../../Assets/colorPalette';
import { Col, Row } from 'react-bootstrap';
import { PHONE_SIZE } from '../../../Assets/utils';
import { useTranslation } from 'react-i18next';

const ContainerSection = styled.div`
  padding: 2vw 2vw;
  min-height: 35rem;
  background-color: #f5f5f5;
`;

const SectionTitle = styled.h4`
  margin-top: 2vw;
  font-weight: bolder;
  color: ${PrimaryColor};
  text-align: center;

  @media (max-width: ${PHONE_SIZE}) {
    margin-top: 14vw;
  }
`;

const SectionTitleSecond = styled.h1`
  font-weight: bolder;
  color: ${SecondaryColor};
  text-align: center;
`;

const ReasonTitle = styled.h3`
  font-weight: bold;
  color: ${PrimaryColor};
  text-align: center;
`;

const ReasonDescription = styled.p`
  text-align: center;
`;

const ColStyled = styled(Col)`
  padding: 1vw;
  border-right: 5px solid #cfd2e1;
  margin-bottom: 2rem;
  transition: all 0.8s;

  &:hover {
    border-right: 5px solid ${PrimaryColor};
  }
`;

const RowStyled = styled(Row)`
  margin-top: 5rem;
`;

const IconStyled = styled.i`
  background-color: ${PrimaryColor};
  color: #ffffff;
  border-radius: 50%;
  font-size: 50px;
  padding: 14px 19px;
  cursor: pointer;
  transition: all 0.8s;

  &:hover {
    background-color: ${SecondaryColor};
  }
`;

const WhyChooseUsContainer = () => {
  const { t } = useTranslation();

  return (
    <ContainerSection>
      <SectionTitle>{t('whyChooseUsFirstTitle')}</SectionTitle>
      <SectionTitleSecond>{t('whyChooseUsSecondTitle')}</SectionTitleSecond>
      <RowStyled>
        <ColStyled xl={3} md={3} sm={3}>
          <div className="text-center mb-4">
            <IconStyled className="bi bi-person-check" />
          </div>
          <ReasonTitle>{t('whyChooseUsFirstReasonTitle')}</ReasonTitle>
          <ReasonDescription>{t('whyChooseUsFirstReasonDescription')}</ReasonDescription>
        </ColStyled>
        <ColStyled xl={3} md={3} sm={3}>
          <div className="text-center mb-4">
            <IconStyled className="bi bi-calendar-check" />
          </div>
          <ReasonTitle>{t('whyChooseUsSecondReasonTitle')}</ReasonTitle>
          <ReasonDescription>{t('whyChooseUsSecondReasonDescription')}</ReasonDescription>
        </ColStyled>
        <ColStyled xl={3} md={3} sm={3}>
          <div className="text-center mb-4">
            <IconStyled className="bi bi-bookmark-star-fill" />
          </div>
          <ReasonTitle>{t('whyChooseUsThirdReasonTitle')}</ReasonTitle>
          <ReasonDescription>{t('whyChooseUsThirdReasonDescription')}</ReasonDescription>
        </ColStyled>

        <ColStyled xl={3} md={3} sm={3}>
          <div className="text-center mb-4">
            <IconStyled className="bi bi-tags" />
          </div>
          <ReasonTitle>{t('whyChooseUsFourthReasonTitle')}</ReasonTitle>
          <ReasonDescription>{t('whyChooseUsFourthReasonDescription')}</ReasonDescription>
        </ColStyled>
      </RowStyled>
    </ContainerSection>
  );
};

export default WhyChooseUsContainer;
