import { useHistory, useLocation } from "react-router-dom";

export const useQueryParameters = (key) => {
  const location = useLocation();
  return new URLSearchParams(location.search).get(key);
};

export const useReplaceQueryParameters = () => {
  const history = useHistory();
  const location = useLocation();

  return ({ key, value }) => {
    const searchParams = new URLSearchParams(location.search);
    if (value.trim() === "") {
      searchParams.delete(key);
    } else {
      searchParams.set(key, value);
    }

    if (searchParams.get(key)) {
      history.push(
        `${location.pathname}?${key}=${searchParams.get(key).toString()}`
      );
    } else {
      searchParams
        ? history.push(`${location.pathname}?${searchParams.toString()}`)
        : history.push(`${location.pathname}`);
    }
  };
};
