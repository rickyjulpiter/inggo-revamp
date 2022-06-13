/* eslint-disable */
import React from 'react';
import { CardTest } from '../../style';
import { LiStyled, ULStyled } from '../../../Home/OurPrograms/ProgramDetail/ProgramDetail.styled';
import { Button, Col } from 'react-bootstrap';

const InstructionsComponent = ({ start }) => {
  return (
    <Col>
      <CardTest>
        <h3>IELTS Listening</h3>
        <h6>Time: Approximately 30 minutes</h6>

        <br />
        <h5>INSTRUCTIONS TO CANDIDATES</h5>
        <h6>
          <ULStyled>
            <LiStyled>
              Answer <b>all</b> the questions.
            </LiStyled>
            <LiStyled>You can change your answers at any time during the test.</LiStyled>
          </ULStyled>
        </h6>

        <h5>INFORMATION FOR CANDIDATES</h5>
        <ULStyled>
          <LiStyled>There are 40 questions in this test.</LiStyled>
          <LiStyled>Each question carries one mark.</LiStyled>
          <LiStyled>There are four parts to the test.</LiStyled>
          <LiStyled>
            Please note you will only hear each part once in your actual test. However, for
            familiarisation and practice purposes, this familiarisation test will allow you to
            listen to each recording multiple times.
          </LiStyled>
          <LiStyled>
            For each part of the test there will be time for you to look through the questions and
            time for you to check your answers.
          </LiStyled>
        </ULStyled>

        <Button variant="secondary" type="submit" className="mt-2" onClick={start}>
          Start
        </Button>
      </CardTest>
    </Col>
  );
};

export default InstructionsComponent;
