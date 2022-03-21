/* eslint-disable */
import React, { useState } from 'react';
import styled from 'styled-components';
import { Card, Col, Container, Form, Modal, Row } from 'react-bootstrap';
import { PrimaryColor } from '../../Assets/colorPalette';
import ImgChoose from '../../Assets/Images/choose.png';
import { useTranslation } from 'react-i18next';
import ProgramDetailModalContainer from '../Home/OurPrograms/ProgramDetailModal/ProgramDetailModal.container';
import { ButtonPrimaryComponent } from '../Home/Home.styled';
import { ROUTE_BUSINESS_ENGLISH } from '../../Assets/utils';

const ContainerStyled = styled(Container)`
  margin-top: 5vw;
  margin-bottom: 5vw;
  min-height: 30.5vw;
`;

const Title = styled.h2`
  color: ${PrimaryColor};
  font-weight: bolder;
`;

const SecondTitle = styled.h4`
  color: ${PrimaryColor};
  font-weight: bolder;
`;

const CardStyled = styled(Card)`
  border: none;
  border-radius: 8px;
`;

const ProgramCard = styled.div`
  align-items: center;
  text-align: center;
  background-color: rgb(230, 239, 252);
  border-radius: 20px;
  padding: 1rem;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;

  @media (max-width: 1024px) {
    min-height: 10vw;
  }
`;

const FreeTrialContainer = () => {
  const { t } = useTranslation();

  const [show, setShow] = useState(false);
  const [program, setProgram] = useState('');
  const [isProgramSelected, setIsProgramSelected] = useState(false);
  const [isDateSelected, setIsDateSelected] = useState(false);

  console.log(program);

  const handleClose = () => {
    setShow(false);
    setProgram('');
  };

  const handleShow = () => setShow(true);

  return (
    <>
      {!isProgramSelected && (
        <ContainerStyled>
          <CardStyled className="p-5">
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
                        setProgram(ROUTE_BUSINESS_ENGLISH);
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
                <Row>
                  <Col xl={4} md={4} sm={12} className="mx-auto text-center">
                    <Title className="mb-4">Calendar Here</Title>
                    <ButtonPrimaryComponent
                      onClick={() => {
                        setIsDateSelected(true);
                      }}
                      color={PrimaryColor}>
                      Set Date
                    </ButtonPrimaryComponent>
                  </Col>
                </Row>
              </CardStyled>
            </ContainerStyled>
          )}
        </>
      )}

      {isDateSelected && (
        <Row>
          <Col md={5} xl={5} sm={12} className="mx-auto">
            <ContainerStyled className="mb-5">
              <CardStyled className="p-5">
                <SecondTitle className="mb-1 text-center">
                  Please fill in your contact details
                </SecondTitle>
                <hr />
                <Form className="mt-2">
                  <Form.Group className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Phone </Form.Label>
                    <Form.Control type="text" placeholder="+62XXX XXX" />
                  </Form.Group>
                  <div className="mt-4 text-center">
                    <ButtonPrimaryComponent
                      onClick={() => {
                        setIsDateSelected(true);
                      }}
                      color={PrimaryColor}>
                      SEND
                    </ButtonPrimaryComponent>
                  </div>
                </Form>
              </CardStyled>
            </ContainerStyled>
          </Col>
        </Row>
      )}

      <Modal className="rounded" show={show} onHide={handleClose} size="xl" centered>
        <Modal.Body>
          <ProgramDetailModalContainer />
          <div className="text-center mt-3 mb-4">
            <ButtonPrimaryComponent onClick={handleClose} color="grey">
              Close
            </ButtonPrimaryComponent>
            <ButtonPrimaryComponent
              onClick={() => {
                handleClose();
                setIsProgramSelected(true);
              }}
              color={PrimaryColor}>
              Try Now
            </ButtonPrimaryComponent>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default FreeTrialContainer;
