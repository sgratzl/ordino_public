import * as React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import {NavLink} from 'react-router-dom';
import ordinoLogo from 'ordino_public/dist/assets/logos/ordino.svg';

export function HeaderNavigation() {
  // sticky="top"
  return (
    <Navbar bg="transparent" variant="dark">
      <Navbar.Brand href="#/">
        <img alt="" src={ordinoLogo} width="30" height="30" />{' '}Ordino
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Nav as="ul" className="ml-auto">
          <Nav.Item as="li" className="px-3">
            <NavLink to="/news" className="nav-link" activeClassName="active">What's new?</NavLink>
          </Nav.Item>
          <Nav.Item as="li" className="px-3">
            <NavLink to="/features" className="nav-link" activeClassName="active">Features</NavLink>
          </Nav.Item>
          <Nav.Item as="li" className="px-3">
            <NavLink to="/datasets" className="nav-link" activeClassName="active">Datasets</NavLink>
          </Nav.Item>
          <Nav.Item as="li" className="px-3">
            <Button href="/app/" variant="light">Start Analysis</Button>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
