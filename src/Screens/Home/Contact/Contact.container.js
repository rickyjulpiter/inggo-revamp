import React from 'react';
import { PrimaryColor, SecondaryColor } from '../../../Assets/colorPalette';
import { useTranslation } from 'react-i18next';
import {
  CenterDiv,
  ContactButton,
  ContainerStyled,
  IconStyled,
  SectionParagraph,
  SectionTitle
} from './Contact.styled';

const ContactContainer = () => {
  const { t } = useTranslation();

  return (
    <>
      <ContainerStyled>
        <div className="mt-5" />
        <IconStyled className="bi bi-chat-square-text" />
        <SectionTitle>{t('contactTitle')}</SectionTitle>
        <SectionParagraph>{t('contactDescription')}</SectionParagraph>
        <CenterDiv className="mx-auto">
          <ContactButton color={PrimaryColor}>{t('contactViaWA')}</ContactButton>
          <ContactButton color={SecondaryColor}>{t('contactViaEmail')}</ContactButton>
        </CenterDiv>
      </ContainerStyled>
    </>
  );
};

export default ContactContainer;
