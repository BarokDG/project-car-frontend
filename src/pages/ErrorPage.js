import { useNavigate } from "react-router-dom";
import { ReactComponent as ErrorIllustration } from "../assets/error.svg";

import styled from "styled-components";

const ErrorWrapper = styled.main`
  position: absolute;
  inset: 0;
  margin: auto;

  height: max-content;
`;

const ErrorMessageGroup = styled.div`
  text-align: center;

  & p {
    font-size: var(--text-medium);
  }

  & button {
    margin: 0 var(--spacing-base);
    padding: var(--spacing-base) var(--spacing-medium);
    background: var(--clr-primary-400);
    color: var(--clr-grey-100);
    font-size: var(--text-regular);
    border: none;

    cursor: pointer;

    &:hover {
      background: var(--clr-primary-500);
    }
  }

  & svg {
    width: 60vw;
    max-width: 500px;
  }
`;

export default function ErrorState() {
  const navigate = useNavigate();

  return (
    <ErrorWrapper>
      <ErrorMessageGroup>
        <ErrorIllustration />
        <p>
          We're facing some issues, please
          <button onClick={() => navigate("/", { replace: true })}>
            Try again
          </button>
          later.
        </p>
      </ErrorMessageGroup>
    </ErrorWrapper>
  );
}
