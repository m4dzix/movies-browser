import React from "react";
import {
  Container,
  Poster,
  Title,
  Year,
  Tags,
  Tag,
  StarIcon,
  VoteContainer,
  VoteAverage,
  VoteCount,
} from "./style";
import starIcon from "./images/Vector.svg";

const Tile = ({ title, year, type, imagePath, voteAverage, voteCount }) => {
  return (
    <Container>
      <Poster src={imagePath} alt={""} />
      <Title>{title}</Title>
      <Year>{year}</Year>
      <Tags>
        <Tag>{type}</Tag>
        <Tag>{type}</Tag>
        <Tag>{type}</Tag>
      </Tags>
      <VoteContainer>
        <StarIcon src={starIcon} alt={"star"} />
        <VoteAverage>{voteAverage}</VoteAverage>
        <VoteCount>{voteCount} votes</VoteCount>
      </VoteContainer>
    </Container>
  );
};

export default Tile;
