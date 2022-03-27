import styled from "styled-components";

export const FilterBar = styled.div`
  overflow-x: auto;
  display: flex;
  justify-content: center;
  algin-items: center;
  margin-bottom: var(--spacing-large);

  &:focus-visible {
    outline: none;
    border: none;
  }

  & > * {
    flex-shrink: 0;
  }

  label {
    margin-right: var(--spacing-base);
  }
`;

export const Select = styled.select`
  border-radius: var(--spacing-medium);
  padding: var(--spacing-small) var(--spacing-base);
  width: 100px;
  border-bottom: 2px solid var(--clr-primary-600);
  background: var(--clr-grey-200);
  margin-right: var(--spacing-base);

  option {
    padding: var(--spacing-base);
    border-radius: var(--spacing-medium);
  }
`;
