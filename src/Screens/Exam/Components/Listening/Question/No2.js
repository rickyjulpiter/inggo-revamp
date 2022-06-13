/* eslint-disable */
import { Form } from 'react-bootstrap';
import { updateAnswer } from '../../../../../Redux/handleAnswer';
import React from 'react';

const No2 = ({ dispatch, getAnswers }) => {
  return (
    <div>
      <p className="mt-2">2. What is the name of the section Penny will be working in?</p>
      <div className="mb-3">
        <Form
          onChange={(event) => {
            const {
              target: { value }
            } = event;
            dispatch(updateAnswer({ ...getAnswers, 2: value }));
          }}>
          <Form.Check
            label="A. the Youngster"
            name="group1"
            type="radio"
            value="a"
            id={`inline-radio-1`}
          />
          <Form.Check
            label="B. the Young set"
            name="group1"
            type="radio"
            value="b"
            id={`inline-radio-2`}
          />
          <Form.Check
            label="C. the Young Set"
            name="group1"
            type="radio"
            value="c"
            id={`inline-radio-3`}
          />
        </Form>
      </div>
    </div>
  );
};

export default No2;
