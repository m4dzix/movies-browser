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
  changeTileStyle,
  imagePath,
  starIcon,
  voteAverage,
  voteCount,
}) => {
  return (
    <Container people={changeTileStyle}>
      <Poster people={changeTileStyle} src={imagePath} alt={""} />
      <Content people={changeTileStyle}>
        <DetailsContainer>
          <Title people={changeTileStyle}>{title}</Title>
          <Year>{year}</Year>
          <Tags>{type}</Tags>
        </DetailsContainer>
        <VoteContainer>
          <img src={starIcon} alt={""}></img>
          <VoteAverage>{voteAverage}</VoteAverage>
          <VoteCount>{voteCount}</VoteCount>
        </VoteContainer>
      </Content>
    </Container>
  );
};

export default Tile;
