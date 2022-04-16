import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {
  ContainerStyled,
  H5,
  ImgBanner,
  LiStyled,
  ProgramDescription,
  ULStyled
} from '../ProgramDetail/ProgramDetail.styled';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import BannerIndonesia from '../../../../Assets/Images/new-banner/BUSINESS-ENGLISH/INGGO_REV_APR_2022_bahasa_inggris_bisnis_biru.png';
import BannerEnglish from '../../../../Assets/Images/new-banner/BUSINESS-ENGLISH/INGGO_REV_APR_2022_business_english_biru.png';
import WhyChooseUsContainer from '../../WhyChooseUs/WhyChooseUs.container';
import TestimonialsComponentContainer from '../../TestimonialsComponent/TestimonialsComponent.container';
import OurClientsContainer from '../../OurClients/OurClients.container';
import ContactContainer from '../../Contact/Contact.container';

const BusinessEnglish = ({ lang }) => {
  const { t } = useTranslation();
  return (
    <>
      <ContainerStyled>
        <Row>
          <Col xl={12} md={12} sm={12}>
            <ImgBanner
              className="img-fluid"
              src={lang === 'id' ? BannerIndonesia : BannerEnglish}
              alt=""
            />
          </Col>
          <Col xl={12} md={12} sm={12}>
            <Row>
              <Col xl={6} md={6} sm={6}>
                <ProgramDescription>{t('businessEnglishDescription')}</ProgramDescription>
                <ProgramDescription>{t('businessEnglishDescriptionSecond')}</ProgramDescription>
              </Col>
              <Col xl={6} md={6} sm={6}>
                {lang === 'id' ? (
                  <Row>
                    <Col>
                      <H5>Anda akan belajar cara:</H5>
                      <ULStyled>
                        <LiStyled>Memberikan presentasi</LiStyled>
                        <LiStyled>Menulis email</LiStyled>
                        <LiStyled>Menulis proposal</LiStyled>
                        <LiStyled>Menulis laporan</LiStyled>
                        <LiStyled>Menjelaskan grafik</LiStyled>
                        <LiStyled>Berbasa-basi dalam konteks bisnis</LiStyled>
                      </ULStyled>
                    </Col>
                    <Col>
                      <H5>Anda akan mendapatkan</H5>
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
                    <Col>
                      <H5>You will learn about:</H5>
                      <ULStyled>
                        <LiStyled>Giving presentations</LiStyled>
                        <LiStyled>Writing emails</LiStyled>
                        <LiStyled>Writing proposals</LiStyled>
                        <LiStyled>Writing reports</LiStyled>
                        <LiStyled>Explaining graphs and charts</LiStyled>
                        <LiStyled>Giving small talks in Business English</LiStyled>
                      </ULStyled>
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
            </Row>
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
