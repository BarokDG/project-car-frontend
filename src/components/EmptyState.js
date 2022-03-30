import styled from "styled-components";
import { ReactComponent as EmptyBox } from "../assets/empty-box.svg";

const EmptyStateWrapper = styled.div`
  margin: var(--spacing-xlarge) auto;
  width: 60vw;
  max-width: 45ch;
  text-align: center;
`;

export default function EmptyState() {
  return (
    <EmptyStateWrapper>
      <EmptyBox />
      <p>We couldn't find what you are looking for.</p>
    </EmptyStateWrapper>
  );
}
