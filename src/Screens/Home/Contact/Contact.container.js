import React from 'react';
import { PrimaryColor, SecondaryColor } from '../../../Assets/colorPalette';
import { useTranslation } from 'react-i18next';
import {
  CenterDiv,
  ContainerStyled,
  IconStyled,
  SectionParagraph,
  SectionTitle
} from './Contact.styled';
import ButtonComponent from '../../../Components/Button/Button.component';

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
          <ButtonComponent color={PrimaryColor} text={t('contactViaWA')} />
          <ButtonComponent color={SecondaryColor} text={t('contactViaEmail')} />
        </CenterDiv>
      </ContainerStyled>
    </>
  );
};

export default ContactContainer;
