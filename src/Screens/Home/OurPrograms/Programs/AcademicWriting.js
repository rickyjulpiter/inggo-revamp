import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {
  ContainerStyled,
  H5,
  ImgBanner,
  LiStyled,
  ProgramDescription,
  RowContainer,
  ULStyled
} from '../ProgramDetail/ProgramDetail.styled';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import BannerIndonesia from '../../../../Assets/Images/new-banner/ACADEMIC-WRITING/IMG-0744.JPG';
import BannerEnglish from '../../../../Assets/Images/new-banner/ACADEMIC-WRITING/IMG-0747.JPG';
import WhyChooseUsContainer from '../../WhyChooseUs/WhyChooseUs.container';
import TestimonialsComponentContainer from '../../TestimonialsComponent/TestimonialsComponent.container';
import OurClientsContainer from '../../OurClients/OurClients.container';
import ContactContainer from '../../Contact/Contact.container';

const AcademicWriting = ({ lang }) => {
  const { t } = useTranslation();
  return (
    <>
      <ContainerStyled>
        <ImgBanner
          className="img-fluid"
          src={lang === 'id' ? BannerIndonesia : BannerEnglish}
          alt=""
        />
        <RowContainer>
          <Col xl={12} md={12} sm={12}>
            <Row>
              <Col xl={5} md={5} sm={5}>
                <ProgramDescription>{t('academicWritingDescription')}</ProgramDescription>
                <ProgramDescription>{t('academicWritingDescriptionSecond')}</ProgramDescription>
                <ProgramDescription>{t('academicWritingDescriptionThird')}</ProgramDescription>
              </Col>
              <Col xl={7} md={7} sm={7}>
                {lang === 'id' ? (
                  <Row>
                    <Col>
                      <H5>Anda akan belajar cara:</H5>
                      <ULStyled>
                        <LiStyled>Menulis sitasi</LiStyled>
                        <LiStyled>Menulis parafrasa</LiStyled>
                        <LiStyled>Membentuk argumen</LiStyled>
                        <LiStyled>
                          Menyisipkan student voice untuk memperkuat argument dalam esai Anda
                        </LiStyled>
                        <LiStyled>
                          Mengidentifikasi dan menggunakan sumber-sumber terpercaya seperti jurnal
                          dan buku bacaan
                        </LiStyled>
                      </ULStyled>
                    </Col>
                    <Col>
                      <H5>Anda akan mendapatkan</H5>
                      <ULStyled>
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
                        <LiStyled>Citing</LiStyled>
                        <LiStyled>Paraphrasing</LiStyled>
                        <LiStyled>Building arguments</LiStyled>
                        <LiStyled>
                          Inserting student voice to strengthen your arguments in your essay
                        </LiStyled>
                        <LiStyled>
                          Identifying and using reliable sources, such as journal and text books
                        </LiStyled>
                      </ULStyled>
                    </Col>
                    <Col>
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
