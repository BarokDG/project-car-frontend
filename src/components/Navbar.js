import { Nav, Logo, MenuLink } from "../styles/Navbar.style";

export default function Navbar({ openInfoModal }) {
  return (
    <Nav>
      <Logo href="/">
        Getz<span>Automotive</span>
      </Logo>
      <MenuLink onClick={openInfoModal}>Want to sell a car?<br/>እዚህ ይጫኑ</MenuLink>
    </Nav>
  );
}
