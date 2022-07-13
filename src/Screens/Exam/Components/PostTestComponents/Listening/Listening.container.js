/* eslint-disable */
import React, { useState } from 'react';

import ListeningTestComponent from './ListeningTest.component';
import ListeningInstructionsComponent from './ListeningInstructions.component';

const PAGE = {
  INSTRUCTIONS: 1,
  TEST: 2
};

const TimeTest = Date.now() + 1800000;

const ListeningContainer = ({ dispatch, handleNextPage }) => {
  const [page, setPage] = useState(PAGE.INSTRUCTIONS);
  return (
    <div>
      {page === PAGE.INSTRUCTIONS && (
        <ListeningInstructionsComponent start={() => setPage(PAGE.TEST)} />
      )}
      {page === PAGE.TEST && (
        <ListeningTestComponent
          dispatch={dispatch}
          handleNextPage={handleNextPage}
          date={TimeTest}
        />
      )}
    </div>
  );
};

export default ListeningContainer;
