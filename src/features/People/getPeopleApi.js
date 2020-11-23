export const getPopularPeople = async (page) => {
  const api = `https://api.themoviedb.org/3/person/popular?api_key=284d89d28528d0d1591b16fc44d13746&language=en-US&page=${page}`;

  const response = await fetch(api);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const popularPeople = await response.json();

  return popularPeople;
};

export const getCredits = async (id) => {
  const api = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=284d89d28528d0d1591b16fc44d13746`;

  const response = await fetch(api);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const credits = await response.json();

  return credits;
};

export const getPersonDetails = async (id) => {
  const api = `https://api.themoviedb.org/3/person/${id}?api_key=284d89d28528d0d1591b16fc44d13746&language=en-US`;

  const response = await fetch(api);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const personDetails = await response.json();

  return personDetails;
};

export const getPeopleByQuery = async (query, page) => {
  const api = `https://api.themoviedb.org/3/search/person?api_key=284d89d28528d0d1591b16fc44d13746&language=en-US&query=${query}&page=${page}`;

  const response = await fetch(api);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const peopleByQuery = await response.json();

  return peopleByQuery;
};
