/* eslint-disable */
import React from 'react';
import { Form } from 'react-bootstrap';

import SectionTitle from '../../SectionTitle';
import { updateWritingAnswer } from '../../../../../Redux/handleAnswer';

const SecondSectionWritingComponent = ({ dispatch, getAnswers }) => {
  return (
    <div>
      <SectionTitle title="Academic Writing Part 2" />

      <p>You should spend about 0 minutes on this task. Write at least 250 words.</p>
      <p>Write about the following topic:</p>
      <h5 className="text-center">
        <b>
          Buying things on the Internet, such as books, air tickets and groceries, is becoming more
          and more popular. <br /> Do the advantages of shopping this way outweigh the
          disadvantages?
        </b>
      </h5>

      <p className="mt-4">
        Give reasons for your answer and include any relevant examples from your own knowledge and
        experience.
      </p>

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
    </div>
  );
};

export default SecondSectionWritingComponent;
