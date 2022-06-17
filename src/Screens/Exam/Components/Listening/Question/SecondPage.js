/* eslint-disable */
import React from 'react';
import { Col, Row, Table } from 'react-bootstrap';
import { No11, No12, No13, No1415 } from './index';
import { updateAnswer } from '../../../../../Redux/handleAnswer';
import SectionTitle from '../../SectionTitle';
import ReactAudioPlayer from 'react-audio-player';

const SecondPage = ({ dispatch, getAnswers, setPagination, track }) => {
  return (
    <div>
      <SectionTitle title="Section 2" />
      <h5 className="text-center">
        <b> Questions 11-20</b>
      </h5>

      <ReactAudioPlayer
        src={track}
        autoPlay
        controls={true}
        controlsList={'nofullscreen nodownload noremoteplayback noplaybackrate foobar'}
        onEnded={() => {
          setPagination(3);
        }}
        onPause={() => console.log('')}
        style={{ width: 200 }}
      />

      <Row>
        <Col>
          <h5>
            <b> Questions 11-13</b>
          </h5>
          <h6>
            Choose the correct letter, <b>A</b>, <b>B</b> or <b>C</b>.
          </h6>
          {/*Listening No.11*/}
          <No11 dispatch={dispatch} getAnswers={getAnswers} />

          {/*Listening No.12*/}
          <No12 dispatch={dispatch} getAnswers={getAnswers} />
        </Col>
        <Col>
          {/*Listening No.13*/}
          <No13 dispatch={dispatch} getAnswers={getAnswers} />

          <h5 className="mt-4">
            <b> Questions 14 and 15</b>
          </h5>

          {/*Listening No.14 & 15*/}
          <No1415 dispatch={dispatch} getAnswers={getAnswers} />
        </Col>
      </Row>

      <h5 className="mt-4">
        <b> Questions 16 and 20</b>
      </h5>
      <div>
        <Table bordered>
          <tbody>
            <tr>
              <td className="text-center" colSpan={3}>
                <b>SHORT BREAK PACKAGES</b>
              </td>
            </tr>
            <tr>
              <td className="text-center">
                <b>Length of stay</b>
              </td>
              <td className="text-center">
                <b>Cost (per person per night)</b>
              </td>
              <td className="text-center">
                <b>Special features</b>
              </td>
            </tr>
            <tr>
              <td>2 days</td>
              <td>
                <b>16 </b>£
                <input
                  style={{ border: 'none' }}
                  value={getAnswers[16]}
                  onChange={(event) => {
                    dispatch(
                      updateAnswer({
                        ...getAnswers,
                        16: event.target.value
                      })
                    );
                  }}
                />
              </td>
              <td>
                Full cooked breakfast <br />
                Entertainment in the <b>17 </b>
                <input
                  style={{ border: 'none' }}
                  value={getAnswers[17]}
                  onChange={(event) => {
                    dispatch(
                      updateAnswer({
                        ...getAnswers,
                        17: event.target.value
                      })
                    );
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>3 days</td>
              <td>£60</td>
              <td>
                As above, plus: <br />- a <b>18 </b>
                <input
                  style={{ border: 'none' }}
                  value={getAnswers[18]}
                  onChange={(event) => {
                    dispatch(
                      updateAnswer({
                        ...getAnswers,
                        18: event.target.value
                      })
                    );
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>5 days</td>
              <td>
                <b>19s </b>£
                <input
                  value={getAnswers[19]}
                  style={{ border: 'none' }}
                  onChange={(event) => {
                    dispatch(
                      updateAnswer({
                        ...getAnswers,
                        19: event.target.value
                      })
                    );
                  }}
                />
              </td>
              <td>
                As above, plus: <br />
                - free beauty therapy on two of the days <br />- full-day membership of a <b>20 </b>
                <input
                  style={{ border: 'none' }}
                  value={getAnswers[20]}
                  onChange={(event) => {
                    dispatch(
                      updateAnswer({
                        ...getAnswers,
                        20: event.target.value
                      })
                    );
                  }}
                />
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default SecondPage;
