/* eslint-disable */
import { Form } from 'react-bootstrap';
import { updateAnswer } from '../../../../../Redux/handleAnswer';
import React from 'react';

const No1 = ({ dispatch, getAnswers }) => {
  return (
    <div>
      <p className="mt-2">1. What kind of shop is it?</p>
      <div className="mb-3">
        <Form
          onChange={(event) => {
            const {
              target: { value }
            } = event;
            dispatch(updateAnswer({ ...getAnswers, 1: value }));
          }}>
          <Form.Check
            label="A. a ladies’ dress shop"
            name="group1"
            type="radio"
            value="a"
            id={`inline-radio-1`}
          />
          <Form.Check
            label="B. a department store"
            name="group1"
            type="radio"
            value="b"
            id={`inline-radio-2`}
          />
          <Form.Check
            label="C. a children's clothes shop"
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

export default No1;
