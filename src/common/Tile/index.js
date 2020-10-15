import React from "react";
import {
  Container,
  Poster,
  Content,
  DetailsContainer,
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
      <Content>
        <DetailsContainer>
          <Title>{title}</Title>
          <Year>{year}</Year>
          <Tags>
            <Tag>{type}</Tag>
            <Tag>{type}</Tag>
            <Tag>{type}</Tag>
          </Tags>
        </DetailsContainer>
        <VoteContainer>
          <StarIcon src={starIcon} alt={"star"} />
          <VoteAverage>{voteAverage}</VoteAverage>
          <VoteCount>{voteCount} votes</VoteCount>
        </VoteContainer>
      </Content>
    </Container>
  );
};

export default Tile;
