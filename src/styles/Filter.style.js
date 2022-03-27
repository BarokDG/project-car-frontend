import styled from "styled-components";

export const FilterBar = styled.div`
  overflow-x: auto;
  display: flex;
  justify-content: center;
  algin-items: center;
  margin-bottom: var(--spacing-large);

  & > * {
    flex-shrink: 0;
  }
`;

export const Select = styled.select`
  border-radius: var(--spacing-medium);
  padding: var(--spacing-small) var(--spacing-base);
  width: 100px;
  border-bottom: 2px solid var(--clr-primary-600);
  background: whitesmoke;
`;
