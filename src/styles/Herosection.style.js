import styled from "styled-components";

export const Hero = styled.div`
  background-color: linear-gradient(45deg, blue, red);
`;

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
      padding: 20px 40px;
      font-size: var(--text-medium);

      border: 1px solid;

      &:focus,
      &:focus-within {
        outline: none;
      }
    }

    & input[type="submit"] {
      position: absolute;
      right: 20px;
      top: 0;
      bottom: 0;
      margin: auto 0;
      height: max-content;

      border-radius: var(--spacing-medium);

      border: none;
      background: var(--clr-primary-600);
      color: var(--clr-primary-100);

      font-size: var(--text-regular);

      cursor: pointer;

      padding: var(--spacing-base) var(--spacing-medium);
    }
  }

  & > button {
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

    & > button {
      padding: var(--spacing-small) var(--spacing-regular);
      position: static;
      font-size: var(--text-small);

      border-radius: 0;
    }
  }
`;

export const FilterBar = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const FilterBarItem = styled.div`
  background: #f4f4ff;
  padding: var(--spacing-base) 0;
  flex-grow: 1;

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
    // background: var(--clr-primary-100);
  }

  &:last-child {
    padding-left: var(--spacing-regular);
    padding-right: var(--spacing-regular);
    justify-content: flex-end;
    align-items: center;

    & button {
      background: none;
      border: 1px solid var(--clr-primary-700);
      cursor: pointer;
      font-size: var(--text-base);
      padding: var(--spacing-xsmall) 0;
      flex-grow: 1;
      flex-basis: 0;
      max-width: 200px;
      color: var(--clr-primary-700);
    }

    & .filter {
      background: var(--clr-primary-200);
      background: lime;
      margin-left: var(--spacing-small);
    }
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
