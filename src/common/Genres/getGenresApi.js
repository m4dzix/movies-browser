import { API_KEY, API_URL, API_LANGUAGE } from "../../features/fetchFromApi";

export const getMovieGenres = async () => {
  const api = `${API_URL}/genre/movie/list?api_key=${API_KEY}&language=${API_LANGUAGE}`;

  const response = await fetch(api);

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const arrayGenre = await response.json();

  return arrayGenre.genres;
};
