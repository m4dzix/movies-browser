import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Tags, Tag } from "./styled";
import { fetchGenres, selectGenres, selectLoading } from "./genresSlice";

const Genres = ({ genre_ids, genreId }) => {
  const loading = useSelector(selectLoading);
  const genres = useSelector(selectGenres);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  const type = (typeId) =>
    genres.filter((item) => item.id === typeId).map((genre) => genre.name);

  if (!loading && genres.length > 0) {
    if (!!genre_ids)
      return (
        <Tags>
          {genre_ids.map((id) => (
            <Tag key={id}>{type(id)}</Tag>
          ))}
        </Tags>
      );
    else if (!!genreId)
      return (
        <Tags>
          {genreId.map((genre) => (
            <Tag key={genre.id}>{genre.name}</Tag>
          ))}
        </Tags>
      );
    else return false;
  } else {
    return null;
  }
};

export default Genres;
