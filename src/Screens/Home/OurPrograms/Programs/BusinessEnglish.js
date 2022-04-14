import React from 'react';
import { FloatingImage } from '../../Home.styled';
import Playfull3 from '../../../../Assets/Images/playfull/playfull3.png';
import Playfull2 from '../../../../Assets/Images/playfull/playfull2.png';
import Playfull1 from '../../../../Assets/Images/playfull/playfull1.png';
import { Col, Row } from 'react-bootstrap';
import {
  ContainerStyled,
  H5,
  LiStyled,
  ProgramDescription,
  ProgramTitle,
  ULStyled
} from '../ProgramDetail/ProgramDetail.styled';
// import BusinessEnglishDetail from '../../../../Assets/Images/business_english_detail.png';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const BusinessEnglish = ({ lang }) => {
  const { t } = useTranslation();
  return (
    <ContainerStyled>
      <div className="t_four p_absoulte">
        <FloatingImage className="layer layer2" data-depth="0.30" src={Playfull3} alt="" />
      </div>
      <div className="t_two p_absoulte">
        <FloatingImage className="layer layer2" data-depth="0.30" src={Playfull2} alt="" />
      </div>
      <div className="t_first p_absoulte">
        <FloatingImage className="layer layer2" data-depth="0.30" src={Playfull1} alt="" />
      </div>
      <Row>
        {/*<Col xl={4} md={4} sm={0} className="mb-3">*/}
        {/*  <ImgStyled src={BusinessEnglishDetail} className="img-fluid" alt="img" />*/}
        {/*</Col>*/}
        <Col xl={12} md={12} sm={12}>
          <ProgramTitle>{t('businessEnglish')}</ProgramTitle>
          <ProgramDescription>{t('businessEnglishDescription')}</ProgramDescription>
          <ProgramDescription>{t('businessEnglishDescriptionSecond')}</ProgramDescription>

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
    </ContainerStyled>
  );
};

BusinessEnglish.propTypes = {
  lang: PropTypes.string
};

export default BusinessEnglish;
