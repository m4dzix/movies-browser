import styled, { css } from "styled-components";

export const Container = styled.section`
  display: grid;
  align-items: start;
  justify-items: center;
  grid-template-columns: repeat(4, 324px);
  grid-gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    grid-template-columns: repeat(2, 324px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: 1fr;
  }

  ${(props) =>
    props.people &&
    css`
      grid-template-columns: repeat(6, 208px);

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        grid-template-columns: repeat(4, auto);
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        grid-template-columns: repeat(2, auto);
        grid-gap: 16px;
      }
    `}
`;

export const Header = styled.h2`
  font-weight: 600;
  font-size: 36px;
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 18px;
  }
`;
