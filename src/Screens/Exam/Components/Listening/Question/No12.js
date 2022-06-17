/* eslint-disable */
import { Form } from 'react-bootstrap';
import { updateAnswer } from '../../../../../Redux/handleAnswer';
import React from 'react';

const No12 = ({ dispatch, getAnswers }) => {
  return (
    <div>
      <p className="mt-2">12. The newest sports facility in the hotel is</p>
      <div className="mb-3">
        <Form
          onChange={(event) => {
            const {
              target: { value }
            } = event;
            dispatch(updateAnswer({ ...getAnswers, 12: value }));
          }}>
          <Form.Check
            label="A. a swimming pool."
            name="group1"
            type="radio"
            value="a"
            id={`inline-radio-1`}
            defaultChecked={getAnswers[12] === 'a'}
          />
          <Form.Check
            label="B. a fitness centre."
            name="group1"
            type="radio"
            value="b"
            id={`inline-radio-2`}
            defaultChecked={getAnswers[12] === 'b'}
          />
          <Form.Check
            label="C. a tennis court."
            name="group1"
            type="radio"
            value="c"
            id={`inline-radio-3`}
            defaultChecked={getAnswers[12] === 'c'}
          />
        </Form>
      </div>
    </div>
  );
};

export default No12;
