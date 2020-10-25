import React, { useEffect } from "react";
import Main from "../../../common/Main";
import Section from "../../../common/Section";
import Tile from "../../../common/Tile";
import Loading from "../../../common/Loading";
import Error from "../../../common/Error";
import { useSelector, useDispatch } from "react-redux";

import {
  selectLoading,
  fetchPopularPeople,
  selectPopularPeople,
  selectChangeTileStyle,
} from "../peopleSlice";

const PopularPeople = () => {
  const loading = useSelector(selectLoading);
  const popularPeople = useSelector(selectPopularPeople);
  const changeTileStyle = useSelector(selectChangeTileStyle);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPopularPeople());
  }, [dispatch]);

  if (!loading && popularPeople) {
    return (
      <Main>
        <Section
          changeTileStyle={changeTileStyle}
          title={"Popular people"}
          body={popularPeople.map((people) => (
            <Tile
              changeTileStyle={changeTileStyle}
              key={people.id}
              title={people.name}
              imagePath={`https://image.tmdb.org/t/p/w185/${people.profile_path}`}
            ></Tile>
          ))}
        ></Section>
      </Main>
    );
  } else if (loading) {
    return <Loading />;
  } else {
    return <Error />;
  }
};
export default PopularPeople;
