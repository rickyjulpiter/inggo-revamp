/* eslint-disable */
import React, { useState } from 'react';

import WritingInstructionsComponent from './WritingInstructionsComponent';
import WritingTestComponent from './WritingTest.component';

const PAGE = {
  INSTRUCTIONS: 1,
  TEST: 2
};

const WritingContainer = ({ dispatch, handleNextPage }) => {
  const [page, setPage] = useState(PAGE.INSTRUCTIONS);
  return (
    <>
      {page === PAGE.INSTRUCTIONS && (
        <WritingInstructionsComponent start={() => setPage(PAGE.TEST)} />
      )}
      {page === PAGE.TEST && (
        <WritingTestComponent
          date={Date.now() + 3600000}
          dispatch={dispatch}
          handleNextPage={handleNextPage}
        />
      )}
    </>
  );
};

export default WritingContainer;
