/* eslint-disable */
import React, { useState } from 'react';
import { Col, Modal, Row } from 'react-bootstrap';
import { InlineWidget } from 'react-calendly';
import { useTranslation } from 'react-i18next';

import { PrimaryColor, SecondaryColor } from '../../Assets/colorPalette';
import ImgChoose from '../../Assets/Images/new-banner/BUSINESS-ENGLISH/INGGO_business_english_lingkaran_merah.png';
import ProgramDetailModalContainer from '../Home/OurPrograms/ProgramDetailModal/ProgramDetailModal.container';
import ButtonComponent from '../../Components/Button/Button.component';
import {
  CardStyled,
  ContainerStyled,
  ImageBanner,
  Paragraph,
  ProgramCard,
  Title
} from './FreeTrial.styled';
import { FloatingImage } from '../Home/Home.styled';
import Playfull3 from '../../Assets/Images/playfull/playfull3.png';
import Playfull2 from '../../Assets/Images/playfull/playfull2.png';
import Playfull1 from '../../Assets/Images/playfull/playfull1.png';
import {
  ROUTE_ACADEMIC_WRITING,
  ROUTE_BUSINESS_ENGLISH,
  ROUTE_ENGLISH_CONVERSATION,
  ROUTE_GENERAL_ENGLISH,
  ROUTE_IELTS,
  ROUTE_TOEFL
} from '../../Assets/utils';
import i18n from '../../Assets/Translations/i18n';
import WhyChooseUsContainer from '../Home/WhyChooseUs/WhyChooseUs.container';
import TestimonialsComponentContainer from '../Home/TestimonialsComponent/TestimonialsComponent.container';
import OurClientsContainer from '../Home/OurClients/OurClients.container';
import ContactContainer from '../Home/Contact/Contact.container';

const FreeTrialContainer = () => {
  const { t } = useTranslation();
  const lang = i18n.language;

  const [show, setShow] = useState(false);
  const [program, setProgram] = useState('');
  const [isProgramSelected, setIsProgramSelected] = useState(false);
  const [isDateSelected, setIsDateSelected] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const PlayFull = () => (
    <>
      {/*<div className="t_first p_absoulte">*/}
      {/*  <FloatingImage className="layer layer2" data-depth="0.30" src={Playfull1} alt="" />*/}
      {/*</div>*/}
    </>
  );

  return (
    <>
      <ContainerStyled>
        {!isProgramSelected && (
          <>
            <div className="t_four p_absoulte">
              <FloatingImage className="layer layer2" data-depth="0.30" src={Playfull3} alt="" />
            </div>
            <CardStyled>
              <PlayFull />
              <Row>
                <Col md={3} sm={3} xl={3} className="mx-auto">
                  <ImageBanner src={ImgChoose} alt="img" className="img-fluid rounded mt-4" />
                </Col>
                <Col md={9} sm={9} xl={9}>
                  <Title>{t('freeTrialClassTitle')}</Title>
                  <Paragraph>{t('freeTrialClassFirstDescription')}</Paragraph>
                  <Paragraph>{t('freeTrialClassSecondDescription')}</Paragraph>
                  <Row className="mt-5">
                    <Col md={4} xl={4} sm={6} className="mb-2">
                      <ProgramCard
                        onClick={() => {
                          handleShow();
                          setProgram(ROUTE_BUSINESS_ENGLISH);
                        }}>
                        {t('businessEnglish')}
                      </ProgramCard>
                    </Col>
                    {/*<Col md={4} xl={4} sm={6} className="mb-2">*/}
                    {/*  <ProgramCard*/}
                    {/*    onClick={() => {*/}
                    {/*      handleShow();*/}
                    {/*      setProgram(ROUTE_ACADEMIC_WRITING);*/}
                    {/*    }}>*/}
                    {/*    {t('academicWriting')}*/}
                    {/*  </ProgramCard>*/}
                    {/*</Col>*/}
                    <Col md={4} xl={4} sm={6} className="mb-2">
                      <ProgramCard
                        onClick={() => {
                          handleShow();
                          setProgram(ROUTE_ENGLISH_CONVERSATION);
                        }}>
                        {t('englishConversation')}
                      </ProgramCard>
                    </Col>
                    <Col md={4} xl={4} sm={6} className="mb-2">
                      <ProgramCard
                        onClick={() => {
                          handleShow();
                          setProgram(ROUTE_IELTS);
                        }}>
                        {t('ielts')}
                      </ProgramCard>
                    </Col>
                    <Col md={4} xl={4} sm={6} className="mb-2">
                      <ProgramCard
                        onClick={() => {
                          handleShow();
                          setProgram(ROUTE_TOEFL);
                        }}>
                        {t('toefl')}
                      </ProgramCard>
                    </Col>
                    <Col md={4} xl={4} sm={6} className="mb-2">
                      <ProgramCard
                        onClick={() => {
                          handleShow();
                          setProgram(ROUTE_GENERAL_ENGLISH);
                        }}>
                        {t('generalEnglish')}
                      </ProgramCard>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </CardStyled>
            <WhyChooseUsContainer />
            <TestimonialsComponentContainer />
            <OurClientsContainer />
            <ContactContainer />
          </>
        )}

        {!isDateSelected && (
          <>
            {isProgramSelected && (
              <CardStyled className="3-5">
                <div>
                  <ButtonComponent
                    text={t('back')}
                    handleClick={() => setIsProgramSelected(false)}
                    color={SecondaryColor}
                  />
                </div>
                <Row className="mt-5">
                  <Col xl={12} md={12} sm={12} className="mx-auto text-center">
                    <Title className="mb-4">{t('chooseSchedule')}</Title>
                    <InlineWidget
                      url="https://calendly.com/inggo_co/trial"
                      prefill={{
                        class: 'English',
                        email: 'test@test.com',
                      }}
                    />
                  </Col>
                </Row>
              </CardStyled>
            )}
          </>
        )}
      </ContainerStyled>

      <Modal className="rounded" show={show} onHide={handleClose} size="xl" centered>
        <Modal.Body>
          <ProgramDetailModalContainer program={program} lang={lang} />
          <div className="mt-3 mb-4" style={{ textAlign: 'right' }}>
            <ButtonComponent color={SecondaryColor} handleClick={handleClose} text={t('close')} />
            <ButtonComponent
              color={PrimaryColor}
              handleClick={() => {
                handleClose();
                setIsProgramSelected(true);
              }}
              text={t('tryNow')}
            />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default FreeTrialContainer;
