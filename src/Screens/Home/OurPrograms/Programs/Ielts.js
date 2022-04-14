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

const IELTS = ({ lang }) => {
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
          <ProgramTitle>{t('ieltsDetail')}</ProgramTitle>
          <ProgramDescription>{t('ieltsDescription')}</ProgramDescription>
          <ProgramDescription>{t('ieltsDescriptionSecond')}</ProgramDescription>

          {lang === 'id' ? (
            <Row>
              <Col>
                <H5>Anda akan belajar tentang:</H5>
                <ULStyled>
                  <LiStyled>
                    Strategi yang berguna untuk menjawab berbagai jenis pertanyaan Listening,
                    Reading, Writing, dan Speaking
                  </LiStyled>
                  <LiStyled>
                    Listening (short-answer questions, labelling, multiple choice, dan matching)
                  </LiStyled>
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
                  <LiStyled>
                    Useful strategies to deal with numerous question types in Listening, Reading,
                    Writing, and Speaking
                  </LiStyled>
                  <LiStyled>
                    Listening (short-answer questions, labelling, multiple choice, dan matching)
                  </LiStyled>
                  <LiStyled>
                    Reading (short-answer questions, True/False/Not Given, multiple choice,
                    summary/table completion, headings)
                  </LiStyled>
                  <LiStyled>
                    Writing Task 1 (pie chart, bar graphs, maps, diagrams, dan tables)
                  </LiStyled>
                  <LiStyled>
                    Writing Task 2 (agree-disagree, advantages-disadvantages, discuss both views,
                    cause-solution, positive-negative, dan open questions)
                  </LiStyled>
                  <LiStyled>Speaking (part 1 to 3)</LiStyled>
                </ULStyled>
              </Col>
              <Col>
                <H5>You will have and obtain:</H5>
                <ULStyled>
                  <LiStyled>Pre-test, progress test, post-test</LiStyled>
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

IELTS.propTypes = {
  lang: PropTypes.string
};

export default IELTS;
