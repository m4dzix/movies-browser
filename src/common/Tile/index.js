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
  type,
  title,
  year,
  group,
  imagePath,
  starIcon,
  voteAverage,
  voteCount,
}) => {
  return (
    <Container people={group}>
      <Poster people={group} src={imagePath} alt={""} />
      <Content people={group}>
        <DetailsContainer>
          <Title people={group}>{title}</Title>
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
