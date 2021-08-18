import { useReplaceQueryParameters } from "./useQueryParameters";

export const useGoToPage = () => {
  const replaceQueryParameters = useReplaceQueryParameters();
  return (page) => {
    replaceQueryParameters({
      key: "page",
      value: page.toString(),
    });
  };
};
