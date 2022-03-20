import {
  CardTestimonials,
  CenterDiv,
  ImgStyled,
  LineStyled,
  PersonStyled,
  TestimonialsDescription,
  TestimonialsPerson
} from './Testimonials.styled';
import React from 'react';

export const ExampleCardPerson = () => (
  <>
    <CenterDiv>
      <ImgStyled
        className="position-absolute index-1 center"
        src="https://www.kobieducation.com/static/media/RachmadiantiSukmaHanifa.4cfb28bb.png"
        alt="a"
      />
    </CenterDiv>
    <CardTestimonials>
      <TestimonialsDescription>
        <i className="bi bi-chat-right-quote" /> Aenean tortor est, vulputate quis leo in, vehicula
        rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est.
      </TestimonialsDescription>
      <LineStyled />
      <TestimonialsPerson>
        <PersonStyled> Ricky J</PersonStyled>
      </TestimonialsPerson>
    </CardTestimonials>
  </>
);
