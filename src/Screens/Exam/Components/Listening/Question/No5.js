/* eslint-disable */
import { updateAnswer } from '../../../../../Redux/handleAnswer';
import React from 'react';

const No5 = ({ dispatch, getAnswers }) => {
  return (
    <tr>
      <td>Staff training:</td>
      <td>
        held on the <b>5</b>{' '}
        <input
          style={{ border: 'none' }}
          value={getAnswers[5]}
          onChange={(event) => {
            dispatch(
              updateAnswer({
                ...getAnswers,
                5: event.target.value
              })
            );
          }}
        />{' '}
        of every month
      </td>
    </tr>
  );
};

export default No5;
