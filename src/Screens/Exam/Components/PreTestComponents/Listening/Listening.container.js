/* eslint-disable */
import React, { useState } from 'react';

import ListeningInstructionsComponent from './ListeningInstructionsComponent';
import ListeningTestComponent from './ListeningTest.component';

const PAGE = {
  INSTRUCTIONS: 1,
  TEST: 2
};

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
          date={Date.now() + 1800000}
        />
      )}
    </div>
  );
};

export default ListeningContainer;
