import React from 'react';
import styled from 'styled-components';
import { PrimaryColor, SecondaryColor } from '../../../Assets/colorPalette';
import { Col, Row } from 'react-bootstrap';
import { PHONE_SIZE } from '../../../Assets/utils';

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
  return (
    <ContainerSection>
      <SectionTitle>Your one-stop language solution</SectionTitle>
      <SectionTitleSecond>Why Inggo?</SectionTitleSecond>
      <RowStyled>
        <ColStyled xl={3} md={3} sm={3}>
          <div className="text-center mb-4">
            <IconStyled className="bi bi-person-check" />
          </div>
          <ReasonTitle>Qualified Tutors</ReasonTitle>
          <ReasonDescription>
            Our tutors, who are graduates of local and foreign universities, are highly qualified
            and the best in English language teaching.{' '}
          </ReasonDescription>
        </ColStyled>
        <ColStyled xl={3} md={3} sm={3}>
          <div className="text-center mb-4">
            <IconStyled className="bi bi-calendar-check" />
          </div>
          <ReasonTitle>Flexibility</ReasonTitle>
          <ReasonDescription>
            You can choose to study anytime, and our tutors will adjust to your chosen time.
          </ReasonDescription>
        </ColStyled>
        <ColStyled xl={3} md={3} sm={3}>
          <div className="text-center mb-4">
            <IconStyled className="bi bi-bookmark-star-fill" />
          </div>
          <ReasonTitle>Tailored Materials</ReasonTitle>
          <ReasonDescription>
            Our materials are specifically designed to cater for your needs.
          </ReasonDescription>
        </ColStyled>

        <ColStyled xl={3} md={3} sm={3}>
          <div className="text-center mb-4">
            <IconStyled className="bi bi-tags" />
          </div>
          <ReasonTitle>Affordability</ReasonTitle>
          <ReasonDescription>You will get more that what you pay for.</ReasonDescription>
        </ColStyled>
      </RowStyled>
    </ContainerSection>
  );
};

export default WhyChooseUsContainer;