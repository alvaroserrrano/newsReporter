import React, { useEffect, useState, Fragment } from 'react';
import { getStory } from '../controllers/index';
import {
  StoryWrapper,
  StoryTitle,
  StoryMeta,
  StoryMetaElement
} from '../styles/StoryStyles';

const Story = ({ storyId }) => {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyId).then(data => data && data.url && setStory(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { url, title, by, time, score, type } = story;

  return story && story.url ? (
    <StoryWrapper data-testid='story'>
      <StoryTitle>
        <a href={url}>{title}</a>
      </StoryTitle>

      <StoryMeta>
        <span className='story__by' data-testid='story-by'>
          <StoryMetaElement color='#000'>By:</StoryMetaElement>
          {by}
        </span>
        <span className='story__time' data-testid='story-time'>
          <StoryMetaElement color='#000'>Posted:</StoryMetaElement> {time}
        </span>
      </StoryMeta>
    </StoryWrapper>
  ) : null;
};

export default Story;
