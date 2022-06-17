/* eslint-disable */
import { updateAnswer } from '../../../../../Redux/handleAnswer';
import React from 'react';

const No10 = ({ dispatch, getAnswers }) => {
  return (
    <tr>
      <td>Expected to wear:</td>
      <td>
        a <b>10</b>{' '}
        <input
          style={{ border: 'none' }}
          value={getAnswers[10]}
          onChange={(event) => {
            dispatch(
              updateAnswer({
                ...getAnswers,
                10: event.target.value
              })
            );
          }}
        />
        , a red blouse <br />
        and a name badge
      </td>
    </tr>
  );
};

export default No10;
