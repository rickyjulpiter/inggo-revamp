/* eslint-disable */
import React, { useState } from 'react';

import ReadingInstructionsComponent from './ReadingInstructionsComponent';
import ReadingTestComponent from './ReadingTest.component';

const PAGE = {
  INSTRUCTIONS: 1,
  TEST: 2
};

const ReadingContainer = () => {
  const [page, setPage] = useState(PAGE.INSTRUCTIONS);
  return (
    <>
      {page === PAGE.INSTRUCTIONS && (
        <ReadingInstructionsComponent start={() => setPage(PAGE.TEST)} />
      )}
      {page === PAGE.TEST && <ReadingTestComponent />}
    </>
  );
};

export default ReadingContainer;
