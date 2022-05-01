import styled from "styled-components";

export const Nav = styled.div`
  padding: 0 var(--spacing-medium);
  padding-right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const Logo = styled.a`
  padding: 1rem 0;
  color: #7b7fda;
  text-decoration: none;
  font-weight: 800;
  font-size: 2.2rem;

  span {
    font-weight: 300;
    font-size: 1.9rem;
  }
`;

export const MenuLink = styled.a`
  padding: var(--spacing-base) var(--spacing-regular);
  cursor: pointer;
  color: var(--clr-primary-500);
  font-weight: 500;
  font-size: 1rem;
  text-align: center;
  text-decoration: none;

  border: 1px solid;
  background: #cbcdfba0;
  border-radius: var(--spacing-base);

  margin-left: auto;
  margin-right: auto;

  &:hover {
    background: #cbcdfb70;
  }
`;
