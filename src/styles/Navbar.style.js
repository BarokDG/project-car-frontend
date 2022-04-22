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

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;

  span {
    height: 2px;
    width: 25px;
    background-color: #7b7fda;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
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

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: 0.3s all ease;
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

  &:last-child {
    border: 1px solid;
    margin-left: var(--spacing-base);
    background: #cbcdfba0;
    border-radius: var(--spacing-base);

    &:hover {
      background: #cbcdfb70;
    }
  }
`;