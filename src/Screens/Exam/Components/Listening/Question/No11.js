/* eslint-disable */
import { Form } from 'react-bootstrap';
import { updateAnswer } from '../../../../../Redux/handleAnswer';
import React from 'react';

const No11 = ({ dispatch, getAnswers }) => {
  return (
    <div>
      <p className="mt-2">11. The bridge hotel is located in?</p>
      <div className="mb-3">
        <Form
          onChange={(event) => {
            const {
              target: { value }
            } = event;
            dispatch(updateAnswer({ ...getAnswers, 11: value }));
          }}>
          <Form.Check
            label="A. the city centre."
            name="group1"
            type="radio"
            value="a"
            id={`inline-radio-1`}
            defaultChecked={getAnswers[11] === 'a'}
          />
          <Form.Check
            label="B. the country."
            name="group1"
            type="radio"
            value="b"
            id={`inline-radio-2`}
            defaultChecked={getAnswers[11] === 'b'}
          />
          <Form.Check
            label="C. the suburbs."
            name="group1"
            type="radio"
            value="c"
            id={`inline-radio-3`}
            defaultChecked={getAnswers[11] === 'c'}
          />
        </Form>
      </div>
    </div>
  );
};

export default No11;
