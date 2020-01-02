import React, { useEffect, useState } from 'react';
import { getLatestStoriesIds } from '../controllers/index';
import Story from './Story';
import { GlobalStyles } from '../styles/Global';
import { StoriesWrapper } from '../styles/StoriesStyles';
const Stories = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getLatestStoriesIds().then(stories => setStoryIds(stories));
  }, []);

  return (
    <>
      <GlobalStyles></GlobalStyles>
      <StoriesWrapper>
        <h1>Hacker News Stories</h1>
        {storyIds.map(storyId => (
          <Story storyId={storyId} key={storyId}></Story>
        ))}
      </StoriesWrapper>
    </>
  );
};

export default Stories;
