export const toMovies = () => "/popular-movies";
export const toPeople = () => "/popular-people";
export const toMovie = ({ id } = { id: ":id" }) => `/movie-details/${id}`;
export const toPerson = ({ id } = { id: ":id" }) => `/people-details/${id}`;
