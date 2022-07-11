/* eslint-disable */
import React, { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import { Col, Form, Row } from 'react-bootstrap';

import SectionTitle from '../../../SectionTitle';
import {
  updatePostTestAudio,
  updatePostTestListeningAnswer
} from '../../../../../../Redux/handleAnswer';

const ThirdPage = ({ dispatch, getAnswers, setPagination, track, getAudio }) => {
  const [answer, setAnswer] = useState(getAnswers[21]);

  const checkIfExists = (value) => {
    return answer?.includes(value);
  };

  const isChecked = (value) => {
    const isExists = checkIfExists(value);
    if (isExists) {
      const filteredArray = answer.filter((e) => e !== value);
      setAnswer(filteredArray);
    }
    if (!isExists) {
      if (answer?.length > 2) {
        alert('Maximal 3 answer for this question!');
      } else {
        setAnswer([...answer, value]);
        dispatch(
          updatePostTestListeningAnswer({
            ...getAnswers,
            21: [...answer, value]
          })
        );
      }
    }
  };

  return (
    <div>
      <SectionTitle title="Section 3" />
      <h5 className="text-center">
        <b> Questions 21-30</b>
      </h5>
      <AudioPlayer
        src={track}
        autoPlay={getAudio[3]}
        onEnded={() => {
          setPagination(3);
          dispatch(updatePostTestAudio({ ...getAudio, 3: false }));
        }}
        showDownloadProgress={false}
        showFilledProgress={false}
        showJumpControls={false}
        showSkipControls={false}
        loop={false}
        customControlsSection={['VOLUME_CONTROLS']}
      />
      <p className="mt-2">
        <i> Questions 21-23</i>
      </p>
      <p>
        <i>
          Choose <b>THREE</b> letters, <b>A-G</b>
        </i>
      </p>
      <p>
        Which <b>THREE</b> factors does Marco's tutor advise him to consider when selecting a
        course?
      </p>
      <Form>
        <Form.Check
          label="A. possibility of specialisation"
          name="group1"
          type="checkbox"
          value="a"
          checked={checkIfExists('a')}
          id={`inline-checkbox-1`}
          onChange={(e) => isChecked(e.target.value)}
        />
        <Form.Check
          label="B. relevance of future career"
          name="group1"
          type="checkbox"
          value="b"
          checked={checkIfExists('b')}
          id={`inline-checkbox-2`}
          onChange={(e) => isChecked(e.target.value)}
        />
        <Form.Check
          label="C. personal interest"
          name="group1"
          type="checkbox"
          value="c"
          checked={checkIfExists('c')}
          id={`inline-checkbox-3`}
          onChange={(e) => isChecked(e.target.value)}
        />
        <Form.Check
          label="D. organisation of course"
          name="group1"
          type="checkbox"
          value="d"
          checked={checkIfExists('d')}
          id={`inline-checkbox-4`}
          onChange={(e) => isChecked(e.target.value)}
        />
        <Form.Check
          label="E. assessment methods"
          name="group1"
          type="checkbox"
          value="e"
          checked={checkIfExists('e')}
          id={`inline-checkbox-5`}
          onChange={(e) => isChecked(e.target.value)}
        />
        <Form.Check
          label="F. range of topics"
          name="group1"
          type="checkbox"
          value="f"
          checked={checkIfExists('f')}
          id={`inline-checkbox-6`}
          onChange={(e) => isChecked(e.target.value)}
        />
        <Form.Check
          label="G. reputation of lecturer"
          name="group1"
          type="checkbox"
          value="g"
          checked={checkIfExists('g')}
          id={`inline-checkbox-7`}
          onChange={(e) => isChecked(e.target.value)}
        />
      </Form>

      <p className="mt-4">
        <i> Questions 24-27</i>
      </p>
      <p>
        <i>
          Choose the correct Letter <b>A, B</b> or <b>C</b>
        </i>
      </p>
      <Row>
        <Col md={6}>
          <div className="mt-2">
            <p>24. Why does Marco’s tutor advise him to avoid the Team Management course?</p>
            <div className="mb-3">
              <Form
                onChange={(event) => {
                  const {
                    target: { value }
                  } = event;
                  dispatch(
                    updatePostTestListeningAnswer({
                      ...getAnswers,
                      24: value
                    })
                  );
                }}>
                <Form.Check
                  label="A. It will repeat work that Marco has already done."
                  name="group1"
                  type="radio"
                  value="a"
                  id={`inline-radio-1`}
                  defaultChecked={getAnswers[24] === 'a'}
                />
                <Form.Check
                  label="B. It is intended for students at a lower level than Marco."
                  name="group1"
                  type="radio"
                  value="b"
                  id={`inline-radio-2`}
                  defaultChecked={getAnswers[24] === 'b'}
                />
                <Form.Check
                  label="C. It may take too much time to do well."
                  name="group1"
                  type="radio"
                  value="c"
                  id={`inline-radio-3`}
                  defaultChecked={getAnswers[24] === 'c'}
                />
              </Form>
            </div>
          </div>
        </Col>
        <Col md={6}>
          <div className="mt-2">
            <p>25. Why does Marco want to do a dissertation?</p>
            <div className="mb-3">
              <Form
                onChange={(event) => {
                  const {
                    target: { value }
                  } = event;
                  dispatch(
                    updatePostTestListeningAnswer({
                      ...getAnswers,
                      25: value
                    })
                  );
                }}>
                <Form.Check
                  label="A. He thinks it will help his future career."
                  name="group1"
                  type="radio"
                  value="a"
                  id={`inline-radio-1`}
                  defaultChecked={getAnswers[25] === 'a'}
                />
                <Form.Check
                  label="B. He would like to do a detailed study."
                  name="group1"
                  type="radio"
                  value="b"
                  id={`inline-radio-2`}
                  defaultChecked={getAnswers[25] === 'b'}
                />
                <Form.Check
                  label="C. He has already done some work for it."
                  name="group1"
                  type="radio"
                  value="c"
                  id={`inline-radio-3`}
                  defaultChecked={getAnswers[25] === 'c'}
                />
              </Form>
            </div>
          </div>
        </Col>
        <Col md={6}>
          <div className="mt-2">
            <p>26. What does Marco’s tutor think about dissertation outline?</p>
            <div className="mb-3">
              <Form
                onChange={(event) => {
                  const {
                    target: { value }
                  } = event;
                  dispatch(
                    updatePostTestListeningAnswer({
                      ...getAnswers,
                      26: value
                    })
                  );
                }}>
                <Form.Check
                  label="A. The topic is too narrow to be useful"
                  name="group1"
                  type="radio"
                  value="a"
                  id={`inline-radio-1`}
                  defaultChecked={getAnswers[26] === 'a'}
                />
                <Form.Check
                  label="B. The available data may be unsuitable."
                  name="group1"
                  type="radio"
                  value="b"
                  id={`inline-radio-2`}
                  defaultChecked={getAnswers[26] === 'b'}
                />
                <Form.Check
                  label="C. The research plan is too complicated."
                  name="group1"
                  type="radio"
                  value="c"
                  id={`inline-radio-3`}
                  defaultChecked={getAnswers[26] === 'c'}
                />
              </Form>
            </div>
          </div>
        </Col>
        <Col md={6}>
          <div className="mt-2">
            <p>27. What does Marco decide to do about his dissertation?</p>
            <div className="mb-3">
              <Form
                onChange={(event) => {
                  const {
                    target: { value }
                  } = event;
                  dispatch(
                    updatePostTestListeningAnswer({
                      ...getAnswers,
                      27: value
                    })
                  );
                }}>
                <Form.Check
                  label="A. contact potential interviewees"
                  name="group1"
                  type="radio"
                  value="a"
                  id={`inline-radio-1`}
                  defaultChecked={getAnswers[27] === 'a'}
                />
                <Form.Check
                  label="B. change to another topic"
                  name="group1"
                  type="radio"
                  value="b"
                  id={`inline-radio-2`}
                  defaultChecked={getAnswers[27] === 'b'}
                />
                <Form.Check
                  label="C. discuss it with Professor Briggs"
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
      </Row>
      <p className="mt-4">
        <i> Questions 28-37</i>
      </p>
      <p>
        <i>Complete the sentences below.</i>
      </p>
      <p>
        <i>
          Write <b>NO MORE THAN TWO WORDS</b> for each answer
        </i>
      </p>

      <h6>
        <b>Practical details</b>
      </h6>
      <p>
        <b>28.</b> A first draft of the dissertation should be completed by the end of{' '}
        <input
          style={{ border: 'none' }}
          onChange={(event) => {
            dispatch(
              updatePostTestListeningAnswer({
                ...getAnswers,
                28: event.target.value
              })
            );
          }}
          value={getAnswers[28]}
        />
      </p>
      <p>
        <b>29.</b> The dissertation should be registered with the{' '}
        <input
          style={{ border: 'none' }}
          onChange={(event) => {
            dispatch(
              updatePostTestListeningAnswer({
                ...getAnswers,
                29: event.target.value
              })
            );
          }}
          value={getAnswers[29]}
        />{' '}
        of the department.
      </p>
      <p>
        <b>30.</b> Marco should get a copy of the statistics software from the{' '}
        <input
          style={{ border: 'none' }}
          onChange={(event) => {
            dispatch(
              updatePostTestListeningAnswer({
                ...getAnswers,
                30: event.target.value
              })
            );
          }}
          value={getAnswers[30]}
        />
      </p>
    </div>
  );
};

export default ThirdPage;
