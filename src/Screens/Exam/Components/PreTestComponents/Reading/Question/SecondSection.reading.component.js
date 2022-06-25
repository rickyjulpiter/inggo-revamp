/* eslint-disable */
import React from 'react';
import { Col, Form, Row, Table } from 'react-bootstrap';

import SectionTitle from '../../../SectionTitle';
import { updateReadingAnswer } from '../../../../../../Redux/handleAnswer';

const SecondSectionReadingComponent = ({ getAnswers, dispatch }) => {
  return (
    <>
      <SectionTitle title="READING PASSAGE 2" />
      <p>
        You should spend about 20 minutes on <b> Questions 14-26</b>, which are based on Reading
        Passage 2 on pages 6 and 7.
      </p>

      <Row>
        <Col>
          <h5 className="text-center mt-5 mb-3">
            <b>Revolutions in Mapping</b>
          </h5>
          <p className="text-justify">
            Today, the mapmaker’s vision is no longer confined to what the human eye can see. The
            perspective of mapmaking has shifted from the crow's nest of the sailing vessel,
            mountain top and airplane to new orbital heights. Radar, which bounces microwave radio
            signals off a given surface to create images of its contours and textures, can penetrate
            jungle foliage and has produced the first map of the mountains of the planet Venus. And
            a combination of sonar and radar produces charts of the seafloor, putting much of Earth
            on the map for the first time. ‘Suddenly it's a whole different world for us,’ says Joel
            Morrison, chief of geography at the U.S. Bureau of the Census. ‘Our future as mapmakers
            - even ten years from now - is uncertain.
          </p>
          <p className="text-justify">
            The world's largest collection of maps resides in the basement of the Library of
            Congress in Washington, DC. The collection, consisting of up to 4.6 million map sheets
            and 63,000 atlases, includes magnificent bound collections of elaborate maps - the pride
            of the golden age of Dutch cartography*. In the reading room scholars, wearing thin
            cotton gloves to protect the fragile sheets, examine ancient maps with magnifying
            glasses. Across the room people sit at their computer screens, studying the latest maps.
            With their prodigious memories, computers are able to store data about people, places
            and environments - the stuff of maps - and almost instantly information is displayed on
            the screen in the desired geographic context, and at the click of a button, a print-out
            of the map appears.
          </p>
          <p className="text-justify">
            Measuring the spherical Earth ranks as the first major milestone in scientific
            cartography. This was first achieved by the Greek astronomer Eratosthenes, a scholar at
            the famous Alexandrian Library in Egypt in the third century BC. He calculated the
            Earth's circumference as 25,200 miles, which was remarkably accurate. The longitudinal
            circumference is known today to be 24.860 miles.
          </p>
          <p className="text-justify">
            Building on the ideas of his predecessors, the astronomer and geographer Ptolemy,
            working in the second century AD, spelled out a system for organizing maps according to
            grids of latitude and longitude. Today, parallels of latitude are often spaced at
            intervals of 10 to 20 degrees and meridians** at 15 degrees, and this is the basis for
            the width of modern time zones. Another legacy of Ptolemy’s is his advice to
            cartographers to create maps to scale. Distance on today's map is expressed as a
            fraction or ratio of the real distance. But mapmakers in Ptolemy’s time lacked the
            geographic knowledge to live up to Ptolemy’s scientific principles. Even now, when
            surveyors achieve accuracies down to inches and satellites can plot potential missile
            targets within feet, maps are not true pictures of reality.{' '}
          </p>
          <p className="text-justify">
            However, just as the compass improved navigation and created demand for useful charts,
            so the invention of the printing press in the 15th century put maps in the hands of more
            people, and took their production away from monks, who had tended to illustrate theology
            rather than geography. Ocean-going ships launched an age of discovery, enlarging both
            what could and needed to be mapped, and awakened an intellectual spirit and desire for
            knowledge of the world.
          </p>
          <p className="text-justify">
            Inspired by the rediscovered Ptolemy, whose writing had been preserved by Arabs after
            the sacking of the Alexandrian Library in AD 931, mapmakers in the 15th century
            gradually replaced theology with knowledge of faraway places, as reported by traveling
            merchants like Marco Polo.
          </p>
          <p className="text-justify">
            Gerhardus Mercator, the foremost shipmaker of the 16th century, developed a technique of
            arranging meridians and parallels in such a way that navigators could draw straight
            lines between two points and steer a constant compass course between them. This
            distortion formula, introduced on his world map of 1569, created the ‘Greenland
            problem’. Even on some standard map to this day, Greenland looks as large as South
            America - one of the many problems when one tries to portray a round world on a flat
            sheet of paper. But the Mercator projection was so practical that it is still popular
            with sailors.
          </p>
          <p className="text-justify">
            Scientific mapping of the land came into its own with the achievements of the Cassini
            family - father, son, grandson and great-grandson. In the late 17th Century, the
            Italian-born founder, Jean-Dominique, invented a complex method of determining longitude
            based on observations of Jupiter's moons. Using this technique, surveyors were able to
            produce an accurate map of France. The family continued to the French countryside and
            his great-grandson finally published their famous Cassini map in 1793 during the French
            Revolution. While it may have lacked the artistic appeal of earlier maps, it was the
            model of a social and geographic map showing roads, rivers, canals, towns, abbeys,
            vineyards, lakes and even windmills. With this achievement, France became the first
            country to be completely mapped by scientific methods.
          </p>
          <p className="text-justify">
            Mapmaking has come a long way since those days. Today’s surveyors rarely go into the
            field without being linked to navigation satellites. Their hand-held receivers are the
            most familiar of the new mapping technologies, and the satellite system, developed and
            still operated by the US Defense Department, is increasingly used by surveyors. Even
            ordinary hikers, sailors and explorers can tap into it for data telling them where they
            are. Simplified civilian versions of the receivers are available for a few hundred
            dollars and they are also the heart of electronic map displays available in some cars.
            Cartography is pressing on to cosmic frontiers, but its objective is, and always has
            been, to communicate a sense of ‘here’ in relation to ‘there’, however far away ‘there’
            may be.
          </p>
          <small>*Cartography: mapmaking</small> <br />
          <small>** meridians: lines of longitude on the earth running north to south</small>
        </Col>
        <Col>
          <h5 className="mt-4">
            <b> Questions 14-18</b>
          </h5>
          <p>
            Choose the correct letter, <b> A, B, C, or D. </b>
            <br />
            Write the correct letter in boxes 14 - 18 on your answer sheet.
          </p>
          <Row>
            <Col md={6}>
              <div>
                <p className="mt-2">
                  14. According to the first paragraph, map makers in the 21st century
                </p>
                <div className="mb-3">
                  <Form
                    onChange={(event) => {
                      const {
                        target: { value }
                      } = event;
                      dispatch(
                        updateReadingAnswer({
                          ...getAnswers,
                          14: value
                        })
                      );
                    }}>
                    <Form.Check
                      label="A.combine techniques to chart unknown territory."
                      name="group1"
                      type="radio"
                      value="a"
                      id={`inline-radio-1`}
                      defaultChecked={getAnswers[14] === 'a'}
                    />
                    <Form.Check
                      label="B. still rely on being able to see what they map."
                      name="group1"
                      type="radio"
                      value="b"
                      id={`inline-radio-2`}
                      defaultChecked={getAnswers[14] === 'b'}
                    />
                    <Form.Check
                      label="C. are now able to visit the darkest jungle."
                      name="group1"
                      type="radio"
                      value="c"
                      id={`inline-radio-3`}
                      defaultChecked={getAnswers[14] === 'c'}
                    />
                    <Form.Check
                      label="D. need input from experts in other fields."
                      name="group1"
                      type="radio"
                      value="d"
                      id={`inline-radio-4`}
                      defaultChecked={getAnswers[14] === 'd'}
                    />
                  </Form>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div>
                <p className="mt-2">15. The Library of Congress offers an opportunity to</p>
                <div className="mb-3">
                  <Form
                    onChange={(event) => {
                      const {
                        target: { value }
                      } = event;
                      dispatch(
                        updateReadingAnswer({
                          ...getAnswers,
                          15: value
                        })
                      );
                    }}>
                    <Form.Check
                      label="A. borrow from their collection of Dutch maps."
                      name="group1"
                      type="radio"
                      value="a"
                      id={`inline-radio-1`}
                      defaultChecked={getAnswers[15] === 'a'}
                    />
                    <Form.Check
                      label="B. learn how to restore ancient and fragile maps."
                      name="group1"
                      type="radio"
                      value="b"
                      id={`inline-radio-2`}
                      defaultChecked={getAnswers[15] === 'b'}
                    />
                    <Form.Check
                      label="C. enjoy the atmosphere of the reading room."
                      name="group1"
                      type="radio"
                      value="c"
                      id={`inline-radio-3`}
                      defaultChecked={getAnswers[15] === 'c'}
                    />
                    <Form.Check
                      label="D. create individual computer maps to order."
                      name="group1"
                      type="radio"
                      value="d"
                      id={`inline-radio-4`}
                      defaultChecked={getAnswers[15] === 'd'}
                    />
                  </Form>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div>
                <p className="mt-2">16. Ptolemy alerted his contemporaries to the importance of</p>
                <div className="mb-3">
                  <Form
                    onChange={(event) => {
                      const {
                        target: { value }
                      } = event;
                      dispatch(
                        updateReadingAnswer({
                          ...getAnswers,
                          16: value
                        })
                      );
                    }}>
                    <Form.Check
                      label="A. measuring the circumference of the world."
                      name="group1"
                      type="radio"
                      value="a"
                      id={`inline-radio-1`}
                      defaultChecked={getAnswers[16] === 'a'}
                    />
                    <Form.Check
                      label="B. organising maps to reflect accurate ratios of distance."
                      name="group1"
                      type="radio"
                      value="b"
                      id={`inline-radio-2`}
                      defaultChecked={getAnswers[16] === 'b'}
                    />
                    <Form.Check
                      label="C. working out the distance between parallels of latitude."
                      name="group1"
                      type="radio"
                      value="c"
                      id={`inline-radio-3`}
                      defaultChecked={getAnswers[16] === 'c'}
                    />
                    <Form.Check
                      label="D. accuracy and precision in mapping."
                      name="group1"
                      type="radio"
                      value="d"
                      id={`inline-radio-4`}
                      defaultChecked={getAnswers[16] === 'd'}
                    />
                  </Form>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div>
                <p className="mt-2">17. The invention of the printing press</p>
                <div className="mb-3">
                  <Form
                    onChange={(event) => {
                      const {
                        target: { value }
                      } = event;
                      dispatch(
                        updateReadingAnswer({
                          ...getAnswers,
                          17: value
                        })
                      );
                    }}>
                    <Form.Check
                      label="A. revitalised interest in scientific knowledge."
                      name="group1"
                      type="radio"
                      value="a"
                      id={`inline-radio-1`}
                      defaultChecked={getAnswers[17] === 'a'}
                    />
                    <Form.Check
                      label="B. enable maps to be produced more cheaply."
                      name="group1"
                      type="radio"
                      value="b"
                      id={`inline-radio-2`}
                      defaultChecked={getAnswers[17] === 'b'}
                    />
                    <Form.Check
                      label="C. change the approach to mapmaking."
                      name="group1"
                      type="radio"
                      value="c"
                      id={`inline-radio-3`}
                      defaultChecked={getAnswers[17] === 'c'}
                    />
                    <Form.Check
                      label="D. and ensure that the work of Ptolemy was continued."
                      name="group1"
                      type="radio"
                      value="d"
                      id={`inline-radio-4`}
                      defaultChecked={getAnswers[17] === 'd'}
                    />
                  </Form>
                </div>
              </div>
            </Col>

            <Col md={6}>
              <div>
                <p className="mt-2">18. The writer concludes by stating that</p>
                <div className="mb-3">
                  <Form
                    onChange={(event) => {
                      const {
                        target: { value }
                      } = event;
                      dispatch(
                        updateReadingAnswer({
                          ...getAnswers,
                          18: value
                        })
                      );
                    }}>
                    <Form.Check
                      label="A. mapmaking has become too specialised."
                      name="group1"
                      type="radio"
                      value="a"
                      id={`inline-radio-1`}
                      defaultChecked={getAnswers[18] === 'a'}
                    />
                    <Form.Check
                      label="B. cartographers work in very harsh conditions."
                      name="group1"
                      type="radio"
                      value="b"
                      id={`inline-radio-2`}
                      defaultChecked={getAnswers[18] === 'b'}
                    />
                    <Form.Check
                      label="C. the fundamental aims of mapmaking remain unchanged."
                      name="group1"
                      type="radio"
                      value="c"
                      id={`inline-radio-3`}
                      defaultChecked={getAnswers[18] === 'c'}
                    />
                    <Form.Check
                      label="D. the possibilities of satellite mapping are infinite."
                      name="group1"
                      type="radio"
                      value="d"
                      id={`inline-radio-4`}
                      defaultChecked={getAnswers[18] === 'd'}
                    />
                  </Form>
                </div>
              </div>
            </Col>
          </Row>
          <h5 className="mt-4">
            <b> Questions 19-21</b>
          </h5>
          <p>
            Look at the following list of achievements (Questions 19-21) and the list of mapmakers
            below. <br />
            Match each achievement with the correct mapmaker, <b> A, B, C or D.</b>
            <br />
            Write the correct letter, <b> A, B, C or D</b>, in boxes 19-21 on your answer sheet.
          </p>
          <Row className="mb-2">
            <Col md={1}>
              <b>19</b>
            </Col>
            <Col md={2}>
              <input
                style={{ border: 'none', width: '100%' }}
                value={getAnswers[19]}
                onChange={(event) => {
                  dispatch(
                    updateReadingAnswer({
                      ...getAnswers,
                      19: event.target.value
                    })
                  );
                }}
              />
            </Col>
            <Col>came very close to accurately measuring the distance around the Earth.</Col>
          </Row>
          <Row className="mb-2">
            <Col md={1}>
              <b>20</b>
            </Col>
            <Col md={2}>
              <input
                style={{ border: 'none', width: '100%' }}
                value={getAnswers[20]}
                onChange={(event) => {
                  dispatch(
                    updateReadingAnswer({
                      ...getAnswers,
                      20: event.target.value
                    })
                  );
                }}
              />
            </Col>
            <Col>produced maps showing man-made landmarks.</Col>
          </Row>
          <Row className="mb-2">
            <Col md={1}>
              <b>21</b>
            </Col>
            <Col md={2}>
              <input
                style={{ border: 'none', width: '100%' }}
                value={getAnswers[21]}
                onChange={(event) => {
                  dispatch(
                    updateReadingAnswer({
                      ...getAnswers,
                      21: event.target.value
                    })
                  );
                }}
              />
            </Col>
            <Col>laid the foundation for our modern time zones.</Col>
          </Row>

          <div className="bordered-black ">
            <Table borderless>
              <tbody>
                <tr>
                  <td colSpan={2}>
                    <b>List of Mapmakers</b>
                  </td>
                </tr>
                <tr>
                  <td style={{ width: '10%' }}>
                    <b>A</b>
                  </td>
                  <td>Mercator</td>
                </tr>
                <tr>
                  <td style={{ width: '10%' }}>
                    <b>B</b>
                  </td>
                  <td>Ptolemy</td>
                </tr>
                <tr>
                  <td style={{ width: '10%' }}>
                    <b>C</b>
                  </td>
                  <td>Cassini family</td>
                </tr>
                <tr>
                  <td style={{ width: '10%' }}>
                    <b>D</b>
                  </td>
                  <td>Eratosthenes</td>
                </tr>
              </tbody>
            </Table>
          </div>

          <h5 className="mt-4">
            <b> Questions 22-26</b>
          </h5>
          <p>
            Complete the summary below.
            <br />
            Choose <b> NO MORE THAN TWO WORDS </b>from the passage for each answer. <br />
            Write your answers in boxes 22-26 on your answer sheet.
          </p>
          <p className="text-justify">
            Ancient maps allow us to see how we have come to make sense of the world see. They also
            reflect the attitudes and knowledge of the day. The first great step in mapmaking took
            place in <b> 22</b>{' '}
            <input
              style={{ border: 'none' }}
              value={getAnswers[22]}
              onChange={(event) => {
                dispatch(
                  updateReadingAnswer({
                    ...getAnswers,
                    22: event.target.value
                  })
                );
              }}
            />{' '}
            in the 3rd century BC. Work continued in this tradition until the 2nd century AD but was
            then abandoned for over a thousand years, during which time maps were the responsibility
            of <br />
            <b>23 </b>
            <input
              style={{ border: 'none' }}
              value={getAnswers[23]}
              onChange={(event) => {
                dispatch(
                  updateReadingAnswer({
                    ...getAnswers,
                    23: event.target.value
                  })
                );
              }}
            />{' '}
            rather than scientists. Fortunately, however, the writings of <br />
            <b>24 </b>
            <input
              style={{ border: 'none' }}
              value={getAnswers[24]}
              onChange={(event) => {
                dispatch(
                  updateReadingAnswer({
                    ...getAnswers,
                    24: event.target.value
                  })
                );
              }}
            />
            . had been kept, and interest in scientific mapmaking was revived as scholars sought to
            produce maps, inspired by the accounts of travellers. These days, <b> 25 </b>{' '}
            <input
              style={{ border: 'none' }}
              value={getAnswers[25]}
              onChange={(event) => {
                dispatch(
                  updateReadingAnswer({
                    ...getAnswers,
                    25: event.target.value
                  })
                );
              }}
            />{' '}
            are vital to the creation of maps and radar has allowed cartographers to map areas
            beyond our immediate world. In addition, this high-tech equipment is not only used to
            map faraway places, but cheaper versions have also been developed for use in <b> 26 </b>{' '}
            <input
              style={{ border: 'none' }}
              value={getAnswers[26]}
              onChange={(event) => {
                dispatch(
                  updateReadingAnswer({
                    ...getAnswers,
                    26: event.target.value
                  })
                );
              }}
            />{' '}
            .
          </p>
        </Col>
      </Row>
    </>
  );
};

export default SecondSectionReadingComponent;
