import { API_KEY, API_URL, API_LANGUAGE } from "../../fetchFromApi";

export const getPopularMovies = async (page, query) => {
  const api = query
    ? `
    https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=${API_LANGUAGE}&query=${query}&page=${encodeURIComponent(
        page
      )}`
    : `
    https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=${API_LANGUAGE}&page=${encodeURIComponent(
        page
      )}`;

  const response = await fetch(api);

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const popularMovies = await response.json();

  return popularMovies;
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
