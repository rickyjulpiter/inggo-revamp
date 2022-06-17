/* eslint-disable */
import React from 'react';

import SectionTitle from '../../SectionTitle';
import { Col, Form, Row, Table } from 'react-bootstrap';
import { updateReadingAnswer } from '../../../../../Redux/handleAnswer';

const ThirdSectionReadingComponent = ({ getAnswers, dispatch }) => {
  return (
    <>
      <SectionTitle title="READING PASSAGE 3" />
      <p>
        You should spend about 20 minutes on <b> Questions 27-40</b>, which are based on Reading
        Passage 3 on pages 11 and 12.
      </p>

      <h5 className="mt-4">
        <b> Questions 27-31</b>
      </h5>
      <p>
        Reading Passage 3 has five section, <b> A-E </b>
        <br />
        Choose the correct heading for each section from the list of headings below. <br />
        Write the correct number, <b> i-vii</b>, in boxes 27-31 on your answer sheet.
      </p>

      <Row>
        <Col md={5} className="">
          <Table borderless>
            <tbody>
              <tr>
                <td colSpan={2} className="text-center">
                  <b>List of Headings</b>
                </td>
              </tr>
              <tr>
                <td>I.</td>
                <td>An experiment using people who are receiving medical treatment</td>
              </tr>
              <tr>
                <td>II.</td>
                <td>The experiment that convinced all the researchers</td>
              </tr>
              <tr>
                <td>III.</td>
                <td>Medical benefits of hypnosis make scientific proof less important</td>
              </tr>
              <tr>
                <td>IV.</td>
                <td>Lack of data leads to opposing views of hypnotism</td>
              </tr>
              <tr>
                <td>V.</td>
                <td>The effects of hypnosis on parts of the brain involved in vision</td>
              </tr>
              <tr>
                <td>VI.</td>
                <td>Inducing pain through the use of hypnotism</td>
              </tr>
              <tr>
                <td>VII.</td>
                <td>Experiments used to support conflicting views</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>

      <Row className="mb-2">
        <Col md={1}>
          <b>27</b>
        </Col>
        <Col md={2}>
          <input
            style={{ border: 'none' }}
            value={getAnswers[27]}
            onChange={(event) => {
              dispatch(
                updateReadingAnswer({
                  ...getAnswers,
                  27: event.target.value
                })
              );
            }}
          />
        </Col>
        <Col>
          {' '}
          Section <b>A</b>
        </Col>
      </Row>
      <Row className="mb-2">
        <Col md={1}>
          <b>28</b>
        </Col>
        <Col md={2}>
          <input
            style={{ border: 'none' }}
            value={getAnswers[28]}
            onChange={(event) => {
              dispatch(
                updateReadingAnswer({
                  ...getAnswers,
                  28: event.target.value
                })
              );
            }}
          />
        </Col>
        <Col>
          {' '}
          Section <b>B</b>
        </Col>
      </Row>
      <Row className="mb-2">
        <Col md={1}>
          <b>29</b>
        </Col>
        <Col md={2}>
          <input
            style={{ border: 'none' }}
            value={getAnswers[29]}
            onChange={(event) => {
              dispatch(
                updateReadingAnswer({
                  ...getAnswers,
                  29: event.target.value
                })
              );
            }}
          />
        </Col>
        <Col>
          {' '}
          Section <b>C</b>
        </Col>
      </Row>
      <Row className="mb-2">
        <Col md={1}>
          <b>30</b>
        </Col>
        <Col md={2}>
          <input
            style={{ border: 'none' }}
            value={getAnswers[30]}
            onChange={(event) => {
              dispatch(
                updateReadingAnswer({
                  ...getAnswers,
                  30: event.target.value
                })
              );
            }}
          />
        </Col>
        <Col>
          {' '}
          Section <b>D</b>
        </Col>
      </Row>
      <Row className="mb-2">
        <Col md={1}>
          <b>31</b>
        </Col>
        <Col md={2}>
          <input
            style={{ border: 'none' }}
            value={getAnswers[31]}
            onChange={(event) => {
              dispatch(
                updateReadingAnswer({
                  ...getAnswers,
                  31: event.target.value
                })
              );
            }}
          />
        </Col>
        <Col>
          {' '}
          Section <b>E</b>
        </Col>
      </Row>

      <h5 className="text-center mt-5">
        <b> Hypnotism - is it real or just a circus trick?</b>
      </h5>
      <Row className="mb-4">
        <Col md={1}>
          <b>A</b>
        </Col>
        <Col md={11} className="text-justify">
          Hypnosis has been shown through a number of rigorously controlled studies to reduce pain,
          control blood pressure, and even make warts go away. But because very few studies have
          attempted to define the actual processes involved, most scientists are sceptical of its
          power and uses. That scepticism has driven David Spiegel, a professor of psychiatry at
          Stanford University School of Medicine, USA, and other researchers to take a hard look at
          what happens in the brain during hypnosis. <br />
          Among researchers there are two schools of thought. One claims that hypnosis fundamentally
          alters subjects’ state of mind: they enter a trance, which produces changes in brain
          activity. The other believes that hypnosis is simply a matter of suggestibility and
          relaxation. Spiegel belongs to the first school and over the years has had a debate with
          two scientists on the other side, Irving Kirsch, a University of Connecticut psychologist,
          and Stephen Kosslyn, a Harvard professor.
        </Col>
      </Row>
      <Row className="mb-4">
        <Col md={1}>
          <b>B</b>
        </Col>
        <Col md={11} className="text-justify">
          Kirsch often uses hypnosis in his practice and doesn't deny that it can be effective.
          ‘With hypnosis you do put people in altered states,’ he says. ‘But you don't need a trance
          to do it.’ To illustrate the point, Kirsch demonstrates how a subject holding a small
          object on a chain can make it swing in any direction by mere suggestion, the chain
          responding to minute movements in the tiny muscles of the fingers. ‘You don't have to
          enter a trance for your subconscious and your body to act upon a suggestion,’ Kirsch says.
          ‘The reaction is the result of your focusing on moving the chain in a particular
          direction.’ <br />
          Spiegel disagrees. One of his best-known studies found that when subjects were hypnotized
          and given suggestion their brain wave patterns change, indicating that they had entered a
          trance. In one of his studies, people under hypnosis were told their forearms were numb,
          then given light electrical shocks to the wrists. They didn't flinch or respond in any
          way, and their brain waves resembles those of people who experienced a much weaker shock.
          To Kirsch this still wasn't enough to prove the power of trance, but Stephen Kosslyn was
          willing to be convinced. Many external factors could have been responsible for the shift
          in the subjects' state of mind, but Kosslyn wondered, ‘Is there really something going on
          in the brain?’
        </Col>
      </Row>
      <Row className="mb-4">
        <Col md={1}>
          <b>C</b>
        </Col>
        <Col md={11} className="text-justify">
          To find out, Spiegel and Kosslyn decided to collaborate on a study focusing on a part of
          the brain that is well understood: the circuit which has been found to process the
          perception of colour. Spiegel and Kosslyn wanted to see if subjects could set off the
          circuit by visualising colour while under hypnosis. They selected eight people for the
          experiment conducted at Massachusetts General Hospital. The subjects were put in a scanner
          and shown a slide with coloured rectangles while their brain activity was mapped. Then
          they were shown a black and white slide and told to imagine its having colour. Both tasks
          were then repeated under hypnosis. <br />
          The results were striking. When the subjects truly saw the coloured rectangles, the
          circuit lit up on both sides of the brain; when they only had to imagine the colour, the
          circuit lit up only in the right hemisphere. Under hypnosis, however, both sides of the
          brain became active, just as in the regular sight; imagination seemed to take on the
          quality of a hallucination. <br />
          After the experiment, Kosslyn was forced to admit, I'm absolutely convinced now that
          hypnosis can boost what mental imagery does. But Kirsch remain sceptical, saying, the
          experiment has demonstrated that people are experiencing the effects of hypnotic
          suggestion but don't prove that they are entering a trance.’ He also argued that subjects
          were told to see the cart in colour when they were hypnotised but only to imagine it in
          colour when they weren't. Being told to pretend you are having an experience is different
          from the suggestion to have the experience.
        </Col>
      </Row>
      <Row className="mb-4">
        <Col md={1}>
          <b>D</b>
        </Col>
        <Col md={11} className="text-justify">
          Spiegel, however, is a clinician first and a scientist second. He believes the most
          important thing is that doctors recognise the power of hypnosis and start to use it.
          Working with Elvira Lang, a radiologist at a Harvard Medical Centre, he is testing the use
          of hypnosis in the operating room just as he and Kosslyn did in the scanner. Spiegel and
          Lang took 241 patients scheduled for surgery and divided them into three groups. One group
          received standard care, another standard care with a sympathetic care provider and the
          third received standard care, a sympathetic care provider and hypnosis. Every 15 minutes
          the patients were asked to rate their pain and anxiety levels. They were also hooked up to
          painkilling medication which they could administer to themselves. <br />
          On average, Spiegel and Lang found the hypnotised subjects used the less medication,
          experienced less pain and felt a far less anxiety than the other two groups. Original
          results published in The Lancet have been further supported by ongoing studies conducted
          by Lang.
        </Col>
      </Row>
      <Row className="mb-4">
        <Col md={1}>
          <b>E</b>
        </Col>
        <Col md={11} className="text-justify">
          Spiegel’s investigations into the nature of hypnosis and its effects on the brain
          continue. However, if hypnosis is ever to work its way into mainstream medicine and
          everyday use, physicians will need to know there is solid science behind what sounds like
          mysticism. Only then will their reluctance to using such things as mind over matter be
          overcome. ‘I agree that the medical use of hypnotism should be based on data rather than
          belief,’ says Spiegel, ‘but in the end it doesn't really matter why it works, as long as
          it helps our patients.’
        </Col>
      </Row>

      <h5 className="mt-4">
        <b> Questions 32-36</b>
      </h5>
      <p>
        Choose the correct letter, <b> A, B, C, or D. </b>
        <br />
        Write the correct letter in boxes 32 - 36 on your answer sheet.
      </p>
      <Row>
        <Col md={6}>
          <div>
            <p className="mt-2">32. Kirsch uses a small object on a chain to demonstrate that</p>
            <div className="mb-3">
              <Form
                onChange={(event) => {
                  const {
                    target: { value }
                  } = event;
                  dispatch(updateReadingAnswer({ ...getAnswers, 32: value }));
                }}>
                <Form.Check
                  label="A. inducing a trance is a simple process."
                  name="group1"
                  type="radio"
                  value="a"
                  id={`inline-radio-1`}
                  defaultChecked={getAnswers[32] === 'a'}
                />
                <Form.Check
                  label="B. responding to a suggestion does not require a trance."
                  name="group1"
                  type="radio"
                  value="b"
                  id={`inline-radio-2`}
                  defaultChecked={getAnswers[32] === 'b'}
                />
                <Form.Check
                  label="C. muscles respond as a result of a trance."
                  name="group1"
                  type="radio"
                  value="c"
                  id={`inline-radio-3`}
                  defaultChecked={getAnswers[32] === 'c'}
                />
                <Form.Check
                  label="D. it is difficult to identify a trance."
                  name="group1"
                  type="radio"
                  value="d"
                  id={`inline-radio-4`}
                  defaultChecked={getAnswers[32] === 'd'}
                />
              </Form>
            </div>
          </div>
        </Col>

        <Col md={6}>
          <div>
            <p className="mt-2">
              33. Spiegel disagrees with Kirsch because of the subjects in Spiegel's experiment
            </p>
            <div className="mb-3">
              <Form
                onChange={(event) => {
                  const {
                    target: { value }
                  } = event;
                  dispatch(updateReadingAnswer({ ...getAnswers, 33: value }));
                }}>
                <Form.Check
                  label="A. believed what they were told."
                  name="group1"
                  type="radio"
                  value="a"
                  id={`inline-radio-1`}
                  defaultChecked={getAnswers[33] === 'a'}
                />
                <Form.Check
                  label="B. showed changes in brain activity."
                  name="group1"
                  type="radio"
                  value="b"
                  id={`inline-radio-2`}
                  defaultChecked={getAnswers[33] === 'b'}
                />
                <Form.Check
                  label="C. responded as expected to shocks."
                  name="group1"
                  type="radio"
                  value="c"
                  id={`inline-radio-3`}
                  defaultChecked={getAnswers[33] === 'c'}
                />
                <Form.Check
                  label="D. had similar reactions to control subjects."
                  name="group1"
                  type="radio"
                  value="d"
                  id={`inline-radio-4`}
                  defaultChecked={getAnswers[33] === 'd'}
                />
              </Form>
            </div>
          </div>
        </Col>

        <Col md={6}>
          <div>
            <p className="mt-2">
              34. Kosslyn’s response to Spiegel's electric shock experiment was to
            </p>
            <div className="mb-3">
              <Form
                onChange={(event) => {
                  const {
                    target: { value }
                  } = event;
                  dispatch(updateReadingAnswer({ ...getAnswers, 34: value }));
                }}>
                <Form.Check
                  label="A. challenge the results because of external factors."
                  name="group1"
                  type="radio"
                  value="a"
                  id={`inline-radio-1`}
                  defaultChecked={getAnswers[34] === 'a'}
                />
                <Form.Check
                  label="B. work with Kirsch to disprove Spiegel's results."
                  name="group1"
                  type="radio"
                  value="b"
                  id={`inline-radio-2`}
                  defaultChecked={getAnswers[34] === 'b'}
                />
                <Form.Check
                  label="C. reverse his previous position on trance."
                  name="group1"
                  type="radio"
                  value="c"
                  id={`inline-radio-3`}
                  defaultChecked={getAnswers[34] === 'c'}
                />
                <Form.Check
                  label="D. accept that Spiegel's ideas might be correct."
                  name="group1"
                  type="radio"
                  value="d"
                  id={`inline-radio-4`}
                  defaultChecked={getAnswers[34] === 'd'}
                />
              </Form>
            </div>
          </div>
        </Col>

        <Col md={6}>
          <div>
            <p className="mt-2">
              35. Spiegel and Kosslyn's experiment was designed to show this hypnosis
            </p>
            <div className="mb-3">
              <Form
                onChange={(event) => {
                  const {
                    target: { value }
                  } = event;
                  dispatch(updateReadingAnswer({ ...getAnswers, 35: value }));
                }}>
                <Form.Check
                  label="A. affects the electrical responses of the brain."
                  name="group1"
                  type="radio"
                  value="a"
                  id={`inline-radio-1`}
                  defaultChecked={getAnswers[35] === 'a'}
                />
                <Form.Check
                  label="B. put make colour appear as black and white."
                  name="group1"
                  type="radio"
                  value="b"
                  id={`inline-radio-2`}
                  defaultChecked={getAnswers[35] === 'b'}
                />
                <Form.Check
                  label="C. has an effect on how shapes are perceived."
                  name="group1"
                  type="radio"
                  value="c"
                  id={`inline-radio-3`}
                  defaultChecked={getAnswers[35] === 'c'}
                />
                <Form.Check
                  label="D. can enhance the subject’s imagination."
                  name="group1"
                  type="radio"
                  value="d"
                  id={`inline-radio-4`}
                  defaultChecked={getAnswers[35] === 'd'}
                />
              </Form>
            </div>
          </div>
        </Col>

        <Col md={6}>
          <div>
            <p className="mt-2">36. Kirsch thought Spiegel and Kosslyn’s results</p>
            <div className="mb-3">
              <Form
                onChange={(event) => {
                  const {
                    target: { value }
                  } = event;
                  dispatch(updateReadingAnswer({ ...getAnswers, 36: value }));
                }}>
                <Form.Check
                  label="A. were worthy of further investigation."
                  name="group1"
                  type="radio"
                  value="a"
                  id={`inline-radio-1`}
                  defaultChecked={getAnswers[36] === 'a'}
                />
                <Form.Check
                  label="B. had nothing to do with hypnotic suggestion."
                  name="group1"
                  type="radio"
                  value="b"
                  id={`inline-radio-2`}
                  defaultChecked={getAnswers[36] === 'b'}
                />
                <Form.Check
                  label="C. showed that the possibility of trance existed."
                  name="group1"
                  type="radio"
                  value="c"
                  id={`inline-radio-3`}
                  defaultChecked={getAnswers[36] === 'c'}
                />
                <Form.Check
                  label="D. were affected by the words used in the instructions."
                  name="group1"
                  type="radio"
                  value="d"
                  id={`inline-radio-4`}
                  defaultChecked={getAnswers[36] === 'd'}
                />
              </Form>
            </div>
          </div>
        </Col>
      </Row>

      <h5 className="mt-4">
        <b> Questions 37-40</b>
      </h5>
      <p>
        Do the following statements agree with the information given in Reading Passage 3? <br />
        In boxes 37-40 on your answer sheet, write
      </p>
      <div style={{ marginLeft: 30 }}>
        <b>
          <i>TRUE</i> if the statement agrees with the information
        </b>{' '}
        <br />
        <b>
          <i>FALSE</i> if the statement contradicts the information
        </b>{' '}
        <br />
        <b>
          <i>NOT GIVEN</i> if there is no information on this
        </b>
      </div>
      <Row className="mb-2 mt-4">
        <Col md={1}>
          <b>37 </b>
        </Col>
        <Col md={2}>
          <input
            style={{ border: 'none' }}
            value={getAnswers[37]}
            onChange={(event) => {
              dispatch(
                updateReadingAnswer({
                  ...getAnswers,
                  37: event.target.value
                })
              );
            }}
          />
        </Col>
        <Col>Spiegel is more interested in scientific research than medical practice.</Col>
      </Row>
      <Row className="mb-2">
        <Col md={1}>
          <b>38 </b>
        </Col>
        <Col md={2}>
          <input
            value={getAnswers[38]}
            style={{ border: 'none' }}
            onChange={(event) => {
              dispatch(
                updateReadingAnswer({
                  ...getAnswers,
                  38: event.target.value
                })
              );
            }}
          />
        </Col>
        <Col>
          Patients in the third group in Spiegel and Lang’s experiment were easily hypnotised.
        </Col>
      </Row>
      <Row className="mb-2">
        <Col md={1}>
          <b>39 </b>
        </Col>
        <Col md={2}>
          <input
            value={getAnswers[39]}
            style={{ border: 'none' }}
            onChange={(event) => {
              dispatch(
                updateReadingAnswer({
                  ...getAnswers,
                  39: event.target.value
                })
              );
            }}
          />
        </Col>
        <Col>
          In Spiegel and Lang’s experiment, a smaller amount of painkiller was needed by the
          hypnotised patients than by the other two groups.
        </Col>
      </Row>
      <Row className="mb-2">
        <Col md={1}>
          <b>40 </b>
        </Col>
        <Col md={2}>
          <input
            value={getAnswers[40]}
            style={{ border: 'none' }}
            onChange={(event) => {
              dispatch(
                updateReadingAnswer({
                  ...getAnswers,
                  40: event.target.value
                })
              );
            }}
          />
        </Col>
        <Col>Spiegel feels that doctors should use hypnotism only when it is fully understood.</Col>
      </Row>
    </>
  );
};

export default ThirdSectionReadingComponent;
