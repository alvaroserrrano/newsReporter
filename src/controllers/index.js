// https://github.com/HackerNews/API

import axios from 'axios';

export const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
export const latestStoriesUrl = `${baseUrl}newstories.json`;
export const topStoriesUrl = `${baseUrl}topstories.json`;
export const bestStoriesUrl = `${baseUrl}beststories.json`;
export const singleStoryUrl = `${baseUrl}item/`;

export const getLatestStoriesIds = async () => {
  const result = await axios.get(latestStoriesUrl).then(({ data }) => data);
  // console.log(result);
  return result;
};

export const getTopStoriesIds = async () => {
  const result = await axios.get(topStoriesUrl).then(({ data }) => data);
  // console.log(result);
  return result;
};

export const getBestStoriesIds = async () => {
  const result = await axios.get(bestStoriesUrl).then(({ data }) => data);
  // console.log(result);
  return result;
};

export const getStory = async storyId => {
  const result = await axios
    .get(`${singleStoryUrl + storyId}.json`)
    .then(({ data }) => data);
  return result;
};
