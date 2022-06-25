/* eslint-disable */
import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';

import SectionTitle from '../../../SectionTitle';
import { updateWritingAnswer } from '../../../../../../Redux/handleAnswer';

const SecondSectionWritingComponent = ({ dispatch, getAnswers }) => {
  return (
    <div>
      <SectionTitle title="Academic Writing Part 2" />

      <Row>
        <Col>
          <p>You should spend about 40 minutes on this task. Write at least 250 words.</p>
          <p>Write about the following topic:</p>
          <h6>
            <b>
              Nowadays, more people are choosing to socialise online than face-to-face. <br />
              Do the advantages of socialising online outweigh the disadvantages?
            </b>
          </h6>

          <p className="mt-4">
            Give reasons for your answer and include any relevant examples from your own knowledge
            and experience.
          </p>
        </Col>
        <Col>
          <div>
            <Form
              onChange={(event) => {
                dispatch(
                  updateWritingAnswer({
                    ...getAnswers,
                    2: event.target.value
                  })
                );
              }}>
              <Form.Group className="mb-3" controlId="form.ControlTextarea1">
                <Form.Control as="textarea" rows={19} />
              </Form.Group>
            </Form>
            <small>{getAnswers[2].length} words</small>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SecondSectionWritingComponent;
