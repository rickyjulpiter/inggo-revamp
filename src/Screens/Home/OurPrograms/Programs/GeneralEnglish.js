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
import WhyChooseUsContainer from '../../WhyChooseUs/WhyChooseUs.container';
import TestimonialsComponentContainer from '../../TestimonialsComponent/TestimonialsComponent.container';
import OurClientsContainer from '../../OurClients/OurClients.container';
import ContactContainer from '../../Contact/Contact.container';
import MobileBanner from '../../../../Assets/Images/new-banner/GENERAL-ENGLISH/INGGO_general_english_merah_mobile_english.png';
import DesktopBanner from '../../../../Assets/Images/new-banner/GENERAL-ENGLISH/INGGO_general_english_merah.png';

const GeneralEnglish = ({ lang }) => {
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
                <ProgramDescription>{t('generalEnglishDescription')}</ProgramDescription>
                <ProgramDescription>{t('generalEnglishDescriptionSecond')}</ProgramDescription>
                <ProgramDescription>{t('generalEnglishDescriptionThird')}</ProgramDescription>
              </Col>
              <Col xl={12} md={12} sm={12}>
                {lang === 'id' ? (
                  <Row>
                    <Col xl={8} md={8} sm={8}>
                      <H5>Anda akan belajar tentang:</H5>
                      <Row>
                        <Col>
                          <ULStyled>
                            <LiStyled>Lesson 1: Personal details</LiStyled>
                            <LiStyled>Lesson 2: Country and Languages</LiStyled>
                            <LiStyled>Lesson 3: Gadgets</LiStyled>
                            <LiStyled>Lesson 4: Small talk</LiStyled>
                            <LiStyled>Lesson 5: Interests</LiStyled>
                            <LiStyled>Lesson 6: Lifelong learning</LiStyled>
                          </ULStyled>
                        </Col>
                        <Col>
                          <ULStyled>
                            <LiStyled>Lesson 7: Memorable Encounter</LiStyled>
                            <LiStyled>Lesson 8: Uncommon Jobs</LiStyled>
                            <LiStyled>Lesson 9: Blockbuster movies</LiStyled>
                            <LiStyled>Lesson 10: Tertiary Education</LiStyled>
                            <LiStyled>Lesson 11: Religious holidays</LiStyled>
                            <LiStyled>Lesson 12: Friendships</LiStyled>
                          </ULStyled>
                        </Col>
                        <small>
                          <i>*topik dapat sewaktu-waktu berubah tanpa pemberitahuan.</i>
                        </small>
                      </Row>
                    </Col>
                    <Col>
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
                            <LiStyled>Lesson 2: Country and Languages</LiStyled>
                            <LiStyled>Lesson 3: Gadgets</LiStyled>
                            <LiStyled>Lesson 4: Small talk</LiStyled>
                            <LiStyled>Lesson 5: Interests</LiStyled>
                            <LiStyled>Lesson 6: Lifelong learning</LiStyled>
                          </ULStyled>
                        </Col>
                        <Col>
                          <ULStyled>
                            <LiStyled>Lesson 7: Memorable Encounter</LiStyled>
                            <LiStyled>Lesson 8: Uncommon Jobs</LiStyled>
                            <LiStyled>Lesson 9: Blockbuster movies</LiStyled>
                            <LiStyled>Lesson 10: Tertiary Education</LiStyled>
                            <LiStyled>Lesson 11: Religious holidays</LiStyled>
                            <LiStyled>Lesson 12: Friendships</LiStyled>
                          </ULStyled>
                        </Col>
                        <small>
                          {' '}
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

GeneralEnglish.propTypes = {
  lang: PropTypes.string
};

export default GeneralEnglish;
