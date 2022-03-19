import styled from "styled-components";

export const CarsWrapper = styled.div`
  display: grid;
  grid-gap: var(--spacing-medium) var(--spacing-regular);
  grid-template-columns: repeat(auto-fit, minmax(300px, 320px));
  justify-content: center;
`;

export const CarContainer = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  padding: var(--spacing-small);
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
  label {
    font-size: var(--text-xsmall);
    color: var(--clr-grey-200);
  }

  p {
    line-height: 1;
    color: var(--clr-grey-300);
    margin-bottom: var(--spacing-small);
    font-size: var(--text-base);
  }
`;

export const CarDescriptionGroup = styled.div`
  margin-top: var(--spacing-base);

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

  button {
    position: absolute;
    right: var(--spacing-small);
    bottom: var(--spacing-base);
    border: none;
    padding: var(--spacing-small);

    color: var(--clr-grey-700);

    display: flex;
    align-items: center;

    & svg {
      width: var(--text-xsmall);
      margin-right: var(--spacing-xsmall);
      fill: var(--clr-grey-400);
    }
  }
`;

export const CarImage = styled.img`
  height: 200px;
  object-fit: cover;
  width: 100%;
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
