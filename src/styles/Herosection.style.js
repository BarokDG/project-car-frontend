import styled from "styled-components";

export const Hero = styled.div`
  background-color: linear-gradient(45deg, blue, red);
`;

export const SearchWrapper = styled.div`
  max-width: 800px;
  width: 75vw;
  min-width: 300px;
  margin: var(--spacing-regular) auto var(--spacing-base);

  & h1 {
    font-size: var(--text-medium);
    text-align: center;
    font-weight: 400;
    color: var(--clr-primary-600);
  }

  & input {
    border-radius: var(--spacing-medium);
    padding: var(--spacing-regular) var(--spacing-medium);
    flex-grow: 1;
    font-size: var(--text-regular);

    border: none;
    outline: none;
  }

  & button {
    border-radius: var(--spacing-medium);

    border: 1px solid var(--clr-primary-700);
    background: var(--clr-primary-200);
    color: var(--clr-primary-700);

    outline: none;
    font-size: var(--text-regular);

    cursor: pointer;

    padding: var(--spacing-base) var(--spacing-medium);

    position: absolute;
    right: var(--spacing-base);
    bottom: var(--spacing-base);
  }

  @media (max-width: 600px) {
    & h1 {
      font-size: var(--text-small);
      text-align: left;
    }

    & input {
      font-size: var(--text-base);
      padding: var(--spacing-base) var(--spacing-regular);
      border-radius: 0;
    }

    & button {
      padding: var(--spacing-small) var(--spacing-regular);
      position: static;
      font-size: var(--text-small);

      border-radius: 0;
    }
  }
`;

export const SearchActionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-small);

  margin: var(--spacing-base) auto 0;

  position: relative;

  @media (max-width: 500px) {
    margin-bottom: var(--spacing-medium);
  }
`;

export const Pagination = styled.div`
  margin-top: var(--spacing-xlarge);

  display: flex;
  justify-content: center;

  & button {
    margin: 0 var(--spacing-small);
    height: var(--spacing-large);
    width: var(--spacing-large);
    cursor: pointer;
  }

  & button.active-page {
    background: var(--clr-primary-500);
    border: none;
    color: var(--clr-primary-100);
    font-weight: 700;
  }
`;
