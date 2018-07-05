import React, { Component } from 'react';
import DrawerToggleButton from '../side-drawer/DrawerToggleButton'
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class Header extends Component {
  
  render() {
    return (
      <header>
        <Navbar className="header">
          {/* <DrawerToggleButton click={this.props.drawerClickHandler}/> */}
          <NavbarBrand href="/">Kyle Beavin</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="https://github.com/kylebeavin" target="blank">Github</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </header>
    );
  }
}

export default Header;