/* eslint-disable */
import { updateAnswer } from '../../../../../Redux/handleAnswer';
import React from 'react';

const No8 = ({ dispatch, getAnswers }) => {
  return (
    <tr>
      <td>Boss's name:</td>
      <td>
        <b>8</b>{' '}
        <input
          style={{ border: 'none' }}
          onChange={(event) => {
            dispatch(
              updateAnswer({
                ...getAnswers,
                8: event.target.value
              })
            );
          }}
        />
      </td>
    </tr>
  );
};

export default No8;
