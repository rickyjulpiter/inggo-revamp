/* eslint-disable */
import React, { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';

import { CardTest, Input } from '../style';
import { testCode } from '../../../Assets/utils';

const CodeCheckComponent = ({ handleNextPage }) => {
  const [code, setCode] = useState('');

  const handleCheckCode = () => {
    if (code === testCode) {
      handleNextPage();
    } else {
      alert('Sorry, your code is not registered');
    }
  };

  return (
    <Row className="mt-4">
      <Col xs="6" md="4" sm="4" className="mx-auto">
        <CardTest>
          <Input
            type="text"
            placeholder="Input your test code"
            onChange={(e) => setCode(e.target.value)}
            value={code}
          />
          <Button variant="secondary" type="submit" className="mt-2" onClick={handleCheckCode}>
            Check Code
          </Button>
        </CardTest>
      </Col>
    </Row>
  );
};

export default CodeCheckComponent;
