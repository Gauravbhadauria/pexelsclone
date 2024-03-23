import {KEY} from '../Key';

const BASE_URL = 'https://api.pexels.com/';

export const NEW_PHOTOS = 'v1/curated';
export const SEARCH_PHOTOS = 'v1/search';
export const SEARCH_VIDEOS = 'videos/search';
export const POPULAR_VIDEOS = 'videos/popular';
export const getData = async (endPoint, rest) => {
  var myHeaders = new Headers();
  myHeaders.append('Authorization', KEY);

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };

  const res = await fetch(`${BASE_URL}${endPoint}${rest}`, requestOptions);
  const json = await res.json();
  return json;
};
