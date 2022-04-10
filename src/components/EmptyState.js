import styled from "styled-components";
import { ReactComponent as EmptyBox } from "../assets/empty-box.svg";

const EmptyStateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: var(--spacing-xlarge) auto;
  width: 60vw;
  max-width: 45ch;

  & p {
    font-size: var(--text-medium);
    text-align: center;
  }
`;

export default function EmptyState() {
  return (
    <EmptyStateWrapper>
      <EmptyBox />
      <p>Sorry, We couldn't find what you were looking for.</p>
    </EmptyStateWrapper>
  );
}
