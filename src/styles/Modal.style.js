import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
  overflow: hidden;

  &::before {
    content: "";
    height: 100%;
    width: 100%;

    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;

    background: var(--clr-primary-700);
    opacity: 0.7;
  }

  & > button {
    position: absolute;
    border-radius: 50%;
    border: none;

    width: var(--spacing-xlarge);
    height: var(--spacing-xlarge);
    top: 50%;
    transform: translateY(-50%);

    font-size: var(--text-regular);

    background: var(--clr-primary-700);
    color: var(--clr-primary-300);
  }

  .prev {
    left: var(--spacing-medium);
  }

  .next {
    right: var(--spacing-medium);
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

  & img {
    display: block;
    width: 700px;
    height: 500px;
    object-fit: cover;
  }
`;
