import styled from "styled-components";

export const Pagination = styled.div`
  margin-top: var(--spacing-xlarge);

  display: flex;
  justify-content: center;

  & button {
    --square-size: var(--spacing-large);
    margin: 0 var(--spacing-small);
    height: var(--square-size);
    width: var(--square-size);
    cursor: pointer;

    // Apple support
    color: var(--clr-grey-900);
    background: var(--clr-grey-100);
    border: 1px solid var(--clr-grey-300);
  }

  & button.active-page {
    background: var(--clr-primary-500);
    border: none;
    color: var(--clr-primary-100);
    font-weight: 700;
  }

  @media (max-width: 768px) {
    & button {
      --square-size: var(--spacing-medium);
    }
  }
`;
