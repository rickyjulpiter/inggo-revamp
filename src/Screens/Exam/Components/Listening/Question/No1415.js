/* eslint-disable */
import React, { useState } from 'react';
import { updateAnswer } from '../../../../../Redux/handleAnswer';
import { Form } from 'react-bootstrap';

const No1415 = ({ dispatch, getAnswers }) => {
  const [answer, setAnswer] = useState([]);

  const checkIfExists = (value) => {
    return answer?.includes(value);
  };

  const isChecked = (value) => {
    const isExists = checkIfExists(value);
    if (isExists) {
      const filteredArray = answer.filter((e) => e !== value);
      setAnswer(filteredArray);
    }
    if (!isExists) {
      if (answer?.length > 1) {
        alert('Maximal 2 answer for this question!');
      } else {
        setAnswer([...answer, value]);
        dispatch(updateAnswer({ ...getAnswers, 14: [...answer, value] }));
      }
    }
  };

  return (
    <div>
      <h6>
        Choose <b>TWO</b> letters, <b>A-E</b>
      </h6>
      <p>Which TWO business facilities are mentioned?</p>
      <Form>
        <Form.Check
          label="A. internet access"
          name="group1"
          type="checkbox"
          value="a"
          checked={checkIfExists('a')}
          id={`inline-checkbox-1`}
          onChange={(e) => isChecked(e.target.value)}
        />
        <Form.Check
          label="B. mobile phone hire"
          name="group1"
          type="checkbox"
          value="b"
          checked={checkIfExists('b')}
          id={`inline-checkbox-2`}
          onChange={(e) => isChecked(e.target.value)}
        />
        <Form.Check
          label="C. audio-visual facilities"
          name="group1"
          type="checkbox"
          value="c"
          checked={checkIfExists('c')}
          id={`inline-checkbox-3`}
          onChange={(e) => isChecked(e.target.value)}
        />
        <Form.Check
          label="D. airport transport"
          name="group1"
          type="checkbox"
          value="d"
          checked={checkIfExists('d')}
          id={`inline-checkbox-4`}
          onChange={(e) => isChecked(e.target.value)}
        />
        <Form.Check
          label="E. translation services"
          name="group1"
          type="checkbox"
          value="e"
          checked={checkIfExists('e')}
          id={`inline-checkbox-5`}
          onChange={(e) => isChecked(e.target.value)}
        />
      </Form>
    </div>
  );
};

export default No1415;
