import styled from "styled-components";

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
