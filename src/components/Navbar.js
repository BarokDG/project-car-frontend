import { useState } from "react";

import { Nav, Logo, Hamburger, Menu, MenuLink } from "../styles/Navbar.style";

export default function Navbar({ openInfoModal }) {
  const [isOpen, setisOpen] = useState(true);

  return (
    <Nav>
      <Logo href="/">
        Getz<span>Automotive</span>
      </Logo>
      {/* <Hamburger onClick={() => setisOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger> */}
      <Menu isOpen={isOpen}>
        <MenuLink onClick={openInfoModal}> መኪና መሸጥ ይፈልጋሉ?</MenuLink>
      </Menu>
    </Nav>
  );
}
