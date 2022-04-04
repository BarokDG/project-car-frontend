import styled from "styled-components";

export const ActionWrapper = styled.div`
  max-width: 1000px;
  width: 75vw;
  min-width: 300px;
  margin: var(--spacing-large) auto var(--spacing-xlarge);

  display: flex;
  flex-direction: column;

  & h1 {
    font-size: var(--text-medium);
    text-align: center;
    font-weight: 400;
    color: var(--clr-primary-600);
  }

  & form {
    position: relative;

    & input[type="search"] {
      width: 100%;
      padding: var(--spacing-regular);
      font-size: var(--text-medium);

      border: 1px solid;

      &:focus,
      &:focus-within {
        outline: none;
      }
    }
  }

  .actions {
    position: absolute;
    right: 20px;
    top: 0;
    bottom: 0;
    margin: auto 0;
    height: max-content;

    display: flex;

    & > * {
      border-radius: var(--spacing-medium);
      border: none;
      background: none;
      font-size: var(--text-regular);
      cursor: pointer;
      padding: var(--spacing-base) var(--spacing-medium);
    }

    & > input[type="submit"] {
      order: 1;
      background: var(--clr-primary-600);
      color: var(--clr-primary-100);
    }

    & > button {
      padding-right: var(--spacing-regular);
    }
  }

  & > .open-filter {
    --button-clr: black;
    padding: var(--spacing-small);
    align-self: start;
    background: none;
    border: none;
    font-size: var(--text-base);
    display: inline-block;
    margin-top: var(--spacing-small);

    color: var(--button-clr);
    font-weight: 500;
    letter-spacing: var(--spacing-xsmall);
    cursor: pointer;
    svg {
      width: 12px;
      margin-left: var(--spacing-small);
      vertical-align: baseline;
      fill: var(--button-clr);
    }
  }

  @media (max-width: 900px) {
    width: 90%;
  }

  @media (max-width: 768px) {
    width: 100%;
    & .actions > * {
      font-size: var(--text-base);
    }
  }

  @media (max-width: 700px) {
    & form input[type="search"] {
      padding-left: var(--spacing-regular);
    }

    & .actions {
      top: 100%;
      right: 0;
      margin: 0;

      & input[type="submit"] {
        border-radius: 0;
      }
    }
  }

  @media (max-width: 600px) {
    & h1 {
      font-size: var(--text-base);
      text-align: left;
      margin-bottom: var(--spacing-base);
    }

    & input {
      font-size: var(--text-base);
      padding: var(--spacing-base) var(--spacing-regular);
      border-radius: 0;
    }

    & > button {
      padding: var(--spacing-small) var(--spacing-regular);
      position: static;
      font-size: var(--text-small);

      border-radius: 0;
    }
  }

  @media (max-width: 475px) {
    width: 100%;

    & form input[type="search"] {
      padding: var(--spacing-base);
      font-size: var(--text-regular);
    }
  }
`;

export const FilterBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-basis: 0;

  @media (max-width: 700px) {
    display: block;
    padding: var(--spacing-base) var(--spacing-regular);
    background: var(--clr-grey-100);

    & > div {
      border: none;
      background: none;
      display: block;
      margin-bottom: var(--spacing-base);

      & label {
        font-size: var(--text-base);
      }

      & select {
        display: block;
        width: 100%;
        padding: var(--spacing-base);
        margin-bottom: var(--spacing-small);
      }
    }

    & > div:first-child {
      border-left: none;
    }
  }
`;

export const FilterBarItem = styled.div`
  background: #f4f4ff;
  padding: var(--spacing-base) 0;
  flex-grow: 1;
  flex-basis: 0;
  min-width: 200px;

  display: flex;
  justify-content: center;

  border: 1px solid var(--clr-grey-200);
  border-top: none;
  border-left: none;

  &:first-child {
    border-left: 1px solid var(--clr-grey-200);
  }

  & label {
    display: block;
    line-height: 1;
    margin-bottom: var(--spacing-small);
    color: var(--clr-grey-700);
    font-size: var(--text-small);
  }

  & select {
    padding: var(--spacing-small) var(--spacing-base);
    margin-right: var(--spacing-xsmall);
  }
`;

export const SwitchContainer = styled.div`
  position: relative;
  font-size: var(--text-small);

  display: flex;
  align-items: center;

  & > input[type="checkbox"] {
    position: absolute;
    top: 0;
    left: 0;

    height: 16px;
    width: 32px;
    opacity: 0;
  }

  & > input:checked + div {
    background: lime;
    &:after {
      background: white;
      left: 18px;
    }
  }

  & span {
    margin-left: var(--spacing-small);
  }
`;

export const Switch = styled.div`
  pointer-events: none;
  height: 16px;
  width: 32px;

  background: var(--clr-grey-300);
  border-radius: var(--spacing-medium);

  position: relative;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    left: 2px;

    transition: 0.3s left ease-in-out;

    border-radius: 50%;
    width: 12px;
    height: 12px;

    background: var(--clr-grey-100);
  }
`;

export const Pagination = styled.div`
  margin-top: var(--spacing-xlarge);

  display: flex;
  justify-content: center;

  & > button {
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

export const BackToTop = styled.div`
  position: fixed;
  right: var(--spacing-medium);
  bottom: var(--spacing-regular);

  width: var(--spacing-large);
  height: var(--spacing-large);
  background: var(--clr-primary-200);
  border-radius: 50%;
  border: 1px solid;

  text-align: center;
  font-size: var(--text-medium);
  line-height: var(--spacing-medium);
  cursor: pointer;

  &:after {
    content: "↑";
  }
`;
