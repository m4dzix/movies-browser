import React from "react";
import {
  Container,
  Poster,
  Content,
  DetailsContainer,
  Title,
  Year,
  Tags,
  VoteContainer,
  VoteAverage,
  VoteCount,
} from "./style";

const Tile = ({
  group,
  title,
  year,
  type,
  imagePath,
  starIcon,
  voteAverage,
  voteCount,
}) => {
  return (
    <Container people={group === "people" ? true : false}>
      <Poster
        people={group === "people" ? true : false}
        src={imagePath}
        alt={""}
      />
      <Content people={group === "people" ? true : false}>
        <DetailsContainer>
          <Title people={group === "people" ? true : false}>{title}</Title>
          <Year>{year}</Year>
          <Tags>{type}</Tags>
        </DetailsContainer>
        <VoteContainer>
          <img src={starIcon} alt={""}></img>
          <VoteAverage>{voteAverage}</VoteAverage>
          <VoteCount>{voteCount} </VoteCount>
        </VoteContainer>
      </Content>
    </Container>
  );
};

export default Tile;
