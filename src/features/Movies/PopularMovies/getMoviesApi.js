import { API_KEY, API_URL, API_LANGUAGE } from "../../fetchFromApi";

export const getPopularMovies = async (page) => {
  const api = `${API_URL}/movie/popular?api_key=${API_KEY}&language=${API_LANGUAGE}&page=${encodeURIComponent(
    page
  )}`;

  const response = await fetch(api);

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const popularMovies = await response.json();

  return popularMovies;
};

export const getMoviesByQuery = async (query, page) => {
  const api = `${API_URL}/search/movie/?api_key=${API_KEY}&language=${API_LANGUAGE}&query=${encodeURIComponent(
    query
  )}&page=${encodeURIComponent(page)}`;

  const response = await fetch(api);

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const moviesByQuery = response.json();

  return moviesByQuery;
};

export const getMovieCredits = async (id) => {
  const api = `${API_URL}/person/${encodeURIComponent(
    id
  )}/movie_credits?api_key=${API_KEY}&language=${API_LANGUAGE}`;

  const response = await fetch(api);

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const movieCredits = await response.json();

  return movieCredits;
};
