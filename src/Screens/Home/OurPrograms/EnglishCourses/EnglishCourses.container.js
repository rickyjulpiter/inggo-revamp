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
import IELTSBalloon from '../../../../Assets/Images/new-banner/IELTS/INGGO_REV_APR_2022_ielts_lingkaran_merah.png';
import TOEFLBalloon from '../../../../Assets/Images/new-banner/TOEFL/INGGO_REV_APR_2022_toefl_lingkaran_merah.png';
import GeneralEnglishBalloon from '../../../../Assets/Images/new-banner/GENERAL-ENGLISH/INGGO_REV_APR_2022_general_english_lingkaran_biru.png';
import BusinessEnglishBalloon from '../../../../Assets/Images/new-banner/BUSINESS-ENGLISH/INGGO_REV_APR_2022_business_english_lingkaran_biru.png';
import AcademicWritingBalloon from '../../../../Assets/Images/new-banner/ACADEMIC-WRITING/IMG-0719.PNG';
import EnglishConversationBalloon from '../../../../Assets/Images/new-banner/ENGLISH-CONVERSATION/IMG-0727.PNG';
import {
  ButtonMore,
  ContainerStyled,
  SectionDescriptionCustom,
  SectionTitle
} from './EnglishCourses.styled';
import TestimonialsComponentContainer from '../../TestimonialsComponent/TestimonialsComponent.container';
import OurClientsContainer from '../../OurClients/OurClients.container';
import ContactContainer from '../../Contact/Contact.container';

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
              <ButtonMore>{t('exploreMore')}</ButtonMore>
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
              <ButtonMore>{t('exploreMore')}</ButtonMore>
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
              <ButtonMore>{t('exploreMore')}</ButtonMore>
            </CardStyled>
          </ColStyled>
          <ColStyled xl={4} md={4} sm={12}>
            <CardStyled>
              <ImgContainer>
                <CardImgStyled variant="top" src={IELTSBalloon} className="mx-auto d-block" />
              </ImgContainer>
              <SectionCardSmall>{t('ielts')}</SectionCardSmall>
              <SectionDescriptionCustom>{t('ieltsDescription')}</SectionDescriptionCustom>
              <ButtonMore>{t('exploreMore')}</ButtonMore>
            </CardStyled>
          </ColStyled>
          <ColStyled xl={4} md={4} sm={12}>
            <CardStyled>
              <ImgContainer>
                <CardImgStyled variant="top" src={TOEFLBalloon} className="mx-auto d-block" />
              </ImgContainer>
              <SectionCardSmall>{t('toefl')}</SectionCardSmall>
              <SectionDescriptionCustom>{t('toeflDescription')}</SectionDescriptionCustom>
              <ButtonMore>{t('exploreMore')}</ButtonMore>
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
              <ButtonMore>{t('exploreMore')}</ButtonMore>
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
