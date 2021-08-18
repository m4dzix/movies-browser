import { API_KEY, API_URL, API_LANGUAGE } from "../../fetchFromApi";

export const getPopularPeople = async (page, query) => {
  const api = query
    ? `https://api.themoviedb.org/3/search/person?api_key=${API_KEY}&language=en-US&query=${query}&page=${encodeURIComponent(
        page
      )}`
    : `${API_URL}/person/popular?api_key=${API_KEY}&language=en-US&page=${encodeURIComponent(
        page
      )}`;

  const response = await fetch(api);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const popularPeople = await response.json();

  return popularPeople;
};

export const getCredits = async (id) => {
  const api = `${API_URL}/movie/${encodeURIComponent(
    id
  )}/credits?api_key=${API_KEY}`;

  const response = await fetch(api);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const credits = await response.json();

  return credits;
};

export const getPersonDetails = async (id) => {
  const api = `${API_URL}/person/${encodeURIComponent(
    id
  )}?api_key=${API_KEY}&language=${API_LANGUAGE}`;

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
