/* eslint-disable */
import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';

import SectionTitle from '../../../SectionTitle';
import { updatePostTestWritingAnswer } from '../../../../../../Redux/handleAnswer';

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
              Every year several languages die out. Some people think that this is not important
              because life will be easier if there are fewer languages in the world.
            </b>
          </h6>
          <h6>
            <b>To what extent do you agree or disagree with this opinion?</b>
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
                  updatePostTestWritingAnswer({
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
