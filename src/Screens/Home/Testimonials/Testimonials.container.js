import React from 'react';
import { ContainerStyled } from '../OurPrograms/MainPrograms.styled';
import { useTranslation } from 'react-i18next';

const TestimonialsContainer = () => {
  const { t } = useTranslation();
  return (
    <ContainerStyled>
      {/*<SectionTitle>{t('testimonials')}</SectionTitle>*/}
      {/*<p>TestMonial</p>*/}
    </ContainerStyled>
  );
};

export default TestimonialsContainer;
