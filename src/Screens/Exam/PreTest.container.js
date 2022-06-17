/* eslint-disable */
import React, { useState } from 'react';

import { ContainerTest } from './style';
import CodeCheckComponent from './Components/CodeCheck.component';
import ListeningContainer from './Components/Listening/Listening.container';
import ReadingContainer from './Components/Reading/Reading.container';

const PAGE = {
  AUTH: 1,
  LISTENING: 2,
  READING: 3,
  WRITING: 4
};

const PreTestContainer = () => {
  const [page, setPage] = useState(PAGE.READING);

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
      {page === PAGE.READING && <ReadingContainer handleNextPage={handleNextPage} /> }
    </ContainerTest>
  );
};

export default PreTestContainer;
