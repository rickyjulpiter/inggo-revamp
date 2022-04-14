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
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const AcademicWriting = ({ lang }) => {
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
        <Col xl={12} md={12} sm={12}>
          <ProgramTitle>{t('academicWriting')}</ProgramTitle>
          <ProgramDescription>{t('academicWritingDescription')}</ProgramDescription>
          <ProgramDescription>{t('academicWritingDescriptionSecond')}</ProgramDescription>

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
                    Mengidentifikasi dan menggunakan sumber-sumber terpercaya seperti jurnal dan
                    buku bacaan
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
    </ContainerStyled>
  );
};

AcademicWriting.propTypes = {
  lang: PropTypes.string
};

export default AcademicWriting;
