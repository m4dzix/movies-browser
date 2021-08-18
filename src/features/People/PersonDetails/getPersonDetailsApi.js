import { API_KEY, API_URL, API_LANGUAGE } from "../../fetchFromApi";

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
