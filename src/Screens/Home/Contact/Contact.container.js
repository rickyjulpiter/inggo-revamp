import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  CenterDiv,
  ContainerStyled,
  IconStyled,
  SectionParagraph,
  SectionTitle
} from './Contact.styled';
import IconContainer from '../../../Components/Icon/Icon.container';
import { PrimaryColor } from '../../../Assets/colorPalette';

const ContactContainer = () => {
  const { t } = useTranslation();

  return (
    <>
      <ContainerStyled>
        <div className="mt-5" />
        <IconStyled className="bi bi-chat-square-text" />
        <SectionTitle>{t('contactTitle')}</SectionTitle>
        <SectionParagraph>{t('contactDescription')}</SectionParagraph>
        <CenterDiv className="d-flex justify-content-center ">
          <IconContainer
            href="https://api.whatsapp.com/send?phone=6285772900593"
            icon="bi bi-whatsapp"
            color="#25d366"
          />
          <div className="m-1" />
          <IconContainer href="mailto:info@inggo.co" icon="bi bi-envelope" color={PrimaryColor} />
        </CenterDiv>
      </ContainerStyled>
    </>
  );
};

export default ContactContainer;
