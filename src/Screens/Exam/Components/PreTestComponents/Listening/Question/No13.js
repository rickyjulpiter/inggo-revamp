/* eslint-disable */
import { Form } from 'react-bootstrap';
import { updateAnswer } from '../../../../../../Redux/handleAnswer';
import React from 'react';

const No13 = ({ dispatch, getAnswers }) => {
  return (
    <div>
      <p className="mt-2">13. The hotel restaurant specializes in</p>
      <div className="mb-3">
        <Form
          onChange={(event) => {
            const {
              target: { value }
            } = event;
            dispatch(updateAnswer({ ...getAnswers, 13: value }));
          }}>
          <Form.Check
            label="A. healthy food."
            name="group1"
            type="radio"
            value="a"
            id={`inline-radio-1`}
            defaultChecked={getAnswers[13] === 'a'}
          />
          <Form.Check
            label="B. local food."
            name="group1"
            type="radio"
            value="b"
            id={`inline-radio-2`}
            defaultChecked={getAnswers[13] === 'b'}
          />
          <Form.Check
            label="C. international food."
            name="group1"
            type="radio"
            value="c"
            id={`inline-radio-3`}
            defaultChecked={getAnswers[13] === 'c'}
          />
        </Form>
      </div>
    </div>
  );
};

export default No13;
