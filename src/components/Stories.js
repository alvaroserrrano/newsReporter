import React, { useEffect, useState } from 'react';
import { getLatestStoriesIds } from '../controllers/index';

const Stories = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getLatestStoriesIds().then(stories => setStoryIds(stories));
  }, []);

  return <p>{JSON.stringify(storyIds)}</p>;
};

export default Stories;
