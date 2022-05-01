import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import {
  BannerBackground,
  ContainerStyled,
  H5,
  LiStyled,
  ProgramDescription,
  RowContainer,
  ULStyled
} from '../ProgramDetail/ProgramDetail.styled';
import MobileBanner from '../../../../Assets/Images/new-banner/ENGLISH-CONVERSATION/INGGO_english_conversatin_biru_mobile_english.png';
import DesktopBanner from '../../../../Assets/Images/new-banner/ENGLISH-CONVERSATION/INGGO_english_conversatin_biru.png';
import WhyChooseUsContainer from '../../WhyChooseUs/WhyChooseUs.container';
import TestimonialsComponentContainer from '../../TestimonialsComponent/TestimonialsComponent.container';
import OurClientsContainer from '../../OurClients/OurClients.container';
import ContactContainer from '../../Contact/Contact.container';

const EnglishConversation = ({ lang }) => {
  const { t } = useTranslation();
  return (
    <>
      <ContainerStyled>
        <Row>
          <Col xl={12} md={12} sm={12}>
            <BannerBackground
              language={lang}
              mobileBanner={MobileBanner}
              desktopBanner={DesktopBanner}
            />
          </Col>
          <Col xl={12} md={12} sm={12}>
            <RowContainer>
              <Col xl={12} md={12} sm={12}>
                <ProgramDescription>{t('englishConversationDescription')}</ProgramDescription>
                <ProgramDescription>{t('englishConversationDescriptionSecond')}</ProgramDescription>
                <ProgramDescription>{t('englishConversationDescriptionThird')}</ProgramDescription>
              </Col>
              <Col xl={12} md={12} sm={12}>
                {lang === 'id' ? (
                  <Row>
                    <Col xl={8} md={8} sm={8} className="mt-2">
                      <H5>Anda akan belajar tentang:</H5>
                      <Row>
                        <Col>
                          <ULStyled>
                            <LiStyled>Lesson 1: Personal details</LiStyled>
                            <LiStyled>Lesson 2: Expectations</LiStyled>
                            <LiStyled>Lesson 3: Studying/Working abroad</LiStyled>
                            <LiStyled>Lesson 4: Future goals</LiStyled>
                            <LiStyled>Lesson 5: Directions</LiStyled>
                            <LiStyled>Lesson 6: Foods around the world</LiStyled>
                          </ULStyled>
                        </Col>
                        <Col>
                          <ULStyled>
                            <LiStyled>Lesson 7: Traveling plans</LiStyled>
                            <LiStyled>Lesson 8: New Year’s resolutions</LiStyled>
                            <LiStyled>Lesson 9: University life</LiStyled>
                            <LiStyled>Lesson 10: Culture Shock</LiStyled>
                            <LiStyled>Lesson 11: Gadgets</LiStyled>
                            <LiStyled>Lesson 12: Social Media</LiStyled>
                          </ULStyled>
                        </Col>
                        <small>
                          <i>*topik dapat sewaktu-waktu berubah tanpa pemberitahuan.</i>
                        </small>
                      </Row>
                    </Col>
                    <Col className="mt-4">
                      <H5>Anda akan mengikuti dan mendapatkan:</H5>
                      <ULStyled>
                        <LiStyled>Pre-test, progress test, post-test</LiStyled>
                        <LiStyled>Masukan berkala yang bermanfaat dari tutor</LiStyled>
                        <LiStyled>Laporan Kemajuan Belajar</LiStyled>
                        <LiStyled>Sertifikat elektronik</LiStyled>
                      </ULStyled>
                    </Col>
                  </Row>
                ) : (
                  <Row>
                    <Col xl={8} md={8} sm={8}>
                      <H5>You will learn about:</H5>
                      <Row>
                        <Col>
                          <ULStyled>
                            <LiStyled>Lesson 1: Personal details</LiStyled>
                            <LiStyled>Lesson 2: Expectations</LiStyled>
                            <LiStyled>Lesson 3: Studying/Working abroad</LiStyled>
                            <LiStyled>Lesson 4: Future goals</LiStyled>
                            <LiStyled>Lesson 5: Directions</LiStyled>
                            <LiStyled>Lesson 6: Foods around the world</LiStyled>
                          </ULStyled>
                        </Col>
                        <Col>
                          <ULStyled>
                            <LiStyled>Lesson 7: Traveling plans</LiStyled>
                            <LiStyled>Lesson 8: New Year’s resolutions</LiStyled>
                            <LiStyled>Lesson 9: University life</LiStyled>
                            <LiStyled>Lesson 10: Culture Shock</LiStyled>
                            <LiStyled>Lesson 11: Gadgets</LiStyled>
                            <LiStyled>Lesson 12: Social Media</LiStyled>
                          </ULStyled>
                        </Col>
                        <small>
                          <i>*topics are subject to change without prior notice.</i>
                        </small>
                      </Row>
                    </Col>
                    <Col>
                      <H5>You will have and obtain:</H5>
                      <ULStyled>
                        <LiStyled>Pre-test, progress test, and post-test</LiStyled>
                        <LiStyled>Regular and constructive feedback from your tutor</LiStyled>
                        <LiStyled>Performance report</LiStyled>
                        <LiStyled>E-certificate</LiStyled>
                      </ULStyled>
                    </Col>
                  </Row>
                )}
              </Col>
            </RowContainer>
          </Col>
        </Row>
      </ContainerStyled>
      <WhyChooseUsContainer />
      <TestimonialsComponentContainer />
      <OurClientsContainer />
      <ContactContainer />
    </>
  );
};

EnglishConversation.propTypes = {
  lang: PropTypes.string
};

export default EnglishConversation;
