import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Card, Col, Image, Row } from 'react-bootstrap';
import PutriImages from '../../Assets/Images/teachers/Putri.jpg';
import DisaImages from '../../Assets/Images/teachers/Disa.jpg';
import NiaImages from '../../Assets/Images/teachers/Nia.JPG';
import NisaImages from '../../Assets/Images/teachers/Nisa.jpeg';
import RiskaImages from '../../Assets/Images/teachers/Riska.jpg';
import DessyImages from '../../Assets/Images/teachers/Dessy.jpg';
import KomarImages from '../../Assets/Images/teachers/Komar.jpg';
import AndinImages from '../../Assets/Images/teachers/Andin.jpeg';
import MedImages from '../../Assets/Images/teachers/Med.jpeg';
import { WhiteColor } from '../../Assets/colorPalette';

const TeacherContainer = () => {
  const { t } = useTranslation();
  return (
    <>
      <ContainerStyled>
        <Title>{t('menuOurTeam')}</Title>
        <Row style={{ marginTop: '3vw' }}>
          <Col xl={3} md={3} sm={12} className="mx-auto">
            <TeacherCard>
              <center>
                <TeacherCardImage variant="top" src={PutriImages} />
              </center>
              <Card.Body>
                <TeacherCardTitle>Ms. Putri</TeacherCardTitle>
                <TeacherCardPosition>Founder</TeacherCardPosition>
                <TeacherCardSubject>MA TESOL - King’s College London</TeacherCardSubject>
              </Card.Body>
            </TeacherCard>
          </Col>
        </Row>
        <Row style={{ marginTop: '3vw' }}>
          <Col xl={3} md={3} sm={12} className="mx-auto">
            <TeacherCard>
              <center>
                <TeacherCardImage variant="top" src={DisaImages} />
              </center>
              <Card.Body>
                <TeacherCardTitle>Ms. Disa</TeacherCardTitle>
                <TeacherCardSubject>Applied Linguistics - New Zealand</TeacherCardSubject>
              </Card.Body>
            </TeacherCard>
          </Col>
          <Col xl={3} md={3} sm={12} className="mx-auto">
            <TeacherCard>
              <center>
                <TeacherCardImage variant="top" src={NiaImages} />
              </center>
              <Card.Body>
                <TeacherCardTitle>Ms. Nia</TeacherCardTitle>
                <TeacherCardSubject>TESOL - UK</TeacherCardSubject>
              </Card.Body>
            </TeacherCard>
          </Col>
          <Col xl={3} md={3} sm={12} className="mx-auto">
            <TeacherCard>
              <center>
                <TeacherCardImage variant="top" src={NisaImages} />
              </center>
              <Card.Body>
                <TeacherCardTitle>Ms. Nisa</TeacherCardTitle>
                <TeacherCardSubject>TESOL - Australia</TeacherCardSubject>
              </Card.Body>
            </TeacherCard>
          </Col>
          <Col xl={3} md={3} sm={12} className="mx-auto">
            <TeacherCard>
              <center>
                <TeacherCardImage variant="top" src={RiskaImages} />
              </center>
              <Card.Body>
                <TeacherCardTitle>Ms. Riska</TeacherCardTitle>
                <TeacherCardSubject>TESOL - UK</TeacherCardSubject>
              </Card.Body>
            </TeacherCard>
          </Col>
        </Row>

        <Row style={{ marginTop: '3vw' }}>
          <Col xl={3} md={3} sm={12} className="mx-auto">
            <TeacherCard>
              <center>
                <TeacherCardImage variant="top" src={DessyImages} />
              </center>
              <Card.Body>
                <TeacherCardTitle>Ms. Dessy</TeacherCardTitle>
                <TeacherCardSubject>TESOL - UK</TeacherCardSubject>
              </Card.Body>
            </TeacherCard>
          </Col>
          <Col xl={3} md={3} sm={12} className="mx-auto">
            <TeacherCard>
              <center>
                <TeacherCardImage variant="top" src={KomarImages} />
              </center>
              <Card.Body>
                <TeacherCardTitle>Mr. Komar</TeacherCardTitle>
                <TeacherCardSubject>Applied Linguistics - Australia</TeacherCardSubject>
              </Card.Body>
            </TeacherCard>
          </Col>
          <Col xl={3} md={3} sm={12} className="mx-auto">
            <TeacherCard>
              <center>
                <TeacherCardImage variant="top" src={AndinImages} />
              </center>
              <Card.Body>
                <TeacherCardTitle>Ms. Andin</TeacherCardTitle>
                <TeacherCardSubject>Journalism - Qatar</TeacherCardSubject>
              </Card.Body>
            </TeacherCard>
          </Col>
          <Col xl={3} md={3} sm={12} className="mx-auto">
            <TeacherCard>
              <center>
                <TeacherCardImage variant="top" src={MedImages} />
              </center>
              <Card.Body>
                <TeacherCardTitle>Ms. Med</TeacherCardTitle>
                <TeacherCardSubject>English Studies - Indonesia</TeacherCardSubject>
              </Card.Body>
            </TeacherCard>
          </Col>
        </Row>
      </ContainerStyled>
    </>
  );
};

const TeacherCard = styled(Card)`
  border-radius: 15px;
  border: none;
`;

const TeacherCardImage = styled(Image)`
  margin-top: 1vw;
  width: 150px;
  aspect-ratio: auto 150 / 150;
  height: 150px;
  text-align: center;
  border-radius: 50%;
  margin-bottom: 1vw;
  object-fit: cover;
`;

const TeacherCardTitle = styled(Card.Title)`
  text-align: center;
  font-weight: 600;
`;

const TeacherCardPosition = styled(Card.Text)`
  text-align: center;
  font-style: italic;
`;

const TeacherCardSubject = styled(Card.Text)`
  text-align: center;
  min-height: 3.5vw;
`;

const ContainerStyled = styled.div`
  padding: 2vw 8vw 8vw 8vw;
`;

export const Title = styled.h1`
  font-weight: 700;
  color: ${WhiteColor};
  margin-bottom: 1rem;
  text-align: center;
  margin-top: 2vw;
`;
export default TeacherContainer;
