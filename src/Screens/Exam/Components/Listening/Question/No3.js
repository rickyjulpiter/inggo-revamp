/* eslint-disable */
import { updateAnswer } from '../../../../../Redux/handleAnswer';
import React from 'react';

const No3 = ({ dispatch, getAnswers }) => {
  return (
    <tr>
      <td>Breaks:</td>
      <td>
        one hour for lunch and <b>3</b>{' '}
        <input
          style={{ border: 'none' }}
          onChange={(event) => {
            dispatch(
              updateAnswer({
                ...getAnswers,
                3: event.target.value
              })
            );
          }}
        />{' '}
        coffee breaks
      </td>
    </tr>
  );
};

export default No3;
