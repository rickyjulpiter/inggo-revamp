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

const EnglishConversation = ({ lang }) => {
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
          <ProgramTitle>{t('englishConversation')}</ProgramTitle>
          <ProgramDescription>{t('englishConversationDescription')}</ProgramDescription>
          <ProgramDescription>{t('englishConversationDescriptionSecond')}</ProgramDescription>

          {lang === 'id' ? (
            <Row>
              <Col>
                <H5>Anda akan belajar tentang:</H5>
                <ULStyled>
                  <LiStyled>Lesson 1: Personal details</LiStyled>
                  <LiStyled>Lesson 2: Expectations</LiStyled>
                  <LiStyled>Lesson 3: Studying/Working abroad</LiStyled>
                  <LiStyled>Lesson 4: Future goals</LiStyled>
                  <LiStyled>Lesson 5: Directions</LiStyled>
                  <LiStyled>Lesson 6: Foods around the world</LiStyled>
                  <LiStyled>Lesson 7: Traveling plans</LiStyled>
                  <LiStyled>Lesson 8: New Year’s resolutions</LiStyled>
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
                  <LiStyled>Lesson 2: Expectations</LiStyled>
                  <LiStyled>Lesson 3: Studying/Working abroad</LiStyled>
                  <LiStyled>Lesson 4: Future goals</LiStyled>
                  <LiStyled>Lesson 5: Directions</LiStyled>
                  <LiStyled>Lesson 6: Foods around the world</LiStyled>
                  <LiStyled>Lesson 7: Traveling plans</LiStyled>
                  <LiStyled>Lesson 8: New Year’s resolutions</LiStyled>
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

EnglishConversation.propTypes = {
  lang: PropTypes.string
};

export default EnglishConversation;
