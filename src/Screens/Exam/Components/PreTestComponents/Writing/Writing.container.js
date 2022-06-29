/* eslint-disable */
import React, { useEffect, useState } from 'react';

import WritingInstructionsComponent from './WritingInstructionsComponent';
import WritingTestComponent from './WritingTest.component';
import axios from 'axios';

const PAGE = {
  INSTRUCTIONS: 1,
  TEST: 2
};

const WritingContainer = ({ dispatch, handleNextPage }) => {
  const [page, setPage] = useState(PAGE.INSTRUCTIONS);

  useEffect(() => {
    hitServer();
  }, []);

  const hitServer = async () => {
    await axios.get('  https://inggo-be.herokuapp.com/');
  };

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
