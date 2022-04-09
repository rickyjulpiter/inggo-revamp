/* eslint-disable */
import {
  CardTestimonials,
  CenterDiv,
  ImgStyled,
  LineStyled,
  PersonStyled,
  SourceStyled,
  TestimonialsDescription,
  TestimonialsPerson
} from './Testimonials.styled';
import React from 'react';

const dummyDescription =
  'Aenean tortor est, vulputate quis leo in, vehicula\n' +
  '        rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est.';

const dummyPerson = 'Ricky J';

export const ExampleCardPerson = ({
  description = dummyDescription,
  person = dummyPerson,
  source = '',
  images = 'https://www.kobieducation.com/static/media/RachmadiantiSukmaHanifa.4cfb28bb.png'
}) => (
  <>
    <CenterDiv>
      <ImgStyled className="position-absolute index-1 center" src={images} alt="images" />
    </CenterDiv>
    <CardTestimonials>
      <TestimonialsDescription>
        {/*<i className="bi bi-chat-right-quote" />*/}
        {description}
      </TestimonialsDescription>
      <LineStyled />
      <TestimonialsPerson>
        <PersonStyled>{person}</PersonStyled>
        <SourceStyled>{source}</SourceStyled>
      </TestimonialsPerson>
    </CardTestimonials>
  </>
);
