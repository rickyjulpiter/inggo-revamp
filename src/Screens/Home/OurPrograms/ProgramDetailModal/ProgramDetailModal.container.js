/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
// noinspection ES6UnusedImports
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import propTypes from 'prop-types';
import {
  ContainerStyled,
  ImgStyled,
  LiStyled,
  ProgramDescription,
  ProgramTitle,
  ULStyled
} from './ProgramDetailModal.styled';
import {
  ROUTE_ACADEMIC_WRITING,
  ROUTE_BUSINESS_ENGLISH,
  ROUTE_ENGLISH_CONVERSATION,
  ROUTE_GENERAL_ENGLISH,
  ROUTE_IELTS,
  ROUTE_TOEFL
} from '../../../../Assets/utils';
import BusinessEnglishBalloon from '../../../../Assets/Images/new-banner/BUSINESS-ENGLISH/INGGO_business_english_lingkaran_biru.png';
import AcademicWritingBalloon from '../../../../Assets/Images/new-banner/ACADEMIC-WRITING/INGGO_academic_writing_lingkaran_merah.png';
import EnglishConversationBalloon from '../../../../Assets/Images/new-banner/ENGLISH-CONVERSATION/INGGO_english_conversatin_lingkaran_biru.png';
import IELTSBalloon from '../../../../Assets/Images/new-banner/IELTS/INGGO_ielts_lingkaran_merah.png';
import TOEFLBalloon from '../../../../Assets/Images/new-banner/TOEFL/INGGO_toefl_lingkaran_biru.png';
import GeneralEnglishBalloon from '../../../../Assets/Images/new-banner/GENERAL-ENGLISH/INGGO_general_english_lingkaran_merah.png';
import { H5 } from '../ProgramDetail/ProgramDetail.styled';

