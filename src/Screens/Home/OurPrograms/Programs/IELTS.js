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
import BannerIndonesia from '../../../../Assets/Images/new-banner/IELTS/INGGO_REV_APR_2022_ielts_merah.png';
import BannerEnglish from '../../../../Assets/Images/new-banner/IELTS/INGGO_REV_APR_2022_ielts_merah.png';
import WhyChooseUsContainer from '../../WhyChooseUs/WhyChooseUs.container';
import TestimonialsComponentContainer from '../../TestimonialsComponent/TestimonialsComponent.container';
import OurClientsContainer from '../../OurClients/OurClients.container';
import ContactContainer from '../../Contact/Contact.container';

const IELTS = ({ lang }) => {
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
              <Col xl={4} md={4} sm={4}>
                <ProgramDescription>{t('ieltsDescription')}</ProgramDescription>
                <ProgramDescription>{t('ieltsDescriptionSecond')}</ProgramDescription>
              </Col>
              <Col xl={8} md={8} sm={8}>
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
                          Listening (short-answer questions, labelling, multiple choice, dan
                          matching)
                        </LiStyled>
                        <LiStyled>
                          Reading (short-answer questions, True/False/Not Given, multiple choice,
                          summary/table completion, headings)
                        </LiStyled>
                        <LiStyled>
                          Writing Task 1 (pie chart, bar graphs, maps, diagrams, dan tables)
                        </LiStyled>
                        <LiStyled>
                          Writing Task 2 (agree-disagree, advantages-disadvantages, discuss both
                          views, cause-solution, positive-negative, dan open questions)
                        </LiStyled>
                        <LiStyled>Speaking (part 1 to 3)</LiStyled>
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
                          Useful strategies to deal with numerous question types in Listening,
                          Reading, Writing, and Speaking
                        </LiStyled>
                        <LiStyled>
                          Listening (short-answer questions, labelling, multiple choice, dan
                          matching)
                        </LiStyled>
                        <LiStyled>
                          Reading (short-answer questions, True/False/Not Given, multiple choice,
                          summary/table completion, headings)
                        </LiStyled>
                        <LiStyled>
                          Writing Task 1 (pie chart, bar graphs, maps, diagrams, dan tables)
                        </LiStyled>
                        <LiStyled>
                          Writing Task 2 (agree-disagree, advantages-disadvantages, discuss both
                          views, cause-solution, positive-negative, dan open questions)
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

IELTS.propTypes = {
  lang: PropTypes.string
};

export default IELTS;
