import { ModalContainer } from "../styles/Modal.style";

import styled from "styled-components";

export const InfoModalContainer = styled(ModalContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InfoModalWrapper = styled.div`
  background: var(--clr-grey-100);

  display: flex;
  max-width: 900px;
  height: 75vh;

  & .info__content {
    flex: 1 0 0;
    padding: var(--spacing-large) 3vw;
    background: var(--clr-primary-100);
    font-weight: 100;

    display: flex;
    flex-direction: column;

    ol {
      padding: 0;
      padding-left: var(--spacing-regular);
    }

    li {
      list-style-type: "✅";
      padding-left: var(--spacing-small);

      margin: var(--spacing-regular) 0;
      line-height: 1.5;

      a {
        margin: 0 var(--spacing-small);
        display: inline-block;
      }
    }

    & > a {
      margin-top: auto;
      align-self: flex-end;

      display: flex;
      justify-content: center;
      align-items: center;

      background: var(--clr-primary-400);
      color: var(--clr-grey-100);
      text-decoration: none;

      padding: var(--spacing-base) var(--spacing-medium);

      svg {
        width: var(--spacing-medium);
        fill: var(--clr-grey-100);
      }

      &:hover {
        background: var(--clr-primary-200);
        color: var(--clr-primary-700);

        svg {
          fill: var(--clr-primary-900);
        }
      }
    }
  }

  & .info__image {
    flex: 1.2 0 0;

    & img {
      display: block;
      max-width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: 0 0;

      animation: pan-image 15s linear infinite alternate;
    }
  }

  @keyframes pan-image {
    to {
      object-position: 100% 0;
    }
  }

  // Duotone filter
  & .info__image {
    --base: #f7392b;
    --bg-blend: multiply;
    --blur: 0;
    --fg-blend: lighten;
    --foreground: #16006f;
    --opacity: 1;
    --spacing: 1%;

    background-color: var(--base);
    position: relative;

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;

      background-color: var(--foreground);
      mix-blend-mode: var(--fg-blend);
      z-index: 1;
    }

    & img {
      filter: grayscale(100%) contrast(1) blur(var(--blur));
      mix-blend-mode: var(--bg-blend);
      opacity: var(--opacity);
    }
  }

  @media (max-width: 768px) {
    width: 90vw;
    max-width: 400px;

    .info__content {
      padding-left: 5vw;
      padding-bottom: 5vw;
    }

    .info__image {
      display: none;
    }
  }
`;