const ProgramDetailModalContainer = ({ program, lang }) => {
  const { t } = useTranslation();

  const BannerDisplay = () => {
    if (program === ROUTE_BUSINESS_ENGLISH) {
      return BusinessEnglishBalloon;
    }
    if (program === ROUTE_ACADEMIC_WRITING) {
      return AcademicWritingBalloon;
    }
    if (program === ROUTE_ENGLISH_CONVERSATION) {
      return EnglishConversationBalloon;
    }
    if (program === ROUTE_IELTS) {
      return IELTSBalloon;
    }
    if (program === ROUTE_TOEFL) {
      return TOEFLBalloon;
    }
    if (program === ROUTE_GENERAL_ENGLISH) {
      return GeneralEnglishBalloon;
    }
  };

  const TitleDisplay = () => {
    if (program === ROUTE_BUSINESS_ENGLISH) {
      return (
        <>
          <ProgramTitle>{t('businessEnglish')}</ProgramTitle>
          <ProgramDescription>{t('businessEnglishDescription')}</ProgramDescription>
          {lang === 'id' ? (
            <>
              <H5>Anda akan belajar cara:</H5>
              <Row>
                <Col>
                  <ULStyled>
                    <LiStyled>Memperkenalkan diri dalam konteks bisnis</LiStyled>
                    <LiStyled>Menghadapi wawancara kerja</LiStyled>
                    <LiStyled>Memberikan presentasi</LiStyled>
                    <LiStyled>Menulis email</LiStyled>
                    <LiStyled>Menulis proposal</LiStyled>
                    <LiStyled>Menulis laporan singkat</LiStyled>
                    <LiStyled>Menjelaskan grafik</LiStyled>
                  </ULStyled>
                </Col>
                <Col>
                  <ULStyled>
                    <LiStyled>Berbasa-basi dalam konteks bisnis</LiStyled>
                    <LiStyled>Bersosialisasi dan membangun relasi</LiStyled>
                    <LiStyled>Memimpin pertemuan</LiStyled>
                    <LiStyled>Berpartisipasi dalam diskusi</LiStyled>
                    <LiStyled>Bernegosiasi</LiStyled>
                    <LiStyled>Menangani keluhan</LiStyled>
                    <LiStyled>Menelepon</LiStyled>
                  </ULStyled>
                </Col>
              </Row>
            </>
          ) : (
            <>
              <H5>You will learn about:</H5>
              <Row>
                <Col>
                  <ULStyled>
                    <LiStyled>Introducing yourself in the business setting</LiStyled>
                    <LiStyled>Job interviews</LiStyled>
                    <LiStyled>Giving presentations</LiStyled>
                    <LiStyled>Writing emails</LiStyled>
                    <LiStyled>Writing proposals</LiStyled>
                    <LiStyled>Writing short reports</LiStyled>
                    <LiStyled>Explaining graphs and charts</LiStyled>
                  </ULStyled>
                </Col>
                <Col>
                  <ULStyled>
                    <LiStyled>Giving small talks in Business English</LiStyled>
                    <LiStyled>Socializing and networking</LiStyled>
                    <LiStyled>Leading meetings</LiStyled>
                    <LiStyled>Participating in discussion</LiStyled>
                    <LiStyled>Negotiation</LiStyled>
                    <LiStyled>Dealing with complaints</LiStyled>
                    <LiStyled>Telephoning</LiStyled>
                  </ULStyled>
                </Col>
              </Row>
            </>
          )}
        </>
      );
    }
    if (program === ROUTE_ACADEMIC_WRITING) {
      return (
        <>
          <ProgramTitle>{t('academicWriting')}</ProgramTitle>
          <ProgramDescription>{t('academicWritingDescription')}</ProgramDescription>
          {lang === 'id' ? (
            <>
              <H5>Anda akan belajar cara:</H5>
              <Row>
                <Col>
                  <ULStyled>
                    <LiStyled>Menulis sitasi</LiStyled>
                    <LiStyled>Menulis parafrasa</LiStyled>
                    <LiStyled>Membentuk argumen</LiStyled>
                    <LiStyled>
                      Menyisipkan student voice untuk memperkuat argument dalam esai Anda
                    </LiStyled>
                    <LiStyled>Menyusun kata kunci dalam pencarian referensi yang relevan</LiStyled>
                    <LiStyled>
                      Mengidentifikasi dan menggunakan sumber-sumber terpercaya seperti jurnal dan
                      buku bacaan
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
            </>
          ) : (
            <>
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
                      Identifying and using reliable sources, such as journal and text books
                    </LiStyled>
                  </ULStyled>
                </Col>
                <Col>
                  <ULStyled>
                    <LiStyled>Developing strategies for reading academic texts</LiStyled>
                    <LiStyled>Arranging argument structures</LiStyled>
                    <LiStyled>Developing details from main arguments in academic essays</LiStyled>
                    <LiStyled>Writing short essays</LiStyled>
                    <LiStyled>Avoiding plagiarism</LiStyled>
                  </ULStyled>
                </Col>
              </Row>
            </>
          )}
        </>
      );
    }
    if (program === ROUTE_ENGLISH_CONVERSATION) {
      return (
        <>
          <ProgramTitle>{t('englishConversation')}</ProgramTitle>
          <ProgramDescription>{t('englishConversationDescription')}</ProgramDescription>
          {lang === 'id' ? (
            <>
              <H5>Anda akan belajar tentang:</H5>
              <Row>
                <Col>
                  <ULStyled>
                    <LiStyled>Lesson 1: Personal details</LiStyled>
                    <LiStyled>Lesson 2: Expectations</LiStyled>
                    <LiStyled>Lesson 3: Studying/Working abroad</LiStyled>
                    <LiStyled>Lesson 4: Future goals</LiStyled>
                    <LiStyled>Lesson 5: Directions</LiStyled>
                    <LiStyled>Lesson 6: Foods around the world</LiStyled>
                  </ULStyled>
                </Col>
                <Col>
                  <ULStyled>
                    <LiStyled>Lesson 7: Traveling plans</LiStyled>
                    <LiStyled>Lesson 8: New Year’s resolutions</LiStyled>
                    <LiStyled>Lesson 9: University life</LiStyled>
                    <LiStyled>Lesson 10: Culture Shock</LiStyled>
                    <LiStyled>Lesson 11: Gadgets</LiStyled>
                    <LiStyled>Lesson 12: Social Media</LiStyled>
                  </ULStyled>
                </Col>
                <small>
                  <i>*topik dapat sewaktu-waktu berubah tanpa pemberitahuan.</i>
                </small>
              </Row>
            </>
          ) : (
            <>
              <H5>You will learn about:</H5>
              <Row>
                <Col>
                  <ULStyled>
                    <LiStyled>Lesson 1: Personal details</LiStyled>
                    <LiStyled>Lesson 2: Expectations</LiStyled>
                    <LiStyled>Lesson 3: Studying/Working abroad</LiStyled>
                    <LiStyled>Lesson 4: Future goals</LiStyled>
                    <LiStyled>Lesson 5: Directions</LiStyled>
                    <LiStyled>Lesson 6: Foods around the world</LiStyled>
                  </ULStyled>
                </Col>
                <Col>
                  <ULStyled>
                    <LiStyled>Lesson 7: Traveling plans</LiStyled>
                    <LiStyled>Lesson 8: New Year’s resolutions</LiStyled>
                    <LiStyled>Lesson 9: University life</LiStyled>
                    <LiStyled>Lesson 10: Culture Shock</LiStyled>
                    <LiStyled>Lesson 11: Gadgets</LiStyled>
                    <LiStyled>Lesson 12: Social Media</LiStyled>
                  </ULStyled>
                </Col>
                <small>
                  <i>*topics are subject to change without prior notice.</i>
                </small>
              </Row>
            </>
          )}
        </>
      );
    }
    if (program === ROUTE_IELTS) {
      return (
        <>
          <ProgramTitle>{t('ieltsDetail')}</ProgramTitle>
          <ProgramDescription>{t('ieltsDescription')}</ProgramDescription>
          {lang === 'id' ? (
            <>
              <Row>
                <H5>Anda akan belajar tentang:</H5>
                <Col>
                  <ULStyled>
                    <LiStyled>
                      Strategi yang berguna untuk menjawab berbagai jenis pertanyaan Listening,
                      Reading, Writing, dan Speaking
                    </LiStyled>
                    <LiStyled>
                      Listening (short-answer questions, labelling, multiple choice, dan matching)
                    </LiStyled>
                    <LiStyled>
                      Reading (short-answer questions, True/False/Not Given, multiple choice,
                      summary/table completion, headings)
                    </LiStyled>
                  </ULStyled>
                </Col>
                <Col>
                  <ULStyled>
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
              </Row>
            </>
          ) : (
            <Row>
              <H5>You will learn about:</H5>
              <Col>
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
                </ULStyled>
              </Col>
              <Col>
                <ULStyled>
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
            </Row>
          )}
        </>
      );
    }
    if (program === ROUTE_TOEFL) {
      return (
        <>
          <ProgramTitle>{t('toeflDetail')}</ProgramTitle>
          <ProgramDescription>{t('toeflDescription')}</ProgramDescription>
          {lang === 'id' ? (
            <>
              <H5>Anda akan belajar tentang:</H5>
              <h6>
                <b>TOEFL iBT</b>
              </h6>
              <ULStyled>
                <LiStyled>
                  Strategi yang berguna untuk menjawab berbagai jenis pertanyaan Listening, Reading,
                  Writing, dan Speaking
                </LiStyled>
                <LiStyled>Listening (main idea, detail, purpose, organization, imply)</LiStyled>
                <LiStyled>
                  Reading (vocabulary, detail, purpose, negative factual information, essential
                  information, reference, and inference, insert a sentence, complete the
                  summary/table)
                </LiStyled>
                <LiStyled>Speaking (independent task, read/listen/speak, listen and speak</LiStyled>
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
            </>
          ) : (
            <>
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
                <LiStyled>Speaking (independent task, read/listen/speak, listen and speak</LiStyled>
                <LiStyled>Writing (integrated and independent tasks)</LiStyled>
              </ULStyled>

              <h6>
                <b>TOEFL ITP</b>
              </h6>
              <ULStyled>
                <LiStyled>
                  Useful strategies to deal with numerous question types in Listening, Structure and
                  Written Expressions, Reading
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
            </>
          )}
        </>
      );
    }
    if (program === ROUTE_GENERAL_ENGLISH) {
      return (
        <>
          <ProgramTitle>{t('generalEnglish')}</ProgramTitle>
          <ProgramDescription>{t('generalEnglishDescription')}</ProgramDescription>
          {lang === 'id' ? (
            <>
              <H5>Anda akan belajar tentang:</H5>
              <Row>
                <Col>
                  <ULStyled>
                    <LiStyled>Lesson 1: Personal details</LiStyled>
                    <LiStyled>Lesson 2: Country and Languages</LiStyled>
                    <LiStyled>Lesson 3: Gadgets</LiStyled>
                    <LiStyled>Lesson 4: Small talk</LiStyled>
                    <LiStyled>Lesson 5: Interests</LiStyled>
                    <LiStyled>Lesson 6: Lifelong learning</LiStyled>
                  </ULStyled>
                </Col>
                <Col>
                  <ULStyled>
                    <LiStyled>Lesson 7: Memorable Encounter</LiStyled>
                    <LiStyled>Lesson 8: Uncommon Jobs</LiStyled>
                    <LiStyled>Lesson 9: Blockbuster movies</LiStyled>
                    <LiStyled>Lesson 10: Tertiary Education</LiStyled>
                    <LiStyled>Lesson 11: Religious holidays</LiStyled>
                    <LiStyled>Lesson 12: Friendships</LiStyled>
                  </ULStyled>
                </Col>
                <small>
                  <i>*topik dapat sewaktu-waktu berubah tanpa pemberitahuan.</i>
                </small>
              </Row>
            </>
          ) : (
            <>
              <H5>You will learn about:</H5>
              <Row>
                <Col>
                  <ULStyled>
                    <LiStyled>Lesson 1: Personal details</LiStyled>
                    <LiStyled>Lesson 2: Country and Languages</LiStyled>
                    <LiStyled>Lesson 3: Gadgets</LiStyled>
                    <LiStyled>Lesson 4: Small talk</LiStyled>
                    <LiStyled>Lesson 5: Interests</LiStyled>
                    <LiStyled>Lesson 6: Lifelong learning</LiStyled>
                  </ULStyled>
                </Col>
                <Col>
                  <ULStyled>
                    <LiStyled>Lesson 7: Memorable Encounter</LiStyled>
                    <LiStyled>Lesson 8: Uncommon Jobs</LiStyled>
                    <LiStyled>Lesson 9: Blockbuster movies</LiStyled>
                    <LiStyled>Lesson 10: Tertiary Education</LiStyled>
                    <LiStyled>Lesson 11: Religious holidays</LiStyled>
                    <LiStyled>Lesson 12: Friendships</LiStyled>
                  </ULStyled>
                </Col>
                <small>
                  {' '}
                  <i>*topics are subject to change without prior notice.</i>
                </small>
              </Row>
            </>
          )}
        </>
      );
    }
  };

  return (
    <ContainerStyled>
      <Row>
        <Col xl={3} md={3} sm={0} className="mb-3">
          <ImgStyled src={BannerDisplay()} className="img-fluid mt-5" alt="img" />
        </Col>
        <Col xl={9} md={9} sm={12}>
          <TitleDisplay />
        </Col>
      </Row>
    </ContainerStyled>
  );
};

ProgramDetailModalContainer.propTypes = {
  program: propTypes.string,
  lang: propTypes.string
};

export default ProgramDetailModalContainer;
