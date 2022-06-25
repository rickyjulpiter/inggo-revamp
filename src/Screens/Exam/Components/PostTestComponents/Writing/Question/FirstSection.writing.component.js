/* eslint-disable */
import React from 'react';

import SectionTitle from '../../../SectionTitle';
import { Col, Form, Row } from 'react-bootstrap';

import image from '../../../../../../Assets/Images/post_test_writing_1.png';
import { updatePostTestWritingAnswer } from '../../../../../../Redux/handleAnswer';

const FirstSectionWritingComponent = ({ dispatch, getAnswers }) => {
  return (
    <div>
      <SectionTitle title="Academic Writing Part 1" />
      <Row>
        <Col>
          <p>You should spend about 20 minutes on this task. Write at least 150 words.</p>
          <p>
            <b>
              The charts below show the percentage of water used for different purposes in six areas
              of the world.
            </b>
          </p>
          <p>
            Summarise the information by selecting and reporting the main features, and make
            comparisons where relevant.
          </p>
          <img
            src={image}
            alt="writing image first test"
            className="img-fluid text-center"
            style={{ width: '100%' }}
          />
        </Col>
        <Col>
          <Form
            onChange={(event) => {
              dispatch(
                updatePostTestWritingAnswer({
                  ...getAnswers,
                  1: event.target.value
                })
              );
            }}>
            <Form.Group className="mb-3" controlId="form.ControlTextarea1">
              <Form.Control as="textarea" rows={19} />
            </Form.Group>
          </Form>
          <small>{getAnswers[1].length} words</small>
        </Col>
      </Row>
    </div>
  );
};

export default FirstSectionWritingComponent;
