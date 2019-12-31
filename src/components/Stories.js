import React, { useEffect, useState } from 'react';
import { getLatestStoriesIds } from '../controllers/index';
import Story from './Story';

const Stories = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getLatestStoriesIds().then(stories => setStoryIds(stories));
  }, []);

  return (
    <>
      <h1>Hacker News Stories</h1>
      {storyIds.map(storyId => (
        <Story storyId={storyId} key={storyId}></Story>
      ))}
    </>
  );
};

export default Stories;
