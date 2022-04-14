import styled from "styled-components";

export const CarsWrapper = styled.div`
  display: grid;
  grid-gap: var(--spacing-medium) var(--spacing-regular);
  grid-template-columns: repeat(auto-fit, minmax(300px, 320px));
  justify-content: center;

  & select {
    grid-column: 1 / -1;
    justify-self: start;
    margin-bottom: calc(-1 * var(--spacing-base));
    font-size: var(--text-base);
    color: var(--clr-grey-900);
    letter-spacing: var(--spacing-xsmall);
    font-weight: 500;

    display: inline-block;

    background: none;
    border: none;
    outline: none;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 400px))
  })
`;

export const CarContainer = styled.div`
  background: var(--clr-grey-50);
  display: flex;
  flex-direction: column;
  padding: var(--spacing-small);

  border-radius: var(--spacing-xsmall);
`;

export const CarDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: var(--spacing-regular) var(--spacing-base);
`;

export const CarTitle = styled.h2`
  color: var(--clr-primary-600);
  font-size: var(--text-regular);
  font-weight: 600;
  line-height: 1;
  text-transform: capitalize;
`;

export const CarDate = styled.span`
  align-self: start;
  background: var(--clr-primary-100);

  border-radius: var(--spacing-regular);
  color: var(--clr-primary-600);
  font-weight: 600;
  line-height: 1;
  margin-bottom: var(--spacing-regular);
  margin-left: -1px;
  margin-top: var(--spacing-small);
  padding: var(--spacing-small) var(--spacing-regular);
`;

export const CarDescription = styled.div`
  position: relative;

  label {
    font-size: var(--text-xsmall);
    color: var(--clr-grey-500);
  }
`;

export const CarDescriptionParagraphs = styled.div`
  & p {
    line-height: 1.5;
    color: var(--clr-grey-500);
    margin-bottom: var(--spacing-small);
    font-size: var(--text-base);

    display: flex;
    &:before {
      content: "✍";
      margin-right: var(--spacing-xsmall);
    }
  }

  @media (min-width: 768px) {
    position: relative;
    height: 5.1ch;
    overflow: hidden;
    pointer-events: none;

    & p {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    & span {
      pointer-events: auto;

      position: absolute;
      bottom: 0;
      right: 0;
      background: var(--clr-grey-200);
      border-radius: var(--spacing-small);
      color: var(--clr-grey-700);

      padding: 0 var(--spacing-small);

      &:after {
        content: "•••";
        line-height: 0.5;
      }
    }

    &:hover {
      overflow: visible;

      & .overflow-container {
        background: var(--clr-grey-100);
        padding: var(--spacing-regular) var(--spacing-small);
        min-height: 230px;

        display: flex;
        flex-direction: column;
        justify-content: center;

        position: relative;
        z-index: 2;
      }

      & p {
        display: flex;
      }

      & p:last-child {
        margin-top: var(--spacing-base);
      }

      & span {
        opacity: 0;
      }
    }
  }
`;

export const CarDescriptionGroup = styled.div`
  margin-top: var(--spacing-regular);

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  div {
    flex-grow: 1;
    flex-basis: 50%;
  }

  div:first-of-type p {
    color: var(--clr-primary-600);
    // font-size: var(--text-regular);
    font-weight: 600;
  }
`;

export const CarImageContainer = styled.div`
  position: relative;

  & > button {
    position: absolute;
    right: var(--spacing-small);
    bottom: var(--spacing-base);
    border: none;
    padding: var(--spacing-small);

    background: var(--clr-grey-600);

    display: flex;

    // Apple support
    align-items: center;
    font-size: var(--text-small);

    & span {
      color: var(--clr-grey-200);
      line-height: 1;
    }

    & svg {
      width: var(--text-xsmall);
      margin-right: var(--spacing-xsmall);
      fill: var(--clr-grey-100);
    }
  }
`;

export const CarImage = styled.img`
  height: 200px;
  object-fit: cover;
  width: 100%;

  border-radius: var(--spacing-xsmall);
`;

export const CarFooter = styled.div`
  align-items: center;
  display: flex;
  margin-top: var(--spacing-regular);

  & p {
    text-align: center;
    font-size: var(--text-small);
  }
`;

export const ActionButton = styled.a`
  flex-grow: 1;
  margin-right: var(--spacing-base);

  font-size: var(--text-base);

  cursor: pointer;
  text-decoration: none;

  background: var(--clr-primary-400);
  color: var(--clr-primary-100);

  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    width: 20px;
    margin-right: var(--spacing-small);
  }
`;
