import axios from 'axios';

const API_KEY = 'bdbc07f7fb6918c946cf9e79b19ef259';
const BASE_URL = 'https://api.themoviedb.org/3/';
const TRENDS = 'trending/movie/day';
const SEARCH_MOVIE = 'search/movie';
const STATIC_PARAMS = 'language=en-US&include_adult=false';

async function fetchMovieTrends() {
  const {
    data: { results, total_results },
    status,
  } = await axios.get(`${BASE_URL}${TRENDS}?api_key=${API_KEY}`);

  if (status !== 200 || total_results === 0) {
    throw new Error();
  } else return Object.values(results);
}

async function fetchMovieById(IdMovie) {
  const { data, status } = await axios.get(
    `${BASE_URL}movie/${IdMovie}?api_key=${API_KEY}`
  );

  if (status !== 200 || !data) {
    throw new Error();
  } else return data;
}

async function fetchCreditsById(IdMovie) {
  const { data, status } = await axios.get(
    `${BASE_URL}movie/${IdMovie}/credits?api_key=${API_KEY}`
  );

  if (status !== 200 || !data) {
    throw new Error();
  } else return data;
}

async function fetchMovieSearch(query = '', page = 1) {
  await axios.get(
    `${BASE_URL}${SEARCH_MOVIE}?${query}&page=${page}&api_key=${API_KEY}&${STATIC_PARAMS}`
  );
}

export const API = {
  fetchMovieTrends,
  fetchMovieSearch,
  fetchMovieById,
  fetchCreditsById,
};
