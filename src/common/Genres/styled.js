import styled from "styled-components";

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
  line-height: 1.4;
  background-color: ${({ theme }) => theme.colors.mistic};
  border-radius: 5px;
  margin-right: 8px;
  margin-bottom: 8px;
  padding: 8px 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 10px;
    line-height: 1.1;
    padding: 4px 8px;
  }
`;
