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
          <ProgramTitle>{t('toeflDetail')}</ProgramTitle>
          <ProgramDescription>{t('toeflDescription')}</ProgramDescription>
          <ProgramDescription>{t('toeflDescriptionSecond')}</ProgramDescription>

          {lang === 'id' ? (
            <Row>
              <Col>
                <H5>Anda akan belajar tentang:</H5>
                <h6>
                  <b>TOEFL iBT</b>
                </h6>
                <ULStyled>
                  <LiStyled>
                    Strategi yang berguna untuk menjawab berbagai jenis pertanyaan Listening,
                    Reading, Writing, dan Speaking
                  </LiStyled>
                  <LiStyled>Listening (main idea, detail, purpose, organization, imply)</LiStyled>
                  <LiStyled>
                    Reading (vocabulary, detail, purpose, negative factual information, essential
                    information, reference, and inference, insert a sentence, complete the
                    summary/table)
                  </LiStyled>
                  <LiStyled>
                    Speaking (independent task, read/listen/speak, listen and speak
                  </LiStyled>
                  <LiStyled>Writing (integrated and independent tasks)</LiStyled>
                </ULStyled>

                <h6>
                  <b>TOEFL ITP</b>
                </h6>
                <ULStyled>
                  <LiStyled>
                    Strategi yang berguna untuk menjawab berbagai jenis pertanyaan Listening,
                    Structure and Written Expressions, Reading
                  </LiStyled>
                  <LiStyled>
                    Listening (synonyms, similar sounds, drawing conclusions, negative and various
                    expressions)
                  </LiStyled>
                  <LiStyled>
                    Structure and Written Expressions (one-clause and multiple-clause sentences,
                    reduced clauses, sentences with inverted subjects and verbs, subject-verb
                    agreement)
                  </LiStyled>
                  <LiStyled>
                    Reading (main idea of the text, the organization of ideas, implicit and explicit
                    answers)
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
                <h6>
                  <b>TOEFL iBT</b>
                </h6>
                <ULStyled>
                  <LiStyled>
                    Useful strategies to deal with numerous question types in Listening, Reading,
                    Writing, and Speaking
                  </LiStyled>
                  <LiStyled>Listening (main idea, detail, purpose, organization, imply)</LiStyled>
                  <LiStyled>
                    Reading (vocabulary, detail, purpose, negative factual information, essential
                    information, reference, and inference, insert a sentence, complete the
                    summary/table)
                  </LiStyled>
                  <LiStyled>
                    Speaking (independent task, read/listen/speak, listen and speak
                  </LiStyled>
                  <LiStyled>Writing (integrated and independent tasks)</LiStyled>
                </ULStyled>

                <h6>
                  <b>TOEFL ITP</b>
                </h6>
                <ULStyled>
                  <LiStyled>
                    Useful strategies to deal with numerous question types in Listening, Structure
                    and Written Expressions, Reading
                  </LiStyled>
                  <LiStyled>
                    Listening (synonyms, similar sounds, drawing conclusions, negative and various
                    expressions)
                  </LiStyled>
                  <LiStyled>
                    Structure and Written Expressions (one-clause and multiple-clause sentences,
                    reduced clauses, sentences with inverted subjects and verbs, subject-verb
                    agreement)
                  </LiStyled>
                  <LiStyled>
                    Reading (main idea of the text, the organization of ideas, implicit and explicit
                    answers)
                  </LiStyled>
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
