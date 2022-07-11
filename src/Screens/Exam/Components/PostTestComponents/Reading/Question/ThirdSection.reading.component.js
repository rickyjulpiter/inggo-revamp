/* eslint-disable */
import React from 'react';
import { Col, Form, Row, Table } from 'react-bootstrap';

import SectionTitle from '../../../SectionTitle';
import { updatePostTestReadingAnswer } from '../../../../../../Redux/handleAnswer';

const ThirdSectionReadingComponent = ({ dispatch, getAnswers }) => {
  return (
    <div>
      <SectionTitle title="READING PASSAGE 3" />

      <p>
        You should spend about 20 minutes on <b> Questions 27-40</b>, which are based on Reading
        Passage 3 on pages 10 and 11.
      </p>
      <Row>
        <Col md={6}>
          <h5 className="text-center">
            <b>How did writing begin?</b>
          </h5>
          <p className="text-center">
            <i>Many theories, few answers</i>
          </p>

          <p className="text-justify mt-2 mb-2">
            The Sumerians, an ancient people of the Middle East, had a story explaining the
            invention of writing more than 5,000 years ago. It seems a messenger of the King of Uruk
            arrives at the court of a distant ruler so exhausted that he was unable to deliver the
            oral message. So the king set down the words of his next message on a clay tablet. A
            charming story, whose retelling at a recent symposium at the University of Pennsylvania
            amused scholars. They smiled at the absurdity of a letter which the recipient would not
            have been able to read. They also doubted that the earliest writing was a direct
            rendering of speech. Writing more likely began as a separate, symbolic system of
            communication and only later merged with spoken language.
          </p>

          <p className="text-justify mt-2 mb-2">
            Yet in the story of the Sumerians, who lived in Mesopotamia, in what is now southern
            Iraq, seemed to understand writing’s transforming function. As Dr Holly Pittman,
            director of the University's Center for Ancient Studies, observed, writing ‘arose out of
            the need to store and transmit information… over time and space’.
          </p>

          <p className="text-justify mt-2 mb-2">
            In exchanging interpretation and information, the scholars acknowledged that they still
            had no fully satisfying answers to the questions of how and why writing developed. Many
            favoured an explanation of writing’s origins in the visual arts, pictures becoming
            increasingly abstract and eventually representing spoken words. Their views clashed with
            a widely held theory among archaeologists that writing developed from the pieces of clay
            that Sumerian accountants used as tokens to keep track of goods.
          </p>

          <p className="text-justify mt-2 mb-2">
            Archaeologists generally concede that they have no definitive answer to the question of
            whether writing was invented only once, or arose independently in several places, such
            as Egypt, the Indus Valley, China, Mexico and Central America. The preponderance of
            archaeological data shows that the urbanizing Sumerians were the first to develop
            writing, in 3,200 or 3,300 BC. These are the dates for many clay tablets in an early
            form of cuneiform, a script written by pressing the end of sharpened stick into wet
            clay, found at the site of the ancient city of Uruk. The baked clay tablets bore such
            images as pictorial symbols of the names of people, places and things connected with the
            government and commerce. The Sumerian script gradually evolved from the pictorial to the
            abstract, but did not at first represent recorded spoken language.
          </p>

          <p className="text-justify mt-2 mb-2">
            Dr Peter Damerow, a specialist in Sumerian cuneiform at the Max Planck Institute for the
            History of Science in Berlin, said ‘It's likely that there were mutual influences of
            writing systems around the world. However, their great variety now shows that the
            development of writing, once initiated, attains a considerable degree of independence
            and flexibility to adapt to specific characteristics of the sounds of the language to be
            represented’. Not that he accepts the conventional view that writing started as a
            representation of words by pictures. New studies of early Sumerian writing, he said,
            challenge this interpretation. The structures of the earliest writing did not, for
            example, math to the structure of spoken language, dealing mainly in lists and
            categories rather than in sentences and narrative.
          </p>

          <p className="text-justify mt-2 mb-2">
            For at least two decades, Dr Dennis Schmandt-Besserat, a University of Texas
            archaeologist, has argued that the first writing grew directly out of a system practiced
            by Sumerian accountants. They used clay tokens, each one shaped to represent a jar of
            oil, a container of grain or a particular kind of livestock. These tokens were sealed
            inside clay spheres, and then the number and type of tokens inside was recorded on the
            outside using impressions resembling the tokens. Eventually, the token Impressions were
            replaced with inscribed signs, and writing had been invented.
          </p>

          <p className="text-justify mt-2 mb-2">
            Though Dr Schmandt-Besserat has won much support, some linguists question her thesis,
            and others, like Dr Pittman, think it too narrow. They emphasise that pictorial
            representation and writing evolved together. ‘There's no question that the token system
            is a forerunner of writing,’ Dr Pittman said, ‘but I have an argument with her evidence
            for a link between tokens and signs, and she doesn't open up the process to include
            picture making.’
          </p>

          <p className="text-justify mt-2 mb-2">
            Dr Schmandt-Besserat vigorously defended her ideas. ‘My colleagues say that pictures
            were the beginning of writing, ‘she said, ‘but show me a single picture that becomes a
            sign in writing. They say that designs on pottery were the beginning of writing, but
            show me a single sign of writing you can trace back to a pot - it doesn't exist.’ In its
            first 500 years, she asserted, cuneiform writing was used almost solely for recording
            economic information, and after that its uses multiplied and broadened.
          </p>

          <p className="text-justify mt-2 mb-2">
            Yet other Scholars have advanced different ideas. Dr Piotr Michalowki, Professor of Near
            East Civilizations at the University of Michigan, said that the proto-writing of
            Sumerian Uruk was ‘so radically different as to be a complete break with the past’. It
            is no doubt served, he said, to store and communicate information, but also became a new
            instrument of power. Some Scholars noted that the origins of writing may not always have
            been in economics. In Egypt, most early writing is high on monuments or deep in tombs.
            In this case, said Dr Pascal Vernus from a university in Paris, early writing was less
            administrative than sacred. It seems that the only certainty in this field is that many
            questions remain to be answered.
          </p>
        </Col>
        <Col>
          <div className="mt-2">
            <p>
              27. The researchers at the symposium regarded the story of the King of Uruk as
              ridiculous because
            </p>
            <div className="mb-3">
              <Form
                onChange={(event) => {
                  const {
                    target: { value }
                  } = event;
                  dispatch(
                    updatePostTestReadingAnswer({
                      ...getAnswers,
                      27: value
                    })
                  );
                }}>
                <Form.Check
                  label="A. writing probably developed independently of speech."
                  name="group1"
                  type="radio"
                  value="a"
                  id={`inline-radio-1`}
                  defaultChecked={getAnswers[27] === 'a'}
                />
                <Form.Check
                  label="B. clay tablets had not been invented at that time."
                  name="group1"
                  type="radio"
                  value="b"
                  id={`inline-radio-2`}
                  defaultChecked={getAnswers[27] === 'b'}
                />
                <Form.Check
                  label="C. the distant the ruler would have spoken another language."
                  name="group1"
                  type="radio"
                  value="c"
                  id={`inline-radio-3`}
                  defaultChecked={getAnswers[27] === 'c'}
                />
                <Form.Check
                  label="D. evidence of writing has been discovered from an earlier period."
                  name="group1"
                  type="radio"
                  value="d"
                  id={`inline-radio-4`}
                  defaultChecked={getAnswers[27] === 'd'}
                />
              </Form>
            </div>
          </div>

          <div className="mt-2">
            <p>28. According to the writer the story of the king of Uruk</p>
            <div className="mb-3">
              <Form
                onChange={(event) => {
                  const {
                    target: { value }
                  } = event;
                  dispatch(
                    updatePostTestReadingAnswer({
                      ...getAnswers,
                      28: value
                    })
                  );
                }}>
                <Form.Check
                  label="A. is a probable explanation of the origins of writing."
                  name="group1"
                  type="radio"
                  value="a"
                  id={`inline-radio-1`}
                  defaultChecked={getAnswers[28] === 'a'}
                />
                <Form.Check
                  label="B. proves that early writing had a different function to writing today."
                  name="group1"
                  type="radio"
                  value="b"
                  id={`inline-radio-2`}
                  defaultChecked={getAnswers[28] === 'b'}
                />
                <Form.Check
                  label="C. provides an example of symbolic writing."
                  name="group1"
                  type="radio"
                  value="c"
                  id={`inline-radio-3`}
                  defaultChecked={getAnswers[28] === 'c'}
                />
                <Form.Check
                  label="D. show some awareness amongst Sumerians of the purpose of writing."
                  name="group1"
                  type="radio"
                  value="d"
                  id={`inline-radio-4`}
                  defaultChecked={getAnswers[28] === 'd'}
                />
              </Form>
            </div>
          </div>

          <div className="mt-2">
            <p>29. There was disagreement among the researchers at the Symposium about</p>
            <div className="mb-3">
              <Form
                onChange={(event) => {
                  const {
                    target: { value }
                  } = event;
                  dispatch(
                    updatePostTestReadingAnswer({
                      ...getAnswers,
                      29: value
                    })
                  );
                }}>
                <Form.Check
                  label="A. the area where writing began."
                  name="group1"
                  type="radio"
                  value="a"
                  id={`inline-radio-1`}
                  defaultChecked={getAnswers[29] === 'a'}
                />
                <Form.Check
                  label="B. the nature of early writing materials."
                  name="group1"
                  type="radio"
                  value="b"
                  id={`inline-radio-2`}
                  defaultChecked={getAnswers[29] === 'b'}
                />
                <Form.Check
                  label="C. the way you writing began."
                  name="group1"
                  type="radio"
                  value="c"
                  id={`inline-radio-3`}
                  defaultChecked={getAnswers[29] === 'c'}
                />
                <Form.Check
                  label="D. the meaning of certain abstract images."
                  name="group1"
                  type="radio"
                  value="d"
                  id={`inline-radio-4`}
                  defaultChecked={getAnswers[29] === 'd'}
                />
              </Form>
            </div>
          </div>

          <div className="mt-2">
            <p>
              30. The opponents of the theory that writing developed from tokens believe that it
            </p>
            <div className="mb-3">
              <Form
                onChange={(event) => {
                  const {
                    target: { value }
                  } = event;
                  dispatch(
                    updatePostTestReadingAnswer({
                      ...getAnswers,
                      30: value
                    })
                  );
                }}>
                <Form.Check
                  label="A. grew out of accountancy."
                  name="group1"
                  type="radio"
                  value="a"
                  id={`inline-radio-1`}
                  defaultChecked={getAnswers[30] === 'a'}
                />
                <Form.Check
                  label="B. evolved from pictures."
                  name="group1"
                  type="radio"
                  value="b"
                  id={`inline-radio-2`}
                  defaultChecked={getAnswers[30] === 'b'}
                />
                <Form.Check
                  label="C. was initially intended as a decoration."
                  name="group1"
                  type="radio"
                  value="c"
                  id={`inline-radio-3`}
                  defaultChecked={getAnswers[30] === 'c'}
                />
                <Form.Check
                  label="D. was unlikely to have been connected with commerce."
                  name="group1"
                  type="radio"
                  value="d"
                  id={`inline-radio-4`}
                  defaultChecked={getAnswers[30] === 'd'}
                />
              </Form>
            </div>
          </div>
          <h5 className="mt-4">
            <b> Questions 31-36</b>
          </h5>
          <p>
            <i>Look at the following statements (Question 31-36) and the list of people below.</i>
          </p>
          <p>
            <i>
              Match each statement with the correct person, <b> A-E</b>.
            </i>
          </p>
          <p>
            <i>
              Write the correct letter, <b> A-E</b>, in boxes 31-36 on your answer sheet.
            </i>
          </p>
          <Row>
            <Col md={6} className="mx-auto">
              <div style={{ border: '1px solid black', padding: '10px' }}>
                <p className="text-center">
                  <b>List of People</b>
                </p>
                <p>
                  <b>A</b> Dr Holly Pittman
                </p>
                <p>
                  <b>B</b> Dr Peter Damerow
                </p>
                <p>
                  <b>C</b> Dr Denise Schmandt-Besserat
                </p>
                <p>
                  <b>D</b> Dr Piotr Michalowski
                </p>
                <p>
                  <b>E</b> Dr Pascal Vernus
                </p>
              </div>
            </Col>
          </Row>
          <Row className="mb-2 mt-4">
            <Col md={1}>
              <b>31 </b>
            </Col>
            <Col md={2}>
              <input
                style={{ border: 'none', width: '100%' }}
                value={getAnswers[31]}
                onChange={(event) => {
                  dispatch(
                    updatePostTestReadingAnswer({
                      ...getAnswers,
                      31: event.target.value
                    })
                  );
                }}
              />
            </Col>
            <Col>
              There is no proof that early writing is connected to decorated household objects.
            </Col>
          </Row>

          <Row className="mb-2">
            <Col md={1}>
              <b>32 </b>
            </Col>
            <Col md={2}>
              <input
                style={{ border: 'none', width: '100%' }}
                value={getAnswers[32]}
                onChange={(event) => {
                  dispatch(
                    updatePostTestReadingAnswer({
                      ...getAnswers,
                      32: event.target.value
                    })
                  );
                }}
              />
            </Col>
            <Col>As writing developed, it came to represent speech.</Col>
          </Row>

          <Row className="mb-2">
            <Col md={1}>
              <b>33 </b>
            </Col>
            <Col md={2}>
              <input
                style={{ border: 'none', width: '100%' }}
                value={getAnswers[33]}
                onChange={(event) => {
                  dispatch(
                    updatePostTestReadingAnswer({
                      ...getAnswers,
                      33: event.target.value
                    })
                  );
                }}
              />
            </Col>
            <Col>Sumerian writing developed into a means of political control.</Col>
          </Row>

          <Row className="mb-2">
            <Col md={1}>
              <b>34 </b>
            </Col>
            <Col md={2}>
              <input
                style={{ border: 'none', width: '100%' }}
                value={getAnswers[34]}
                onChange={(event) => {
                  dispatch(
                    updatePostTestReadingAnswer({
                      ...getAnswers,
                      34: event.target.value
                    })
                  );
                }}
              />
            </Col>
            <Col>Early writing did not represent the grammatical features of speech.</Col>
          </Row>

          <Row className="mb-2">
            <Col md={1}>
              <b>35 </b>
            </Col>
            <Col md={2}>
              <input
                style={{ border: 'none', width: '100%' }}
                value={getAnswers[35]}
                onChange={(event) => {
                  dispatch(
                    updatePostTestReadingAnswer({
                      ...getAnswers,
                      35: event.target.value
                    })
                  );
                }}
              />
            </Col>
            <Col>There is no convincing proof that tokens and signs are connected.</Col>
          </Row>

          <Row className="mb-2">
            <Col md={1}>
              <b>36 </b>
            </Col>
            <Col md={2}>
              <input
                style={{ border: 'none', width: '100%' }}
                value={getAnswers[36]}
                onChange={(event) => {
                  dispatch(
                    updatePostTestReadingAnswer({
                      ...getAnswers,
                      36: event.target.value
                    })
                  );
                }}
              />
            </Col>
            <Col>The uses of cuneiform writing were narrow at first, and later widened.</Col>
          </Row>

          <h5 className="mt-4">
            <b> Questions 37-40</b>
          </h5>
          <p>
            <i>
              Complete the summary using the list of words, <b>A-N</b>, below.
            </i>
          </p>
          <p>
            <i>
              CWrite the correct letter, <b>A-N</b>, in boxes 37-40 on your answer sheet.
            </i>
          </p>

          <h5 className="text-center">
            <b> The earliest form of writing</b>
          </h5>
          <p className="text-justify">
            Most archaeological evidence shows that the people of <b> 37 </b>
            <input
              style={{ border: 'none', width: '10%' }}
              value={getAnswers[37]}
              onChange={(event) => {
                dispatch(
                  updatePostTestReadingAnswer({
                    ...getAnswers,
                    37: event.target.value
                  })
                );
              }}
            />{' '}
            invented writing in around 3,300 BC. Their script was written on <b>38</b>{' '}
            <input
              style={{ border: 'none', width: '10%' }}
              value={getAnswers[38]}
              onChange={(event) => {
                dispatch(
                  updatePostTestReadingAnswer({
                    ...getAnswers,
                    38: event.target.value
                  })
                );
              }}
            />{' '}
            and was called <br /> <b>39</b>{' '}
            <input
              style={{ border: 'none', width: '10%' }}
              value={getAnswers[39]}
              onChange={(event) => {
                dispatch(
                  updatePostTestReadingAnswer({
                    ...getAnswers,
                    39: event.target.value
                  })
                );
              }}
            />{' '}
            . Their script originally showed images related to political power and business, and
            later developed to become more <b>40</b>{' '}
            <input
              style={{ border: 'none', width: '10%' }}
              value={getAnswers[40]}
              onChange={(event) => {
                dispatch(
                  updatePostTestReadingAnswer({
                    ...getAnswers,
                    40: event.target.value
                  })
                );
              }}
            />{' '}
            .
          </p>

          <Table borderless>
            <tbody>
              <tr>
                <td>
                  <b> A</b>
                </td>
                <td>cuneiform</td>
                <td>
                  <b> B</b>
                </td>
                <td>pictorial</td>
                <td>
                  <b> C</b>
                </td>
                <td>tomb walls</td>
              </tr>

              <tr>
                <td>
                  <b> D</b>
                </td>
                <td>urban</td>
                <td>
                  <b> E</b>
                </td>
                <td>legible</td>
                <td>
                  <b> F</b>
                </td>
                <td>stone blocks</td>
              </tr>

              <tr>
                <td>
                  <b> G</b>
                </td>
                <td>simple</td>
                <td>
                  <b> H</b>
                </td>
                <td>Mesopotamia</td>
                <td>
                  <b> I</b>
                </td>
                <td>abstract</td>
              </tr>

              <tr>
                <td>
                  <b> J</b>
                </td>
                <td>papyrus sheets</td>
                <td>
                  <b> K</b>
                </td>
                <td>decorative</td>
                <td>
                  <b> L</b>
                </td>
                <td>clay tablets</td>
              </tr>

              <tr>
                <td>
                  <b> M</b>
                </td>
                <td>Egypt</td>
                <td>
                  <b> N</b>
                </td>
                <td>Uruk</td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  );
};

export default ThirdSectionReadingComponent;
