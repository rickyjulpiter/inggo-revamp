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
import MobileBanner from '../../../../Assets/Images/new-banner/ACADEMIC-WRITING/INGGO_academic_writing_merah_mobile_english.png';
import DesktopBanner from '../../../../Assets/Images/new-banner/ACADEMIC-WRITING/INGGO_academic_writing_merah.png';

const AcademicWriting = ({ lang }) => {
  const { t } = useTranslation();
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
                <Row>
                  <Col xl={12} md={12} sm={12}>
                    <ProgramDescription>{t('academicWritingDescription')}</ProgramDescription>
                    <ProgramDescription>{t('academicWritingDescriptionSecond')}</ProgramDescription>
                    <ProgramDescription>{t('academicWritingDescriptionThird')}</ProgramDescription>
                  </Col>
                  <Col xl={12} md={12} sm={12}>
                    {lang === 'id' ? (
                      <Row>
                        <Col md={8}>
                          <H5>Anda akan belajar cara:</H5>
                          <Row>
                            <Col>
                              <ULStyled>
                                <LiStyled>Menulis sitasi</LiStyled>
                                <LiStyled>Menulis parafrasa</LiStyled>
                                <LiStyled>Membentuk argumen</LiStyled>
                                <LiStyled>
                                  Menyisipkan student voice untuk memperkuat argument dalam esai
                                  Anda
                                </LiStyled>
                                <LiStyled>
                                  Menyusun kata kunci dalam pencarian referensi yang relevan
                                </LiStyled>
                                <LiStyled>
                                  Mengidentifikasi dan menggunakan sumber-sumber terpercaya seperti
                                  jurnal dan buku bacaan
                                </LiStyled>
                              </ULStyled>
                            </Col>
                            <Col>
                              <ULStyled>
                                <LiStyled>Mengembangkan strategi membaca teks ilmiah</LiStyled>
                                <LiStyled>Menyusun struktur argumen</LiStyled>
                                <LiStyled>
                                  Mengembangkan gagasan dari argumen utama dalam esai akademik.
                                </LiStyled>
                                <LiStyled>Menulis esai singkat</LiStyled>
                                <LiStyled>Menghindari plagiarisme</LiStyled>
                              </ULStyled>
                            </Col>
                          </Row>
                        </Col>
                        <Col className="mt-3">
                          <H5>Anda akan mengikuti dan mendapatkan:</H5>
                          <ULStyled>
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
                                <LiStyled>Citing</LiStyled>
                                <LiStyled>Paraphrasing</LiStyled>
                                <LiStyled>Building arguments</LiStyled>
                                <LiStyled>
                                  Inserting student voice to strengthen your arguments in your essay
                                </LiStyled>
                                <LiStyled>
                                  Using appropriate keywords to search for relevant references
                                </LiStyled>
                                <LiStyled>
                                  Identifying and using reliable sources, such as journal and text
                                  books
                                </LiStyled>
                              </ULStyled>
                            </Col>
                            <Col>
                              <ULStyled>
                                <LiStyled>
                                  Developing strategies for reading academic texts
                                </LiStyled>
                                <LiStyled>Arranging argument structures</LiStyled>
                                <LiStyled>
                                  Developing details from main arguments in academic essays
                                </LiStyled>
                                <LiStyled>Writing short essays</LiStyled>
                                <LiStyled>Avoiding plagiarism</LiStyled>
                              </ULStyled>
                            </Col>
                          </Row>
                        </Col>
                        <Col className="mt-3">
                          <H5>You will have and obtain:</H5>
                          <ULStyled>
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

AcademicWriting.propTypes = {
  lang: PropTypes.string
};

export default AcademicWriting;
