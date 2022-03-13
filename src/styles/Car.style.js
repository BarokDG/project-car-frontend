import styled from "styled-components";

export const CarsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 400px));
  justify-content: center;
  grid-gap: var(--spacing-regular);
`;

export const CarContainer = styled.div`
  width: 400px;
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

export const ActionButton = styled.button`
  margin: 0 5px;
  padding: 8px 14px;
  background-color: rgba(155, 155, 155, 0.2);
  color: #fff;
  cursor: pointer;
  border: 1px solid white;
  outline: 0;
  font-weight: 300;
  &:hover {
    opacity: 0.8;
  }
`;
