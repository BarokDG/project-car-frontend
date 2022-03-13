import styled from "styled-components";

export const CarsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 400px));
  justify-content: center;
  grid-gap: var(--spacing-medium) var(--spacing-regular);
`;

export const CarContainer = styled.div`
  display: flex;
  flex-direction: column;

  background: white;
  padding: var(--spacing-small);
`;

export const CarDetails = styled.div`
  padding: var(--spacing-regular);
  padding-bottom: var(--spacing-medium);

  display: flex;
  flex-direction: column;
`;

export const CarTitle = styled.h2`
  font-size: var(--text-regular);
  font-weight: 600;
  color: var(--clr-grey-500);

  line-height: 1;
  text-transform: capitalize;
`;

export const CarDate = styled.div`
  margin-top: var(--spacing-small);
  margin-left: -1px;
  padding: var(--spacing-small) var(--spacing-regular);
  font-weight: 700;
  line-height: 1;

  align-self: start;

  background: var(--clr-grey-100);
  color: var(--clr-grey-600);
  border-radius: var(--spacing-regular);

  margin-bottom: var(--spacing-medium);
`;

export const CarDescription = styled.div`
  & p {
    color: var(--clr-grey-300);
    font-size: var(--text-base);
    margin-bottom: var(--spacing-small);

    display: flex;
    align-items: center;

    & svg {
      margin-right: var(--spacing-base);
    }

    &:first-child {
      margin-bottom: var(--spacing-medium);
      font-size: var(--text-small);
    }

    &:nth-child(2) {
      font-weight: 600;
    }
  }
`;

export const CarImage = styled.img`
  height: 250px;
  object-fit: cover;

  border-radius: 3px;
  filter: grayscale();
`;

export const CarFooter = styled.div`
  margin-top: var(--spacing-regular);

  display: flex;
  align-items: center;
`;

export const ActionButton = styled.a`
  flex-grow: 1;
  margin-right: var(--spacing-base);

  padding: var(--spacing-base);
  font-size: var(--text-base);

  cursor: pointer;
  border: 1px solid black;
  text-decoration: none;

  color: var(--clr-grey-600);
`;
