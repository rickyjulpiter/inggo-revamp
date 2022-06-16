/* eslint-disable */
import React, { useState } from 'react';

import InstructionsComponent from './Instructions.component';
import ListeningTestComponent from './ListeningTest.component';

const PAGE = {
  INSTRUCTIONS: 1,
  TEST: 2
};

const ListeningContainer = () => {
  const [page, setPage] = useState(PAGE.INSTRUCTIONS);
  return (
    <div>
      {page === PAGE.INSTRUCTIONS && <InstructionsComponent start={() => setPage(PAGE.TEST)} />}
      {page === PAGE.TEST && <ListeningTestComponent />}
    </div>
  );
};

export default ListeningContainer;
