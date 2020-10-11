import styled from "styled-components";

export const Container = styled.div`
  width: 324px;
  height: 650px;
  padding: 16px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  border-radius: 5px;
  display: grid;
  grid-gap: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  align-items: start;
`;

export const Poster = styled.img`
  width: 292px;
  height: 434px;
  border-radius: 5px;
`;
export const Title = styled.h3`
  font-weight: 500;
  font-size: 22px;
  margin: 0;
`;
export const Year = styled.p`
  font-size: 16px;
  line-height: 150%;
  margin: 0;
  color: ${({ theme }) => theme.colors.waterloo};
`;

export const Tags = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0;
  padding: 0;
`;
export const Tag = styled.li`
  font-size: 14px;
  line-height: 140%;
  background-color: ${({ theme }) => theme.colors.mistic};
  border-radius: 5px;
  margin-right: 8px;
  padding: 8px 16px;
`;
export const VoteContainer = styled.div`
  align-self: end;
  display: flex;
  align-items: center;
`;
export const StarIcon = styled.img``;

export const VoteAverage = styled.strong`
  font-weight: 600;
  font-size: 16px;
  margin: 0 12px;
`;
export const VoteCount = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
`;
