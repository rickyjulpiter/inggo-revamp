/* eslint-disable */
import { updateAnswer } from '../../../../../Redux/handleAnswer';
import React from 'react';

const No9 = ({ dispatch, getAnswers }) => {
  return (
    <tr>
      <td>Duties:</td>
      <td>
        serve customers <br />
        <b>9</b>{' '}
        <input
          style={{ border: 'none' }}
          value={getAnswers[9]}
          onChange={(event) => {
            dispatch(
              updateAnswer({
                ...getAnswers,
                9: event.target.value
              })
            );
          }}
        />{' '}
        <br />
        check for shoplifters <br />
        check the stock
      </td>
    </tr>
  );
};

export default No9;
