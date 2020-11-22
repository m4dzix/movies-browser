export const getPopularMovies = async (page) => {
  const api = `https://api.themoviedb.org/3/movie/popular?api_key=284d89d28528d0d1591b16fc44d13746&language=en-US&page=${page}`;
  const response = await fetch(api);

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const popularMovies = await response.json();

  return popularMovies;
};

export const getMovieGenres = async () => {
  const api = `https://api.themoviedb.org/3/genre/movie/list?api_key=284d89d28528d0d1591b16fc44d13746&language=en-US`;
  const response = await fetch(api);

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const arrayGenre = await response.json();

  return arrayGenre.genres;
};

export const getMovieDetails = async (id) => {
  const api = `https://api.themoviedb.org/3/movie/${id}?api_key=284d89d28528d0d1591b16fc44d13746&language=en-US`;
  const response = await fetch(api);

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const movieDetails = response.json();

  return movieDetails;
};

export const getMoviesByQuery = async (query) => {
  const api = `https://api.themoviedb.org/3/search/movie/?api_key=284d89d28528d0d1591b16fc44d13746&language=en-US&query=${query}`
  const response = await fetch(api);
  
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const moviesByQuery = response.json();

  return moviesByQuery;
}

export const getMovieCredits = async (id) => {
  const api = `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=284d89d28528d0d1591b16fc44d13746&language=en-US`;
  const response = await fetch(api);
  
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const movieCredits = await response.json();

  return movieCredits;
};