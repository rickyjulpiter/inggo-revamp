/* eslint-disable */
import { updateAnswer } from '../../../../../Redux/handleAnswer';
import React from 'react';

const No4 = ({ dispatch, getAnswers }) => {
  return (
    <tr>
      <td>Holidays:</td>
      <td>
        three weeks a year in the first two years <br />
        four weeks a year in the <b>4</b>{' '}
        <input
          style={{ border: 'none' }}
          onChange={(event) => {
            dispatch(
              updateAnswer({
                ...getAnswers,
                4: event.target.value
              })
            );
          }}
        />
      </td>
    </tr>
  );
};

export default No4;
