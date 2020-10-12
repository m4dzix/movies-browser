import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(4, minmax(324px, 1fr));
  grid-gap: 24px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: repeat(auto-fill, 324px);
  }
`;

export const Header = styled.h2`
  font-weight: 600;
  font-size: 36px;
  display: flex;
  align-items: center;
`;
