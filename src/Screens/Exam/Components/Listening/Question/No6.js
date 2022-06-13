/* eslint-disable */
import { updateAnswer } from '../../../../../Redux/handleAnswer';
import React from 'react';

const No6 = ({ dispatch, getAnswers }) => {
  return (
    <tr>
      <td>Special staff benefits of 'perks':</td>
      <td>
        staff discount of <b>6</b>{' '}
        <input
          style={{ border: 'none' }}
          onChange={(event) => {
            dispatch(
              updateAnswer({
                ...getAnswers,
                6: event.target.value
              })
            );
          }}
        />{' '}
        on everything except sale goods
      </td>
    </tr>
  );
};

export default No6;
