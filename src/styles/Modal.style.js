import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
  overflow: hidden;

  ${(props) =>
    props.loader
      ? "display: flex; justify-content: center; align-items: center;"
      : ""}

  &::before {
    content: "";
    height: 100%;
    width: 100%;

    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;

    background: var(--clr-primary-700);
    opacity: ${(props) => (props.loader ? 0.1 : 0.7)};
  }

  & .close-modal {
    position: absolute;
    top: var(--spacing-base);
    right: var(--spacing-base);
    background: rgba(0, 0, 0, 0.3);
    border: none;
    color: var(--clr-grey-100);
    font-size: var(--text-large);
  }

  & .slide-control {
    position: absolute;
    border-radius: 50%;
    border: none;

    width: var(--spacing-xlarge);
    height: var(--spacing-xlarge);
    top: 50%;
    transform: translateY(-50%);

    font-size: var(--text-regular);

    background: var(--clr-primary-100);
    color: var(--clr-primary-700);
  }

  & #prev {
    left: var(--spacing-medium);
  }

  & #next {
    right: var(--spacing-medium);
  }

  @media (max-width: 700px) {
    & > .filter-modal {
      width: 90vw;
      max-width: 400px;
      margin: auto;

      position: relative;
      top: 50%;
      transform: translateY(-50%);

      & > h3 {
        background: var(--clr-primary-100);
        color: var(--clr-grey-900);
        font-size: var(--text-regular);
        font-weight: 400;
        margin-bottom: 0;
        padding: var(--spacing-regular);
        padding-bottom: var(--spacing-base);
      }

      & > .filter-apply {
        padding: var(--spacing-base) var(--spacing-regular);
        background: var(--clr-primary-100);

        & > button {
          border: none;
          background: none;
          padding: var(--spacing-base) var(--spacing-medium);
          cursor: pointer;
        }

        & > .filter-primary {
          background: var(--clr-primary-400);
          color: var(--clr-grey-100);
        }
      }
    }
  }

  @media (max-width: 600px) {
    & .slide-control {
      width: var(--spacing-large);
      height: var(--spacing-large);
      top: unset;
      bottom: 10%;
    }

    #prev {
      left: calc(50% - var(--spacing-xlarge));
    }

    #next {
      right: calc(50% - var(--spacing-xlarge));
    }
  }
`;

export const SlideShowContainer = styled.div`
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SlideShowItem = styled.div`
  display: none;

  & .slide-position {
    position: absolute;
    top: var(--spacing-base);
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.6);
    color: var(--clr-grey-100);
    padding: var(--spacing-base) var(--spacing-medium);
    font-family: monospace;
    font-size: var(--text-regular);
  }

  & img {
    display: block;
    max-width: 100%;

    object-fit: cover;
  }
`;
