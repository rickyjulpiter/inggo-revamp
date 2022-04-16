import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {
  ContainerStyled,
  H5, ImgBanner,
  LiStyled,
  ProgramDescription,
  ULStyled
} from '../ProgramDetail/ProgramDetail.styled';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import BannerIndonesia from '../../../../Assets/Images/new-banner/GENERAL-ENGLISH/INGGO_REV_APR_2022_bahasa_inggris_umum_biru.png';
import BannerEnglish from '../../../../Assets/Images/new-banner/GENERAL-ENGLISH/INGGO_REV_APR_2022_general_english_biru.png';
import WhyChooseUsContainer from '../../WhyChooseUs/WhyChooseUs.container';
import TestimonialsComponentContainer from '../../TestimonialsComponent/TestimonialsComponent.container';
import OurClientsContainer from '../../OurClients/OurClients.container';
import ContactContainer from '../../Contact/Contact.container';

const GeneralEnglish = ({ lang }) => {
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
                <ProgramDescription>{t('generalEnglishDescription')}</ProgramDescription>
                <ProgramDescription>{t('generalEnglishDescriptionSecond')}</ProgramDescription>
              </Col>
              <Col xl={6} md={6} sm={6}>
                {lang === 'id' ? (
                  <Row>
                    <Col>
                      <H5>Anda akan belajar tentang:</H5>
                      <ULStyled>
                        <LiStyled>Lesson 1: Personal details</LiStyled>
                        <LiStyled>Lesson 2: Country and Languages</LiStyled>
                        <LiStyled>Lesson 3: Gadgets</LiStyled>
                        <LiStyled>Lesson 4: Small talk</LiStyled>
                        <LiStyled>Lesson 5: Interests</LiStyled>
                        <LiStyled>Lesson 6: Lifelong learning</LiStyled>
                        <LiStyled>Lesson 7: Memorable Encounter</LiStyled>
                        <LiStyled>Lesson 8: Uncommon Jobs</LiStyled>
                      </ULStyled>
                    </Col>
                    <Col>
                      <H5>Anda akan mendapatkan</H5>
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
                    <Col>
                      <H5>You will learn about:</H5>
                      <ULStyled>
                        <LiStyled>Lesson 1: Personal details</LiStyled>
                        <LiStyled>Lesson 2: Country and Languages</LiStyled>
                        <LiStyled>Lesson 3: Gadgets</LiStyled>
                        <LiStyled>Lesson 4: Small talk</LiStyled>
                        <LiStyled>Lesson 5: Interests</LiStyled>
                        <LiStyled>Lesson 6: Lifelong learning</LiStyled>
                        <LiStyled>Lesson 7: Memorable Encounter</LiStyled>
                        <LiStyled>Lesson 8: Uncommon Jobs</LiStyled>
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

GeneralEnglish.propTypes = {
  lang: PropTypes.string
};

export default GeneralEnglish;
