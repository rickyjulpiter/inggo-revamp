/* eslint-disable */
import React, { useState } from 'react';

import ReadingInstructionsComponent from './ReadingInstructionsComponent';
import ReadingTestComponent from './ReadingTest.component';

const PAGE = {
  INSTRUCTIONS: 1,
  TEST: 2
};

const ReadingContainer = ({ dispatch, handleNextPage }) => {
  const [page, setPage] = useState(PAGE.INSTRUCTIONS);
  const TimeTest = 1657687858527;

  return (
    <>
      {page === PAGE.INSTRUCTIONS && (
        <ReadingInstructionsComponent start={() => setPage(PAGE.TEST)} />
      )}
      {page === PAGE.TEST && (
        <ReadingTestComponent
          date={TimeTest}
          dispatch={dispatch}
          handleNextPage={handleNextPage}
        />
      )}
    </>
  );
};

export default ReadingContainer;
