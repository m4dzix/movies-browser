export const getMovieDetails = async (id) => {
  const api = `https://api.themoviedb.org/3/movie/${id}?api_key=284d89d28528d0d1591b16fc44d13746&language=en-US`;

  const response = await fetch(api);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const movieDetails = response.json();

  return movieDetails;
};
