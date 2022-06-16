/* eslint-disable */
import React from 'react';
import { Col, Row, Table } from 'react-bootstrap';

import { updateAnswer } from '../../../../../Redux/handleAnswer';
import AudioPlayer from '../AudioPlayer';

const FourthPage = ({ dispatch, getAnswers, setPagination, track }) => {
  return (
    <div>
      <AudioPlayer
        title="Section 4"
        track={track}
        ended={(page) => {
          setPagination(page);
        }}
      />
      <h5 className="text-center">
        <b> Questions 31-40</b>
      </h5>
      <h5>
        <b> Questions 31-33</b>
      </h5>
      <h6>Complete the sentences below.</h6>
      <h6>
        Write <b>NO MORE THAN THREE WORDS</b> for each answer
      </h6>
      <Row>
        <Col md={8}>
          <div>
            <p className="text-center mt-3">
              <b>Peregrine Falcons</b>
            </p>
            <p>
              <b>31</b> The Peregrine falcons found in{' '}
              <input
                style={{ border: 'none' }}
                onChange={(event) => {
                  dispatch(
                    updateAnswer({
                      ...getAnswers,
                      31: event.target.value
                    })
                  );
                }}
              />{' '}
              are not migratory birds.
            </p>
            <p>
              <b>32</b> There is disagreement about their maximum{' '}
              <input
                style={{ border: 'none' }}
                onChange={(event) => {
                  dispatch(
                    updateAnswer({
                      ...getAnswers,
                      32: event.target.value
                    })
                  );
                }}
              />
            </p>
            <p>
              <b>33</b> When the female is guarding the nest, the male spends most of his time{' '}
              <input
                style={{ border: 'none' }}
                onChange={(event) => {
                  dispatch(
                    updateAnswer({
                      ...getAnswers,
                      33: event.target.value
                    })
                  );
                }}
              />
            </p>
          </div>
        </Col>
      </Row>

      <h5 className="mt-4">
        <b> Questions 16-20</b>
      </h5>
      <h6>
        <i>Complete the table below.</i>
      </h6>
      <h6>
        Write <b>NO MORE THAN TWO WORDS AND OR A NUMBER</b> for each answer
      </h6>
      <Table borderless>
        <tbody>
          <tr>
            <td colSpan={2}>
              <b>Procedures used for field research on Peregrine falcon chick</b>
            </td>
          </tr>
          <tr>
            <td>First:</td>
            <td>catch chicks</td>
          </tr>
          <tr>
            <td>Second:</td>
            <td>
              <b>38</b>{' '}
              <input
                style={{ border: 'none' }}
                onChange={(event) => {
                  dispatch(
                    updateAnswer({
                      ...getAnswers,
                      38: event.target.value
                    })
                  );
                }}
              />{' '}
              to legs
            </td>
          </tr>
          <tr>
            <td>Third:</td>
            <td>
              <b>39</b>{' '}
              <input
                style={{ border: 'none' }}
                onChange={(event) => {
                  dispatch(
                    updateAnswer({
                      ...getAnswers,
                      39: event.target.value
                    })
                  );
                }}
              />{' '}
              of chicks
            </td>
          </tr>
          <tr>
            <td>Fo:</td>
            <td>take blood sample to assess the level of pesticide</td>
          </tr>
          <tr>
            <td>Fifth:</td>
            <td>
              check the <b>40</b>{' '}
              <input
                style={{ border: 'none' }}
                onChange={(event) => {
                  dispatch(
                    updateAnswer({
                      ...getAnswers,
                      40: event.target.value
                    })
                  );
                }}
              />{' '}
              of the birds
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default FourthPage;
