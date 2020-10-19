import React, { useEffect } from "react";
import Main from "../../../common/Main";
import Section from "../../../common/Section";
import Tile from "../../../common/Tile";
import { useSelector, useDispatch } from "react-redux";

import {
  selectLoading,
  fetchPopularPeople,
  selectPopularPeople,
} from "../peopleSlice";
const PopularPeople = () => {
  const loading = useSelector(selectLoading);
  const popularPeople = useSelector(selectPopularPeople);
  console.log(popularPeople);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPopularPeople());
  }, [dispatch]);

  if (!loading && popularPeople) {
    return (
      <Main>
        <Section
          group={"people"}
          title={"Popular people"}
          body={popularPeople.map((people) => (
            <Tile
              group={"people"}
              key={people.id}
              title={people.name}
              imagePath={`https://image.tmdb.org/t/p/w185/${people.profile_path}`}
            ></Tile>
          ))}
        ></Section>
      </Main>
    );
  } else if (loading) {
    return (
      <div>
        <h1>LOADING</h1>
        <p>please wait for a while...</p>;
      </div>
    );
  } else {
    return <div>ERROR ERROR ERROR</div>;
  }
};
export default PopularPeople;
