import React from 'react';
import { Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import {
  CardImgStyled,
  CardStyled,
  ColStyled,
  ImgContainer,
  SectionCardSmall
} from '../MainPrograms.styled';
import {
  ButtonMore,
  ContainerStyled,
  SectionDescriptionCustom,
  SectionTitle
} from './EnglishCourses.styled';
import TestimonialsComponentContainer from '../../TestimonialsComponent/TestimonialsComponent.container';
import OurClientsContainer from '../../OurClients/OurClients.container';
import ContactContainer from '../../Contact/Contact.container';
import {
  ROUTE_ACADEMIC_WRITING,
  ROUTE_BUSINESS_ENGLISH,
  ROUTE_ENGLISH_CONVERSATION,
  ROUTE_GENERAL_ENGLISH,
  ROUTE_IELTS,
  ROUTE_TOEFL
} from '../../../../Assets/utils';

import BusinessEnglishBalloon from '../../../../Assets/Images/new-banner/BUSINESS-ENGLISH/INGGO_business_english_lingkaran_biru.png';
import AcademicWritingBalloon from '../../../../Assets/Images/new-banner/ACADEMIC-WRITING/INGGO_academic_writing_lingkaran_biru.png';
import EnglishConversationBalloon from '../../../../Assets/Images/new-banner/ENGLISH-CONVERSATION/INGGO_english_conversatin_lingkaran_biru.png';
import IELTSBalloon from '../../../../Assets/Images/new-banner/IELTS/INGGO_ielts_lingkaran_merah.png';
import TOEFLBalloon from '../../../../Assets/Images/new-banner/TOEFL/INGGO_toefl_lingkaran_merah.png';
import GeneralEnglishBalloon from '../../../../Assets/Images/new-banner/GENERAL-ENGLISH/INGGO_general_english_lingkaran_merah.png';

const EnglishCoursesContainer = () => {
  const { t } = useTranslation();
  return (
    <>
      <ContainerStyled className="mt-5">
        <SectionTitle>{t('englishCourses')}</SectionTitle>
        <Row>
          <ColStyled xl={4} md={4} sm={12}>
            <CardStyled>
              <ImgContainer>
                <CardImgStyled
                  variant="top"
                  src={BusinessEnglishBalloon}
                  className="mx-auto d-block"
                />
              </ImgContainer>
              <SectionCardSmall>{t('businessEnglish')}</SectionCardSmall>
              <SectionDescriptionCustom>{t('businessEnglishDescription')}</SectionDescriptionCustom>
              <ButtonMore href={ROUTE_BUSINESS_ENGLISH}>{t('exploreMore')}</ButtonMore>
            </CardStyled>
          </ColStyled>
          <ColStyled xl={4} md={4} sm={12}>
            <CardStyled>
              <ImgContainer>
                <CardImgStyled
                  variant="top"
                  src={AcademicWritingBalloon}
                  className="mx-auto d-block"
                />
              </ImgContainer>
              <SectionCardSmall>{t('academicWriting')}</SectionCardSmall>
              <SectionDescriptionCustom>{t('academicWritingDescription')}</SectionDescriptionCustom>
              <ButtonMore href={ROUTE_ACADEMIC_WRITING}>{t('exploreMore')}</ButtonMore>
            </CardStyled>
          </ColStyled>
          <ColStyled xl={4} md={4} sm={12}>
            <CardStyled>
              <ImgContainer>
                <CardImgStyled
                  variant="top"
                  src={EnglishConversationBalloon}
                  className="mx-auto d-block"
                />
              </ImgContainer>
              <SectionCardSmall>{t('englishConversation')}</SectionCardSmall>
              <SectionDescriptionCustom>
                {t('englishConversationDescription')}
              </SectionDescriptionCustom>
              <ButtonMore href={ROUTE_ENGLISH_CONVERSATION}>{t('exploreMore')}</ButtonMore>
            </CardStyled>
          </ColStyled>
          <ColStyled xl={4} md={4} sm={12}>
            <CardStyled>
              <ImgContainer>
                <CardImgStyled variant="top" src={IELTSBalloon} className="mx-auto d-block" />
              </ImgContainer>
              <SectionCardSmall>{t('ieltsDetail')}</SectionCardSmall>
              <SectionDescriptionCustom>{t('ieltsDescription')}</SectionDescriptionCustom>
              <ButtonMore href={ROUTE_IELTS}>{t('exploreMore')}</ButtonMore>
            </CardStyled>
          </ColStyled>
          <ColStyled xl={4} md={4} sm={12}>
            <CardStyled>
              <ImgContainer>
                <CardImgStyled variant="top" src={TOEFLBalloon} className="mx-auto d-block" />
              </ImgContainer>
              <SectionCardSmall>{t('toeflDetail')}</SectionCardSmall>
              <SectionDescriptionCustom>{t('toeflDescription')}</SectionDescriptionCustom>
              <ButtonMore href={ROUTE_TOEFL}>{t('exploreMore')}</ButtonMore>
            </CardStyled>
          </ColStyled>
          <ColStyled xl={4} md={4} sm={12}>
            <CardStyled>
              <ImgContainer>
                <CardImgStyled
                  variant="top"
                  src={GeneralEnglishBalloon}
                  className="mx-auto d-block"
                />
              </ImgContainer>
              <SectionCardSmall>{t('generalEnglish')}</SectionCardSmall>
              <SectionDescriptionCustom>{t('generalEnglishDescription')}</SectionDescriptionCustom>
              <ButtonMore href={ROUTE_GENERAL_ENGLISH}>{t('exploreMore')}</ButtonMore>
            </CardStyled>
          </ColStyled>
        </Row>
      </ContainerStyled>
      <TestimonialsComponentContainer />
      <OurClientsContainer />
      <ContactContainer />
    </>
  );
};

export default EnglishCoursesContainer;
