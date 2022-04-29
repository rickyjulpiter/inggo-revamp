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
import DesktopBanner from '../../../../Assets/Images/new-banner/BUSINESS-ENGLISH/INGGO_business_english_biru.png';
import MobileBanner from '../../../../Assets/Images/new-banner/BUSINESS-ENGLISH/INGGO_business_english_biru_mobile_english.png';

const BusinessEnglish = ({ lang }) => {
  const { t } = useTranslation();
  console.log(lang);
  return (
    <>
      <ContainerStyled>
        <Row>
          <Col xl={12} md={12} sm={12} className="mb-1">
            <BannerBackground
              language={lang}
              mobileBanner={MobileBanner}
              desktopBanner={DesktopBanner}
            />
          </Col>
          <Col xl={12} md={12} sm={12}>
            <RowContainer>
              <Col xl={12} md={12} sm={12}>
                <ProgramDescription>{t('businessEnglishDescription')}</ProgramDescription>
                <ProgramDescription>{t('businessEnglishDescriptionSecond')}</ProgramDescription>
                <ProgramDescription>{t('businessEnglishDescriptionThird')}</ProgramDescription>
              </Col>
              <Col xl={12} md={12} sm={12}>
                {lang === 'id' ? (
                  <Row>
                    <Col md={8}>
                      <H5>Anda akan belajar cara:</H5>
                      <Row>
                        <Col>
                          <ULStyled>
                            <LiStyled>Memperkenalkan diri dalam konteks bisnis</LiStyled>
                            <LiStyled>Menghadapi wawancara kerja</LiStyled>
                            <LiStyled>Memberikan presentasi</LiStyled>
                            <LiStyled>Menulis email</LiStyled>
                            <LiStyled>Menulis proposal</LiStyled>
                            <LiStyled>Menulis laporan singkat</LiStyled>
                            <LiStyled>Menjelaskan grafik</LiStyled>
                          </ULStyled>
                        </Col>
                        <Col>
                          <ULStyled>
                            <LiStyled>Berbasa-basi dalam konteks bisnis</LiStyled>
                            <LiStyled>Bersosialisasi dan membangun relasi</LiStyled>
                            <LiStyled>Memimpin pertemuan</LiStyled>
                            <LiStyled>Berpartisipasi dalam diskusi</LiStyled>
                            <LiStyled>Bernegosiasi</LiStyled>
                            <LiStyled>Menangani keluhan</LiStyled>
                            <LiStyled>Menelepon</LiStyled>
                          </ULStyled>
                        </Col>
                      </Row>
                    </Col>
                    <Col>
                      <H5>Anda akan mengikuti dan mendapatkan:</H5>
                      <ULStyled>
                        <LiStyled>Ujian awal, ujian progress dan ujian akhir</LiStyled>
                        <LiStyled>Masukan berkala yang bermanfaat dari tutor</LiStyled>
                        <LiStyled>Laporan Kemajuan Belajar</LiStyled>
                        <LiStyled>Sertifikat elektronik</LiStyled>
                      </ULStyled>
                    </Col>
                  </Row>
                ) : (
                  <Row>
                    <Col md={8}>
                      <H5>You will learn about:</H5>
                      <Row>
                        <Col>
                          <ULStyled>
                            <LiStyled>Introducing yourself in the business setting</LiStyled>
                            <LiStyled>Job interviews</LiStyled>
                            <LiStyled>Giving presentations</LiStyled>
                            <LiStyled>Writing emails</LiStyled>
                            <LiStyled>Writing proposals</LiStyled>
                            <LiStyled>Writing short reports</LiStyled>
                            <LiStyled>Explaining graphs and charts</LiStyled>
                          </ULStyled>
                        </Col>
                        <Col>
                          <ULStyled>
                            <LiStyled>Giving small talks in Business English</LiStyled>
                            <LiStyled>Socializing and networking</LiStyled>
                            <LiStyled>Leading meetings</LiStyled>
                            <LiStyled>Participating in discussion</LiStyled>
                            <LiStyled>Negotiation</LiStyled>
                            <LiStyled>Dealing with complaints</LiStyled>
                            <LiStyled>Telephoning</LiStyled>
                          </ULStyled>
                        </Col>
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

BusinessEnglish.propTypes = {
  lang: PropTypes.string
};

export default BusinessEnglish;
