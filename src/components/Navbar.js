import { useState } from "react";

import { Nav, Logo, Hamburger, Menu, MenuLink } from "../styles/Navbar.style";

export default function Navbar({ openInfoModal }) {
  const [isOpen, setisOpen] = useState(false);

  return (
    <Nav>
      <Logo href="/">
        Getz<span>Automotive</span>
      </Logo>
      <Hamburger onClick={() => setisOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink onClick={openInfoModal}>Want to sell a car?</MenuLink>
      </Menu>
    </Nav>
  );
}
