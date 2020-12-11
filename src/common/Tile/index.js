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
  details,
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
    <Container people={changeTileStyle} details={details}>
      <Poster
        people={changeTileStyle}
        details={details}
        src={imagePath}
        alt={""}
      />
      <Content people={changeTileStyle} details={details}>
        <DetailsContainer details={details}>
          <Title people={changeTileStyle} details={details}>
            {title}
          </Title>
          <YearOrCharacter people={changeTileStyle} details={details}>
            {yearOrCharacter}
          </YearOrCharacter>
          <div>
            <About>
              <Span details={hide}>{info1}</Span>
              {value1}
            </About>
            <About>
              <Span details={hide}>{info2}</Span>
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
            details={details}
            hidden={!voteAverage || voteAverage < 1}
          >
            {voteAverage}{" "}
            <VoteCount details={details} maxAverage>
              {maxAverage}
            </VoteCount>
          </VoteAverage>
          <VoteCount details={details}>{voteCount}</VoteCount>
        </VoteContainer>
      </Content>
      <Description details={details}>{description}</Description>
    </Container>
  );
};

export default Tile;
