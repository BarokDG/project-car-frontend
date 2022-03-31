import styled from "styled-components";

export const FilterBar = styled.div`
  overflow-x: auto;
  display: flex;
  justify-content: center;
  align-items: center;
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
  background: var(--clr-grey-100);
  margin-right: var(--spacing-base);
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
