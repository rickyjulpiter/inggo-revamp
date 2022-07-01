import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

import { testCode } from '../../Assets/utils';
import { CardTest, ContainerTest, Input } from './style';

const GenerateTestCodeContainer = () => {
  return (
    <ContainerTest>
      <Row className="mt-4">
        <Col xs="6" md="4" sm="4" className="mx-auto">
          <CardTest>
            <Input type="text" value={testCode} />
            <Button
              variant="secondary"
              type="submit"
              className="mt-2"
              onClick={async () => {
                await navigator.clipboard.writeText(testCode);
              }}>
              Copy Code
            </Button>
          </CardTest>
        </Col>
      </Row>
    </ContainerTest>
  );
};

export default GenerateTestCodeContainer;
