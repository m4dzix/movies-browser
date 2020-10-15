import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(4, 324px);
  grid-gap: 24px;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    grid-template-columns: repeat(2, 324px);
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: 1fr;
  }
`;

export const Header = styled.h2`
  font-weight: 600;
  font-size: 36px;
  display: flex;
  align-items: center;
`;
