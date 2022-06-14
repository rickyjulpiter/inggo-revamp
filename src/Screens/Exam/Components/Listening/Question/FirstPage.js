/* eslint-disable */
import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { Col, Form, Row, Table } from 'react-bootstrap';

import { No1, No10, No2, No3, No4, No5, No6, No7, No8, No9 } from './index';

const FirstPage = ({ dispatch, getAnswers, setPagination, track }) => {
  return (
    <div>
      <h3>
        <b>Section 1</b>
      </h3>
      <hr />
      <h5 className="text-center">
        <b> Questions 1-10</b>
      </h5>
      <ReactAudioPlayer
        src={track}
        autoPlay
        // controls={false}
        controls
        controlsList={'nodownload'}
        onEnded={() => {
          setPagination(2);
        }}
      />
      <h6>
        Choose the correct letter, <b>A</b>, <b>B</b> or <b>C</b>.
      </h6>

      <div>
        <i>Example</i>
        <p className="mt-2">Penny's interview took place</p>
        <div className="mb-3">
          <Form>
            <Form.Check label="A. yesterday" name="group1" type="radio" id={`inline-radio-1`} />
            <Form.Check label="B. last Week" name="group1" type="radio" id={`inline-radio-2`} />
            <Form.Check label="C. two Weeks Ago" name="group1" type="radio" id={`inline-radio-3`} />
          </Form>
        </div>
      </div>

      <h5 className="mt-4">
        <b> Questions 1-2</b>
      </h5>
      <Row>
        <Col>
          {/*Listening No.1*/}
          <No1 dispatch={dispatch} getAnswers={getAnswers} />
        </Col>
        <Col>
          {/*Listening No.2*/}
          <No2 dispatch={dispatch} getAnswers={getAnswers} />
        </Col>
      </Row>

      <h5 className="mt-4">
        <b> Questions 3-10</b>
      </h5>
      <h6>Complete the notes below.</h6>
      <h6>
        Write <b> NO MORE THAN TWO WORDS AND/OR A NUMBER </b>for each answer.
      </h6>
      <div>
        <Table borderless>
          <tbody>
            <tr>
              <td>Pay:</td>
              <td>$6.5 an hour</td>
            </tr>

            {/*Listening No.3*/}
            <No3 dispatch={dispatch} getAnswers={getAnswers} />

            {/*Listening No.4*/}
            <No4 dispatch={dispatch} getAnswers={getAnswers} />

            {/*Listening No.5*/}
            <No5 dispatch={dispatch} getAnswers={getAnswers} />

            {/*Listening No.6*/}
            <No6 dispatch={dispatch} getAnswers={getAnswers} />

            {/*Listening No.7*/}
            <No7 dispatch={dispatch} getAnswers={getAnswers} />

            {/*Listening No.8*/}
            <No8 dispatch={dispatch} getAnswers={getAnswers} />

            {/*Listening No.9*/}
            <No9 dispatch={dispatch} getAnswers={getAnswers} />

            {/*Listening No.10*/}
            <No10 dispatch={dispatch} getAnswers={getAnswers} />
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default FirstPage;
