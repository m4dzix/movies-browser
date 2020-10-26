import React from "react";
import {
  Container,
  Poster,
  Title,
  Year,
  Tags,
  Span,
  About,
  VoteContainer,
  VoteAverage,
  VoteCount,
  Description,
  Content,
} from "./styled";

const DetailsTile = ({
  info1,
  info2,
  value1,
  value2,
  description,
  title,
  year,
  type,
  imagePath,
  voteAverage,
  voteCount,
  starIcon,
}) => {
  return (
    <>
      <Container>
        <Poster src={imagePath} alt={""} />
        <Content>
          <Title>{title}</Title>
          <Year>{year}</Year>
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
          <VoteContainer>
            <img src={starIcon} alt={""}></img>
            <VoteAverage>{voteAverage}</VoteAverage>
            <VoteCount>{voteCount}</VoteCount>
          </VoteContainer>
          <Description>{description}</Description>
        </Content>
      </Container>
    </>
  );
};

export default DetailsTile;
