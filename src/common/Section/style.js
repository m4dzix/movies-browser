import styled, { css } from "styled-components";

export const Header = styled.h2`
  font-weight: 600;
  font-size: 36px;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 18px;
  }
`;

export const StyledSection = styled.section`
  width: 100%;
  max-width: 1348px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
export const Container = styled.aside`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-template-rows: auto 1fr;

  grid-gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: 1fr;
    justify-content: start;
    padding: 0px;
  }

  ${(props) =>
    props.people &&
    css`
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

      @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        grid-template-columns: repeat(2, 1fr);
      }
    `}
`;
