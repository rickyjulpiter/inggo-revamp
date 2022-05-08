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
} from './TestimonialsComponent.styled';
import React from 'react';

const dummyDescription =
  'Aenean tortor est, vulputate quis leo in, vehicula\n' +
  '        rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est.';

const dummyPerson = 'Ricky J';

export const ExampleCardPersonBlue = ({
  description = dummyDescription,
  person = dummyPerson,
  source = '',
  images = 'https://www.kobieducation.com/static/media/RachmadiantiSukmaHanifa.4cfb28bb.png',
  programs = ''
}) => (
  <>
    <CenterDiv>
      <ImgStyled className="" src={images} alt="images" />
    </CenterDiv>
    <CardTestimonials>
      <TestimonialsDescription>{description}</TestimonialsDescription>
      <LineStyled />
      <TestimonialsPerson>
        <PersonStyled>{person}</PersonStyled>
        <SourceStyled>{source}</SourceStyled>
        <SourceStyled>
          <b>
            <i>{programs}</i>
          </b>
        </SourceStyled>
      </TestimonialsPerson>
    </CardTestimonials>
  </>
);
