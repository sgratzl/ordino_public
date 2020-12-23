import * as React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
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
        <Nav className="ml-auto">
            <NavLink to="/news" activeClassName="active">What's new?</NavLink>
            <NavLink to="/features" activeClassName="active">Features</NavLink>
            <NavLink to="/datasets" activeClassName="active">Datasets</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
