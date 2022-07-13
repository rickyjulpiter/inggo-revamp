/* eslint-disable */
import React, { useState } from 'react';

import WritingInstructionsComponent from './WritingInstructions.component';
import WritingTestComponent from './WritingTest.component';

const PAGE = {
  INSTRUCTIONS: 1,
  TEST: 2
};

const TimeTest = Date.now() + 3600000;

const WritingContainer = ({ dispatch, handleNextPage }) => {
  const [page, setPage] = useState(PAGE.INSTRUCTIONS);
  return (
    <>
      {page === PAGE.INSTRUCTIONS && (
        <WritingInstructionsComponent start={() => setPage(PAGE.TEST)} />
      )}
      {page === PAGE.TEST && (
        <WritingTestComponent
          date={TimeTest}
          dispatch={dispatch}
          handleNextPage={handleNextPage}
        />
      )}
    </>
  );
};

export default WritingContainer;
