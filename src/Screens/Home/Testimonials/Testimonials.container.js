/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Carousel, Col, Row } from 'react-bootstrap';
import {
  CardTestimonials,
  CenterDiv,
  ContainerStyled,
  ImgStyled,
  LineStyled,
  PersonStyled,
  SectionSectionTitle,
  SectionTitle,
  TestimonialsDescription,
  TestimonialsPerson
} from './Testimonials.styled';

const TestimonialsContainer = () => {
  const { t } = useTranslation();
  return (
    <ContainerStyled>
      <SectionTitle>{t('testimonials')}</SectionTitle>
      <SectionSectionTitle className="mb-5">A Word From Our Customer</SectionSectionTitle>
      <Carousel fade variant="dark">
        <Carousel.Item interval={1000}>
          <Row>
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
                  <i className="bi bi-chat-right-quote" /> "Aenean tortor est, vulputate quis leo
                  in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius
                  finibus est."
                </TestimonialsDescription>
                <LineStyled />
                <TestimonialsPerson>
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
                  <i className="bi bi-chat-right-quote" /> "Aenean tortor est, vulputate quis leo
                  in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius
                  finibus est."
                </TestimonialsDescription>
                <LineStyled />
                <TestimonialsPerson>
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
                  <i className="bi bi-chat-right-quote" /> "Aenean tortor est, vulputate quis leo
                  in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius
                  finibus est."
                </TestimonialsDescription>
                <LineStyled />
                <TestimonialsPerson>
                  <PersonStyled> Ricky J</PersonStyled>
                </TestimonialsPerson>
              </CardTestimonials>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <Row>
            <Col md={4} xl={4} className="mb-4">
              <CenterDiv>
                <ImgStyled
                  className="position-absolute index-1 center"
                  src="https://www.kobieducation.com/static/media/AlaaQaharuddin.7db783ed.png"
                  alt="a"
                />
              </CenterDiv>
              <CardTestimonials style={{ marginTop: '3..3vw' }}>
                <TestimonialsDescription>
                  <i className="bi bi-chat-right-quote" /> "Aenean tortor est, vulputate quis leo
                  in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius
                  finibus est."
                </TestimonialsDescription>
                <LineStyled />
                <TestimonialsPerson>
                  <PersonStyled> Ricky J</PersonStyled>
                </TestimonialsPerson>
              </CardTestimonials>
            </Col>
            <Col md={4} xl={4} className="mb-4">
              <CenterDiv>
                <ImgStyled
                  className="position-absolute index-1 center"
                  src="https://www.kobieducation.com/static/media/AlaaQaharuddin.7db783ed.png"
                  alt="a"
                />
              </CenterDiv>
              <CardTestimonials>
                <TestimonialsDescription>
                  <i className="bi bi-chat-right-quote" /> "Aenean tortor est, vulputate quis leo
                  in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius
                  finibus est."
                </TestimonialsDescription>
                <LineStyled />
                <TestimonialsPerson>
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
                  <i className="bi bi-chat-right-quote" /> "Aenean tortor est, vulputate quis leo
                  in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius
                  finibus est."
                </TestimonialsDescription>
                <LineStyled />
                <TestimonialsPerson>
                  <PersonStyled> Ricky J</PersonStyled>
                </TestimonialsPerson>
              </CardTestimonials>
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </ContainerStyled>
  );
};

export default TestimonialsContainer;
