import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavLink, } from 'reactstrap';

export default class Navigation extends React.Component {

  render() {
    return (
      <div>
        <Navbar className="navbar-dark bg-dark">
          <NavbarBrand><Link to="/">BSB Stockroom App (click to go home)</Link></NavbarBrand>
          <Nav>
            <NavLink href="#">Link</NavLink>
            <NavLink href="#">Link</NavLink>
            <NavLink disabled href="#">Disabled Link</NavLink>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

Navbar.propTypes = {
  light: PropTypes.bool,
  dark: PropTypes.bool,
  fixed: PropTypes.string,
  color: PropTypes.string,
  role: PropTypes.string,
  expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  // pass in custom element to use
}

NavLink.propTypes = {
  disabled: PropTypes.bool,
  active: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  // pass in custom element to use
}

Nav.propTypes = {
  tabs: PropTypes.bool,
  pills: PropTypes.bool,
  card: PropTypes.bool,
  justified: PropTypes.bool,
  fill: PropTypes.bool,
  vertical: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  horizontal: PropTypes.string,
  navbar: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  // pass in custom element to use
}
