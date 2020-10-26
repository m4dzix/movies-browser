import styled from "styled-components";

export const Container = styled.div`
  max-width: 1368px;
  padding: 16px;
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  border-radius: 5px;
  display: grid;
  grid-gap: 8px;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  background-color: ${({ theme }) => theme.colors.white};
  align-items: start;
`;

export const Poster = styled.img`
  width: 312px;
  height: 464px;
  border-radius: 5px;
  background-color: #eee;
  align-self: center;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 3;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 114px;
    height: 169px;
    grid-row-end: 2;
  }
`;
export const Title = styled.h3`
  font-weight: 500;
  font-size: 22px;
  margin: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 16px;
  }
`;
export const Year = styled.p`
  font-size: 16px;
  line-height: 150%;
  margin: 0;
  color: ${({ theme }) => theme.colors.waterloo};
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 13px;
  }
`;
export const About = styled.p`
  font-size: 18px;
  line-height: 120%;
  margin: 0;
  padding: 0;
  margin-bottom: 8px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 12px;
  }
`;
export const Span = styled.span`
  font-size: 18px;
  line-height: 120%;
  color: #74788b;
  margin: 0;
  padding: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    display: none;
  }
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
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 4px 8px;
    font-size: 10px;
  }
`;
export const VoteContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const Content = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-gap: 24px;
  padding: 40px;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-gap: 4px;
    padding: 16px;
  }
`;
export const VoteAverage = styled.strong`
  font-weight: 600;
  font-size: 16px;
  padding: 0;
  margin: 0 12px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 13px;
  }
`;
export const VoteCount = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  margin: 0;
  padding: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 13px;
  }
`;
export const Description = styled.div`
  font-size: 20px;
  line-height: 160%;
  margin: 0;
  padding: 0 40px;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 14px;
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
    padding: 0;
  }
`;