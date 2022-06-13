/* eslint-disable */
import React, { useState } from 'react';

import { ContainerTest } from './style';
import CodeCheckComponent from './Components/CodeCheck.component';
import ListeningContainer from './Components/Listening/Listening.container';

const PAGE = {
  AUTH: 1,
  LISTENING: 2
};

const PreTestContainer = () => {
  const [page, setPage] = useState(PAGE.LISTENING);

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePreviousPage = () => {
    setPage(page - 1);
  };

  return (
    <ContainerTest>
      {page === PAGE.AUTH && <CodeCheckComponent handleNextPage={handleNextPage} />}
      {page === PAGE.LISTENING && <ListeningContainer handleNextPage={handleNextPage} />}
    </ContainerTest>
  );
};

export default PreTestContainer;
