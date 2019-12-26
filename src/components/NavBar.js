import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import { Link } from "react-router-dom";

const NavBar = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="nav" color="dark" dark expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav>
            <NavLink tag={Link} className="text-white" to="/">
              <i className="fas fa-home" /> Home
            </NavLink>
            <NavLink tag={Link} className="text-white" to="/projects">
              <i className="fas fa-tools" /> Projects
            </NavLink>
          </Nav>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink
                target="_blank"
                href="//github.com/antoinegag/antoineg.dev"
              >
                <i className="fab fa-2x fa-github" />
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
