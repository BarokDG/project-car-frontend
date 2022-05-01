import { Nav, Logo, MenuLink } from "../styles/Navbar.style";

export default function Navbar({ openInfoModal }) {
  return (
    <Nav>
      <Logo href="/">
        Getz<span>Automotive</span>
      </Logo>
      <MenuLink onClick={openInfoModal}>መኪና መሸጥ ይፈልጋሉ?<br/>እዚህ ይጫኑ</MenuLink>
    </Nav>
  );
}
