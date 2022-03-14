import styled from "styled-components";

export const Hero = styled.div`
  background-color: linear-gradient(45deg, blue, red);
`;

export const Search = styled.input`
  border-radius: var(--spacing-medium);
  padding: var(--spacing-regular) var(--spacing-medium);
  margin: var(--spacing-base) auto var(--spacing-large);
  width: 60vw;
  min-width: 300px;
  display: block;
  font-size: var(--text-regular);

  border: none;
  outline: none;
`;
