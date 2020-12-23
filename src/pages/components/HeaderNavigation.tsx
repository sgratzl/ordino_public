import * as React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import {NavLink} from 'react-router-dom';
import ordinoLogo from 'ordino_public/dist/assets/logos/ordino.svg';

export function HeaderNavigation() {
  return (
    <Navbar bg="transparent" variant="light" sticky="top">
      <Navbar.Brand href="#/">
        <img alt="" src={ordinoLogo} width="30" height="30" className="d-inline-block align-top" />{' '}Ordino
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Nav as="ul" className="ml-auto">
          <Nav.Item as="li">
            <NavLink to="/news" className="nav-link" activeClassName="active">What's new?</NavLink>
          </Nav.Item>
          <Nav.Item as="li">
            <NavLink to="/features" className="nav-link" activeClassName="active">Features</NavLink>
          </Nav.Item>
          <Nav.Item as="li">
            <NavLink to="/datasets" className="nav-link" activeClassName="active">Datasets</NavLink>
          </Nav.Item>
          <Nav.Item as="li">
            <Button href="/app/" variant="light">Start Analysis</Button>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
