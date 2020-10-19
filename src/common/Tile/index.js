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
import starIcon from "./images/Vector.svg";

const Tile = ({ title, year, type, imagePath, voteAverage, voteCount }) => {
  return (
    <Container>
      <Poster src={imagePath} alt={""} />
      <Content>
        <DetailsContainer>
          <Title>{title}</Title>
          <Year>{year}</Year>
          <Tags>{type}</Tags>
        </DetailsContainer>
        <VoteContainer>
          <img src={starIcon} alt={"star"}></img>
          <VoteAverage>{voteAverage}</VoteAverage>
          <VoteCount>{voteCount} votes</VoteCount>
        </VoteContainer>
      </Content>
    </Container>
  );
};

export default Tile;
