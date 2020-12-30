import * as React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import {NavLink} from 'react-router-dom';
import {OrdinoLogo} from './OrdinoLogo';

export function HeaderNavigation() {
  // sticky="top"
  return (
    <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark" className="ordino-header-navigation">
      <Navbar.Brand href="#/">
        <OrdinoLogo></OrdinoLogo>
      </Navbar.Brand>
      <Button href="/app/" variant="light" className="order-lg-2 mx-3 mx-lg-0 ml-auto ml-lg-3">Start Analysis</Button>
      <Navbar.Toggle aria-controls="ordino-header-navbar-nav" className="" />
      <Navbar.Collapse id="ordino-header-navbar-nav" className="order-lg-1">
        <Nav as="ul">
          <Nav.Item as="li" className="px-3">
            <NavLink to="/news" className="nav-link" activeClassName="active">What's new?</NavLink>
          </Nav.Item>
          <Nav.Item as="li" className="px-3">
            <NavLink to="/features" className="nav-link" activeClassName="active">Features</NavLink>
          </Nav.Item>
          <Nav.Item as="li" className="px-3">
            <NavLink to="/datasets" className="nav-link" activeClassName="active">Datasets</NavLink>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
