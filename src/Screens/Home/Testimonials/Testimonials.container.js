/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Card, Col, Row } from 'react-bootstrap';
import { PrimaryColor } from '../../../Assets/colorPalette';

const SectionTitle = styled.h3`
  color: #f3c58e;
  font-weight: 700;
  text-align: center;
`;

const SectionSectionTitle = styled.h1`
  text-align: center;
  color: #ffffff;
  font-weight: bolder;
`;

const ContainerStyled = styled.div`
  padding: 2vw 11vw 8vw 11vw;
  background-color: ${PrimaryColor};
  @media (min-width: 1024px) {
    min-height: 602px;
  }

  @media (max-width: 768px) {
    min-height: 668px;
    background-image: none;
  }
`;

const CardTestimonials = styled(Card)`
  padding: 2vw 2vw 1vw 2vw;
  border-radius: 40px;
  transition: all 0.3s linear;

  &:hover {
    box-shadow: rgb(154, 64, 64, 0.5) 0 8px 24px;
  }
`;

const TestimonialsDescription = styled.p`
  font-style: italic;
  text-align: justify;
`;

const LineStyled = styled.hr`
  margin-top: 0;
  margin-bottom: 0.7vw;
`;

const TestimonialsPerson = styled.p`
  text-align: right;
  font-weight: 600;
`;

const TestimonialsContainer = () => {
  const { t } = useTranslation();
  return (
    <ContainerStyled>
      <SectionTitle>{t('testimonials')}</SectionTitle>
      <SectionSectionTitle>A Word From Our Customer</SectionSectionTitle>
      <Row className="mt-5">
        <Col md={4} xl={4} className="mb-4">
          <CardTestimonials>
            <TestimonialsDescription>
              <i className="bi bi-chat-right-quote" /> "Aenean tortor est, vulputate quis leo in,
              vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus
              est."
            </TestimonialsDescription>
            <LineStyled />
            <TestimonialsPerson>Ricky J - Corporate Slave</TestimonialsPerson>
          </CardTestimonials>
        </Col>
        <Col md={4} xl={4} className="mb-4">
          <CardTestimonials>
            <TestimonialsDescription>
              <i className="bi bi-chat-right-quote" /> "Aenean tortor est, vulputate quis leo in,
              vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus
              est."
            </TestimonialsDescription>
            <LineStyled />
            <TestimonialsPerson>Ricky J - Corporate Slave</TestimonialsPerson>
          </CardTestimonials>
        </Col>
        <Col md={4} xl={4} className="mb-4">
          <CardTestimonials>
            <TestimonialsDescription>
              <i className="bi bi-chat-right-quote" /> "Aenean tortor est, vulputate quis leo in,
              vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus
              est."
            </TestimonialsDescription>
            <LineStyled />
            <TestimonialsPerson>Ricky J - Corporate Slave</TestimonialsPerson>
          </CardTestimonials>
        </Col>
        <Col md={4} xl={4} className="mb-4">
          <CardTestimonials>
            <TestimonialsDescription>
              <i className="bi bi-chat-right-quote" /> "Aenean tortor est, vulputate quis leo in,
              vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus
              est."
            </TestimonialsDescription>
            <LineStyled />
            <TestimonialsPerson>Ricky J - Corporate Slave</TestimonialsPerson>
          </CardTestimonials>
        </Col>
        <Col md={4} xl={4} className="mb-4">
          <CardTestimonials>
            <TestimonialsDescription>
              <i className="bi bi-chat-right-quote" /> "Aenean tortor est, vulputate quis leo in,
              vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus
              est."
            </TestimonialsDescription>
            <LineStyled />
            <TestimonialsPerson>Ricky J - Corporate Slave</TestimonialsPerson>
          </CardTestimonials>
        </Col>
        <Col md={4} xl={4} className="mb-4">
          <CardTestimonials>
            <TestimonialsDescription>
              <i className="bi bi-chat-right-quote" /> "Aenean tortor est, vulputate quis leo in,
              vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus
              est."
            </TestimonialsDescription>
            <LineStyled />
            <TestimonialsPerson>Ricky J - Corporate Slave</TestimonialsPerson>
          </CardTestimonials>
        </Col>
      </Row>
    </ContainerStyled>
  );
};

export default TestimonialsContainer;
