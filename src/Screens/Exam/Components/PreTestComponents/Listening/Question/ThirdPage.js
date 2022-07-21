/* eslint-disable */
import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import AudioPlayer from 'react-h5-audio-player';

import { updateAnswer, updateAudio } from '../../../../../../Redux/handleAnswer';
import SectionTitle from '../../../SectionTitle';

const ThirdPage = ({ dispatch, getAnswers, setPagination, track, getAudio }) => {
  return (
    <div>
      <SectionTitle title="Section 3" />
      <h5 className="text-center">
        <b> Questions 21-30</b>
      </h5>

      <AudioPlayer
        src={track}
        autoPlay={true}
        onEnded={() => {
          setPagination(4);
          dispatch(updateAudio({ ...getAudio, 3: false }));
        }}
        showDownloadProgress={false}
        showFilledProgress={false}
        showJumpControls={false}
        showSkipControls={false}
        loop={false}
        customControlsSection={['VOLUME_CONTROLS']}
      />

      <Row>
        <Col>
          <h5>
            <b> Questions 21-22</b>
          </h5>
          <h6>Complete the sentences below.</h6>
          <h6>
            Write <b>NO MORE THAN TWO WORDS</b> for each answer
          </h6>
          <p className="text-center">
            <b>Research Project</b>
          </p>
          <ul>
            <li>
              Harry and Katy have to concentrate on coastal change for their next project. <br />
              Their work could be delayed by the <b>21</b>{' '}
              <input
                style={{ border: 'none' }}
                value={getAnswers[21]}
                onChange={(event) => {
                  dispatch(
                    updateAnswer({
                      ...getAnswers,
                      21: event.target.value
                    })
                  );
                }}
              />
            </li>
            <li className="mt-2">
              They plan to get help from the Marine Biology Unit.
              <br />
              Before they go to the beach, they need to visit the <b>22</b>{' '}
              <input
                style={{ border: 'none' }}
                value={getAnswers[22]}
                onChange={(event) => {
                  dispatch(
                    updateAnswer({
                      ...getAnswers,
                      22: event.target.value
                    })
                  );
                }}
              />
            </li>
          </ul>
        </Col>

        <Col>
          <h5>
            <b> Questions 23-26</b>
          </h5>
          <h6>
            <i>Who will do each of the following tasks?</i>
          </h6>
          <p>
            <b>A</b> Katy <br />
            <b>B</b> Harry <br />
            <b>C</b> Both Katy and Harry
          </p>
          <p>
            <b>23</b> take photographs{' '}
            <input
              style={{ border: 'none' }}
              value={getAnswers[23]}
              onChange={(event) => {
                dispatch(
                  updateAnswer({
                    ...getAnswers,
                    23: event.target.value
                  })
                );
              }}
            />
          </p>
          <p>
            <b>24</b> collect samples{' '}
            <input
              style={{ border: 'none' }}
              value={getAnswers[24]}
              onChange={(event) => {
                dispatch(
                  updateAnswer({
                    ...getAnswers,
                    24: event.target.value
                  })
                );
              }}
            />
          </p>
          <p>
            <b>25</b> interview people{' '}
            <input
              value={getAnswers[25]}
              style={{ border: 'none' }}
              onChange={(event) => {
                dispatch(
                  updateAnswer({
                    ...getAnswers,
                    25: event.target.value
                  })
                );
              }}
            />
          </p>
          <p>
            <b>26</b> analyse data{' '}
            <input
              value={getAnswers[26]}
              style={{ border: 'none' }}
              onChange={(event) => {
                dispatch(
                  updateAnswer({
                    ...getAnswers,
                    26: event.target.value
                  })
                );
              }}
            />
          </p>
        </Col>
      </Row>
      <h5>
        <b> Questions 27-30</b>
      </h5>
      <h6>
        Choose the correct letter, <b>A</b>, <b>B</b> or <b>C</b>.
      </h6>
      <Row>
        <Col md={6}>
          <div>
            <p className="mt-2">27. Why does Harry want to do the presentation?</p>
            <div className="mb-3">
              <Form
                onChange={(event) => {
                  const {
                    target: { value }
                  } = event;
                  dispatch(updateAnswer({ ...getAnswers, 27: value }));
                }}>
                <Form.Check
                  label="A. to practise skills for his future career"
                  name="group1"
                  type="radio"
                  value="a"
                  id={`inline-radio-1`}
                  defaultChecked={getAnswers[27] === 'a'}
                />
                <Form.Check
                  label="B. to catch up with his course requirements"
                  name="group1"
                  type="radio"
                  value="b"
                  id={`inline-radio-2`}
                  defaultChecked={getAnswers[27] === 'b'}
                />
                <Form.Check
                  label="C. to get a better mark than for his last presentation"
                  name="group1"
                  type="radio"
                  value="c"
                  id={`inline-radio-3`}
                  defaultChecked={getAnswers[27] === 'c'}
                />
              </Form>
            </div>
          </div>
        </Col>

        <Col md={6}>
          <div>
            <p className="mt-2">28. What is Katy's attitude to writing up the project?</p>
            <div className="mb-3">
              <Form
                onChange={(event) => {
                  const {
                    target: { value }
                  } = event;
                  dispatch(updateAnswer({ ...getAnswers, 28: value }));
                }}>
                <Form.Check
                  label="A. She is worried about the time available for writing."
                  name="group1"
                  type="radio"
                  value="a"
                  id={`inline-radio-1`}
                  defaultChecked={getAnswers[28] === 'a'}
                />
                <Form.Check
                  label="B. She thinks it is unfair if she has to do all the writing."
                  name="group1"
                  type="radio"
                  value="b"
                  id={`inline-radio-2`}
                  defaultChecked={getAnswers[29] === 'a'}
                />
                <Form.Check
                  label="C. She is concerned that some parts will be difficult."
                  name="group1"
                  type="radio"
                  value="c"
                  id={`inline-radio-3`}
                  defaultChecked={getAnswers[30] === 'a'}
                />
              </Form>
            </div>
          </div>
        </Col>

        <Col md={6}>
          <div>
            <p className="mt-2">
              29. Why does Harry want to involve the other students at the end of the presentation?
            </p>
            <div className="mb-3">
              <Form
                onChange={(event) => {
                  const {
                    target: { value }
                  } = event;
                  dispatch(updateAnswer({ ...getAnswers, 29: value }));
                }}>
                <Form.Check
                  label="A. to get their opinions about the conclusions"
                  name="group1"
                  type="radio"
                  value="a"
                  id={`inline-radio-1`}
                  defaultChecked={getAnswers[29] === 'a'}
                />
                <Form.Check
                  label="B. to help him and Katy reach firm conclusions"
                  name="group1"
                  type="radio"
                  value="b"
                  id={`inline-radio-2`}
                  defaultChecked={getAnswers[29] === 'b'}
                />
                <Form.Check
                  label="C. to see if they have reached similar conclusions"
                  name="group1"
                  type="radio"
                  value="c"
                  id={`inline-radio-3`}
                  defaultChecked={getAnswers[29] === 'c'}
                />
              </Form>
            </div>
          </div>
        </Col>

        <Col md={6}>
          <div>
            <p className="mt-2">30. Katy agrees to deal with any questions because</p>
            <div className="mb-3">
              <Form
                onChange={(event) => {
                  const {
                    target: { value }
                  } = event;
                  dispatch(updateAnswer({ ...getAnswers, 30: value }));
                }}>
                <Form.Check
                  label="A. she feels she will be confident about the material."
                  name="group1"
                  type="radio"
                  value="a"
                  id={`inline-radio-1`}
                  defaultChecked={getAnswers[30] === 'a'}
                />
                <Form.Check
                  label="B. Harry will be doing the main presentation."
                  name="group1"
                  type="radio"
                  value="b"
                  id={`inline-radio-2`}
                  defaultChecked={getAnswers[30] === 'b'}
                />
                <Form.Check
                  label="C. she has already told Dr Smith she will do this."
                  name="group1"
                  type="radio"
                  value="c"
                  id={`inline-radio-3`}
                  defaultChecked={getAnswers[30] === 'c'}
                />
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ThirdPage;
