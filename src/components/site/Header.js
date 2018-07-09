import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav } from 'reactstrap';

class Header extends Component {
  
  render() {
    return (
      <header>
        <Navbar className="header">
          <NavbarBrand href="/">Kyle Beavin</NavbarBrand>
          <Nav className="ml-auto" navbar>
          <NavbarBrand>Portfolio_2.0</NavbarBrand>
          </Nav>
        </Navbar>
      </header>
    );
  }
}

export default Header;