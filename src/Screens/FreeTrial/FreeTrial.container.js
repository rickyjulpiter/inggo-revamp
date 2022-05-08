/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Col, Modal, Row } from 'react-bootstrap';
import { InlineWidget } from 'react-calendly';
import { useTranslation } from 'react-i18next';

import { PrimaryColor, SecondaryColor } from '../../Assets/colorPalette';
import ImgChoose from '../../Assets/Images/choose.png';
import ProgramDetailModalContainer from '../Home/OurPrograms/ProgramDetailModal/ProgramDetailModal.container';
import ButtonComponent from '../../Components/Button/Button.component';
import { CardStyled, ContainerStyled, ProgramCard, Title } from './FreeTrial.styled';
import { FloatingImage } from '../Home/Home.styled';
import Playfull3 from '../../Assets/Images/playfull/playfull3.png';
import Playfull2 from '../../Assets/Images/playfull/playfull2.png';
import Playfull1 from '../../Assets/Images/playfull/playfull1.png';

const FreeTrialContainer = () => {
  const { t } = useTranslation();

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
      <div className="t_two p_absoulte">
        <FloatingImage className="layer layer2" data-depth="0.30" src={Playfull2} alt="" />
      </div>
      <div className="t_first p_absoulte">
        <FloatingImage className="layer layer2" data-depth="0.30" src={Playfull1} alt="" />
      </div>
    </>
  );

  return (
    <>
      {!isProgramSelected && (
        <ContainerStyled>
          <div className="t_four p_absoulte">
            <FloatingImage className="layer layer2" data-depth="0.30" src={Playfull3} alt="" />
          </div>
          <CardStyled className="p-5">
            <PlayFull />
            <Row>
              <Col md={4} sm={4} xl={4}>
                <img src={ImgChoose} alt="img" className="img-fluid rounded" />
              </Col>
              <Col md={8} sm={8} xl={8}>
                <Title>Welcome to our Free Trial Programs</Title>
                <p className="mt-4">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien
                  vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.
                </p>
                <Row className="mt-5">
                  <Col md={4} xl={4} sm={6} className="mb-2">
                    <ProgramCard
                      onClick={() => {
                        handleShow();
                        setProgram('Bahasa Inggris Bisnis');
                      }}>
                      {t('businessEnglish')}
                    </ProgramCard>
                  </Col>
                  <Col md={4} xl={4} sm={6} className="mb-2">
                    <ProgramCard>{t('academicWriting')}</ProgramCard>
                  </Col>
                  <Col md={4} xl={4} sm={6} className="mb-2">
                    <ProgramCard>{t('ielts')}</ProgramCard>
                  </Col>
                  <Col md={4} xl={4} sm={6} className="mb-2">
                    <ProgramCard>{t('toefl')}</ProgramCard>
                  </Col>
                  <Col md={4} xl={4} sm={6} className="mb-2">
                    <ProgramCard>{t('generalEnglish')}</ProgramCard>
                  </Col>
                </Row>
              </Col>
            </Row>
          </CardStyled>
        </ContainerStyled>
      )}

      {!isDateSelected && (
        <>
          {isProgramSelected && (
            <ContainerStyled className="mb-5">
              <CardStyled className="p-5">
                <div>
                  <ButtonComponent
                    text="Back to class"
                    handleClick={() => setIsProgramSelected(false)}
                    color={SecondaryColor}
                  />
                </div>
                <Row>
                  <Col xl={4} md={4} sm={12} className="mx-auto text-center">
                    <Title className="mb-4">Choose Schedule</Title>
                    <InlineWidget url="https://calendly.com/inggo_co/trial" />
                  </Col>
                </Row>
              </CardStyled>
            </ContainerStyled>
          )}
        </>
      )}
      <Modal className="rounded" show={show} onHide={handleClose} size="xl" centered>
        <Modal.Body>
          <ProgramDetailModalContainer />
          <div className="mt-3 mb-4" style={{ textAlign: 'right' }}>
            <ButtonComponent color="grey" handleClick={handleClose} text="Close" />
            <ButtonComponent
              color={PrimaryColor}
              handleClick={() => {
                handleClose();
                setIsProgramSelected(true);
              }}
              text="Try Now"
            />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default FreeTrialContainer;
