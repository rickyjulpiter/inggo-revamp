/* eslint-disable */
import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';

import SectionTitle from '../../SectionTitle';
import image from '../../../../../Assets/Images/image_writing.png';
import { updateWritingAnswer } from '../../../../../Redux/handleAnswer';

const FirstSectionWritingComponent = ({ dispatch, getAnswers }) => {
  return (
    <div>
      <SectionTitle title="Academic Writing Part 1" />

      <Row>
        <Col>
          <p>You should spend about 20 minutes on this task.</p>
          <p>
            <b>The diagram below shows the process of using water to produce electricity</b>
          </p>

          <p>
            Summarise the information by selecting and reporting the main features, and make comparisons where relevant.
          </p>

          <p>Write at least 150 words.</p>
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
                updateWritingAnswer({
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
