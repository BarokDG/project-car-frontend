import styled from "styled-components";

export const LoaderContainer = styled.div`
  padding: var(--spacing-large) var(--spacing-xlarge);
  background: var(--clr-primary-100);
`;

export const Loader = styled.div`
  position: relative;
  margin: 0 auto var(--spacing-base);
  width: 8px;
  height: 48px;
  background: rgb(a203, 205, 251, 0.2);
  animation: pulse 750ms infinite;
  animation-delay: 250ms;

  &:before,
  &:after {
    content: "";
    position: absolute;
    display: block;
    height: 32px;
    width: 8px;
    background: rgba(255, 255, 255, 0.2);
    top: 50%;
    transform: translateY(-50%);
    animation: pulse 750ms infinite;
  }

  &:before {
    left: -16px;
  }

  &:after {
    left: 16px;
    animation-delay: 500ms;
  }

  @keyframes pulse {
    50% {
      background: var(--clr-primary-400);
    }
  }
`;
