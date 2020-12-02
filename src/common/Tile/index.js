import React from "react";
import {
  Container,
  Poster,
  Content,
  DetailsContainer,
  Title,
  YearOrCharacter,
  Tags,
  Span,
  About,
  VoteContainer,
  StarIcon,
  VoteAverage,
  VoteCount,
  Description,
} from "./styled";

const Tile = ({
  changeTileStyle,
  detailsTileStyle,
  hide,
  imagePath,
  title,
  yearOrCharacter,
  info1,
  info2,
  value1,
  value2,
  type,
  starIcon,
  voteAverage,
  maxAverage,
  voteCount,
  description,
}) => {
  return (
    <Container people={changeTileStyle} movieDetails={detailsTileStyle}>
      <Poster
        people={changeTileStyle}
        movieDetails={detailsTileStyle}
        src={imagePath}
        alt={""}
      />
      <Content people={changeTileStyle} movieDetails={detailsTileStyle}>
        <DetailsContainer movieDetails={detailsTileStyle}>
          <Title people={changeTileStyle} movieDetails={detailsTileStyle}>
            {title}
          </Title>
          <YearOrCharacter
            people={changeTileStyle}
            movieDetails={detailsTileStyle}
          >
            {yearOrCharacter}
          </YearOrCharacter>
          <div>
            <About>
              <Span movieDetails={hide}>{info1}</Span>
              {value1}
            </About>
            <About>
              <Span movieDetails={hide}>{info2}</Span>
              {value2}
            </About>
          </div>
          <Tags>{type}</Tags>
        </DetailsContainer>
        <VoteContainer>
          <StarIcon
            src={starIcon}
            alt={""}
            hidden={!voteAverage || voteAverage < 1}
          ></StarIcon>
          <VoteAverage
            movieDetails={detailsTileStyle}
            hidden={!voteAverage || voteAverage < 1}
          >
            {voteAverage}{" "}
            <VoteCount movieDetails={detailsTileStyle} maxAverage>
              {maxAverage}
            </VoteCount>
          </VoteAverage>
          <VoteCount movieDetails={detailsTileStyle}>{voteCount}</VoteCount>
        </VoteContainer>
      </Content>
      <Description movieDetails={detailsTileStyle}>{description}</Description>
    </Container>
  );
};

export default Tile;
