import React from "react";
import {
  Container,
  Poster,
  Content,
  DetailsContainer,
  Title,
  Year,
  Tags,
  Span,
  About,
  VoteContainer,
  VoteAverage,
  VoteCount,
  Description,
} from "./styled";

const Tile = ({
  changeTileStyle,
  detailsTileStyle,
  imagePath,
  title,
  year,
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
          <Year people={changeTileStyle} movieDetails={detailsTileStyle}>
            {year}
          </Year>
          <div>
            <About>
              <Span>{info1}</Span>
              {value1}
            </About>
            <About>
              <Span>{info2}</Span>
              {value2}
            </About>
          </div>
          <Tags>{type}</Tags>
        </DetailsContainer>
        <VoteContainer>
          <img src={starIcon} alt={""}></img>
          <VoteAverage movieDetails={detailsTileStyle}>
            {voteAverage}{" "}
            <VoteCount movieDetails={detailsTileStyle} maxAverage>
              {maxAverage}
            </VoteCount>
          </VoteAverage>
          <VoteCount>{voteCount}</VoteCount>
        </VoteContainer>
      </Content>
      <Description movieDetails={detailsTileStyle}>{description}</Description>
    </Container>
  );
};

export default Tile;
