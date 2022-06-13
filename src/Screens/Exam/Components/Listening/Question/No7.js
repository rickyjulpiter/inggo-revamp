/* eslint-disable */
import { updateAnswer } from '../../../../../Redux/handleAnswer';
import React from 'react';

const No7 = ({ dispatch, getAnswers }) => {
  return (
    <tr>
      <td>Information on Pension:</td>
      <td>
        see the Personnel Manager, office in <b>7</b>{' '}
        <input
          style={{ border: 'none' }}
          onChange={(event) => {
            dispatch(
              updateAnswer({
                ...getAnswers,
                7: event.target.value
              })
            );
          }}
        />
      </td>
    </tr>
  );
};

export default No7;
