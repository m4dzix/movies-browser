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
  grid-template-rows: auto 1fr;
  background-color: ${({ theme }) => theme.colors.white};
  align-items: center;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 288px;
    height: auto;
    grid-template-columns: auto 1fr;
  }
`;

export const Poster = styled.img`
  width: 292px;
  height: 434px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.silver};
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 114px;
    height: 169px;
  }
`;
export const Content = styled.div`
  display: grid;
  align-items: start;
  justify-items: start;
  align-self: stretch; ;
`;
export const DetailsContainer = styled.div`
  align-self: start;
`;
export const Title = styled.h3`
  font-weight: 500;
  font-size: 22px;
  line-height: 130%;
  margin: 0;
  margin-bottom: 8px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 16px;
  }
`;
export const Year = styled.p`
  font-size: 16px;
  line-height: 150%;
  margin: 0;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.waterloo};
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 13px;
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
  margin-bottom: 8px;
  padding: 8px 16px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 10px;
    line-height: 110%;
    padding: 4px 8px;
  }
`;
export const VoteContainer = styled.div`
  align-self: end;
  display: flex;
  align-items: center;
`;

export const VoteAverage = styled.strong`
  font-weight: 600;
  font-size: 16px;
  margin: 0 12px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 13px;
  }
`;
export const VoteCount = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 13px;
  }
`;