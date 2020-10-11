import React from "react";
import Main from "../../common/Main";
import Section from "../../common/Section";
import Tail from "../../common/Tail";

const PopularMovies = () => {
  return (
    <Main>
      <Section
        title={"Popular movies"}
        body={
          <Tail
            title={"Tytuł"}
            year={"2020"}
            type={"action"}
            imagePath={
              "https://cdn.pixabay.com/photo/2016/03/04/18/07/bear-1236446_960_720.jpg"
            }
            voteAverage={"7,6"}
            voteCount={"35"}
          ></Tail>
        }
      ></Section>
    </Main>
  );
};
export default PopularMovies;
