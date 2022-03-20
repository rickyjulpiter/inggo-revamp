/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Row } from 'react-bootstrap';
import {
  CardTestimonials,
  ContainerStyled,
  LineStyled,
  SectionSectionTitle,
  SectionTitle,
  TestimonialsDescription,
  TestimonialsPerson
} from './Testimonials.styled';
import styled from 'styled-components';
import Avatar from '../../../Assets/Images/avatar.png';

const AvatarImg = styled.img`
  width: 20%;
`;

const PersonStyled = styled.span`
  color: #ffffff;
  font-weight: 600;
`;

const ImgStyled = styled.img`
  width: 75px;
  position: absolute !important;
  z-index: 1;
  outline: none !important;
  border-style: none;
  display: flex;
  justify-content: center;
`;

const CenterDiv = styled.div`
  margin: auto;
  width: 20%;
`;

const TestimonialsContainer = () => {
  const { t } = useTranslation();
  return (
    <ContainerStyled>
      <SectionTitle>{t('testimonials')}</SectionTitle>
      <SectionSectionTitle>A Word From Our Customer</SectionSectionTitle>
      <Row className="mt-5">
        <Col md={4} xl={4} className="mb-4">
          <CenterDiv>
            <ImgStyled
              className="position-absolute index-1 center"
              src="https://www.kobieducation.com/static/media/RachmadiantiSukmaHanifa.4cfb28bb.png"
              alt="a"
            />
          </CenterDiv>
          <CardTestimonials style={{ marginTop: '3..3vw' }}>
            <TestimonialsDescription>
              <i className="bi bi-chat-right-quote" /> "Aenean tortor est, vulputate quis leo in,
              vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus
              est."
            </TestimonialsDescription>
            <LineStyled />
            <TestimonialsPerson>
              <AvatarImg src={Avatar} className="img-fluid" alt="client-logo" />
              <PersonStyled> Ricky J</PersonStyled>
            </TestimonialsPerson>
          </CardTestimonials>
        </Col>
        <Col md={4} xl={4} className="mb-4">
          <CenterDiv>
            <ImgStyled
              className="position-absolute index-1 center"
              src="https://www.kobieducation.com/static/media/RachmadiantiSukmaHanifa.4cfb28bb.png"
              alt="a"
            />
          </CenterDiv>
          <CardTestimonials>
            <TestimonialsDescription>
              <i className="bi bi-chat-right-quote" /> "Aenean tortor est, vulputate quis leo in,
              vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus
              est."
            </TestimonialsDescription>
            <LineStyled />
            <TestimonialsPerson>
              <AvatarImg src={Avatar} className="img-fluid" alt="client-logo" />
              <PersonStyled> Ricky J</PersonStyled>
            </TestimonialsPerson>
          </CardTestimonials>
        </Col>
        <Col md={4} xl={4} className="mb-4">
          <CenterDiv>
            <ImgStyled
              className="position-absolute index-1 center"
              src="https://www.kobieducation.com/static/media/RachmadiantiSukmaHanifa.4cfb28bb.png"
              alt="a"
            />
          </CenterDiv>
          <CardTestimonials>
            <TestimonialsDescription>
              <i className="bi bi-chat-right-quote" /> "Aenean tortor est, vulputate quis leo in,
              vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus
              est."
            </TestimonialsDescription>
            <LineStyled />
            <TestimonialsPerson>
              <AvatarImg src={Avatar} className="img-fluid" alt="client-logo" />
              <PersonStyled> Ricky J</PersonStyled>
            </TestimonialsPerson>
          </CardTestimonials>
        </Col>
        <Col md={4} xl={4} className="mb-4">
          <CenterDiv>
            <ImgStyled
              className="position-absolute index-1 center"
              src="https://www.kobieducation.com/static/media/RachmadiantiSukmaHanifa.4cfb28bb.png"
              alt="a"
            />
          </CenterDiv>
          <CardTestimonials>
            <TestimonialsDescription>
              <i className="bi bi-chat-right-quote" /> "Aenean tortor est, vulputate quis leo in,
              vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus
              est."
            </TestimonialsDescription>
            <LineStyled />
            <TestimonialsPerson>
              <AvatarImg src={Avatar} className="img-fluid" alt="client-logo" />
              <PersonStyled> Ricky J</PersonStyled>
            </TestimonialsPerson>
          </CardTestimonials>
        </Col>
        <Col md={4} xl={4} className="mb-4">
          <CenterDiv>
            <ImgStyled
              className="position-absolute index-1 center"
              src="https://www.kobieducation.com/static/media/RachmadiantiSukmaHanifa.4cfb28bb.png"
              alt="a"
            />
          </CenterDiv>
          <CardTestimonials>
            <TestimonialsDescription>
              <i className="bi bi-chat-right-quote" /> "Aenean tortor est, vulputate quis leo in,
              vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus
              est."
            </TestimonialsDescription>
            <LineStyled />
            <TestimonialsPerson>
              <AvatarImg src={Avatar} className="img-fluid" alt="client-logo" />
              <PersonStyled> Ricky J</PersonStyled>
            </TestimonialsPerson>
          </CardTestimonials>
        </Col>
      </Row>
    </ContainerStyled>
  );
};

export default TestimonialsContainer;
