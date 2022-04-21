import React from 'react';
import styled from 'styled-components';
import { PrimaryColor, SecondaryColor } from '../../../Assets/colorPalette';
import { Col, Row } from 'react-bootstrap';
import { PHONE_SIZE } from '../../../Assets/utils';
import { useTranslation } from 'react-i18next';

const ContainerSection = styled.div`
  padding: 2vw 4vw;
  min-height: 35rem;
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
  border-radius: 60%;
  font-size: 30px;
  padding: 12px 18px;
  cursor: pointer;
  transition: all 0.8s;

  &:hover {
    background-color: ${SecondaryColor};
  }

  @media (max-width: 500px) {
    font-size: 24px;
    padding: 10px 15px;
  }
`;

const WhyChooseUsContainer = () => {
  const { t } = useTranslation();

  const COL = 4;

  return (
    <ContainerSection>
      <SectionTitle>{t('whyChooseUsFirstTitle')}</SectionTitle>
      <SectionTitleSecond>{t('whyChooseUsSecondTitle')}</SectionTitleSecond>
      <RowStyled>
        <ColStyled xl={COL} md={COL} sm={COL}>
          <div className="text-center mb-4">
            <IconStyled className="bi bi-wallet" />
          </div>
          <ReasonTitle>{t('whyChooseUsSixthReasonTitle')}</ReasonTitle>
          <ReasonDescription>{t('whyChooseUsSixthReasonDescription')}</ReasonDescription>
        </ColStyled>
        <ColStyled xl={COL} md={COL} sm={COL}>
          <div className="text-center mb-4">
            <IconStyled className="bi bi-person-check" />
          </div>
          <ReasonTitle>{t('whyChooseUsFirstReasonTitle')}</ReasonTitle>
          <ReasonDescription>{t('whyChooseUsFirstReasonDescription')}</ReasonDescription>
        </ColStyled>
        <ColStyled xl={COL} md={COL} sm={COL}>
          <div className="text-center mb-4">
            <IconStyled className="bi bi-calendar-check" />
          </div>
          <ReasonTitle>{t('whyChooseUsSecondReasonTitle')}</ReasonTitle>
          <ReasonDescription>{t('whyChooseUsSecondReasonDescription')}</ReasonDescription>
        </ColStyled>
        <ColStyled xl={COL} md={COL} sm={COL}>
          <div className="text-center mb-4">
            <IconStyled className="bi bi-bookmark-star-fill" />
          </div>
          <ReasonTitle>{t('whyChooseUsThirdReasonTitle')}</ReasonTitle>
          <ReasonDescription>{t('whyChooseUsThirdReasonDescription')}</ReasonDescription>
        </ColStyled>

        <ColStyled xl={COL} md={COL} sm={COL}>
          <div className="text-center mb-4">
            <IconStyled className="bi bi-tags" />
          </div>
          <ReasonTitle>{t('whyChooseUsFourthReasonTitle')}</ReasonTitle>
          <ReasonDescription>{t('whyChooseUsFourthReasonDescription')}</ReasonDescription>
        </ColStyled>

        <ColStyled xl={COL} md={COL} sm={COL}>
          <div className="text-center mb-4">
            <IconStyled className="bi bi-people" />
          </div>
          <ReasonTitle>{t('whyChooseUsFifthReasonTitle')}</ReasonTitle>
          <ReasonDescription>{t('whyChooseUsFifthReasonDescription')}</ReasonDescription>
        </ColStyled>
      </RowStyled>
    </ContainerSection>
  );
};

export default WhyChooseUsContainer;
