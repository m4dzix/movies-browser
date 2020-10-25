export const getPopularPeople = async () => {
  const api = `
https://api.themoviedb.org/3/person/popular?api_key=284d89d28528d0d1591b16fc44d13746&language=en-US&page=1`;

  const response = await fetch(api);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const popularPeople = await response.json();

  return popularPeople;
};
