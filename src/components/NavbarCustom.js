import React from 'react';
import {useDispatch} from 'react-redux'
import { Link } from 'react-router-dom';
import { Navbar, Button, Nav, NavDropdown } from 'react-bootstrap';
import {clearData} from '../actions/appActions'
import './Navbar.css';

const NavbarCustom = () => {

  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(clearData());
  }

  return (

    <Navbar collapseOnSelect expand='xl' bg='light' variant='light'>
      <Navbar.Brand href='#home'>Show Sampler</Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link href='#features'>Features</Nav.Link>
          <Nav.Link href='#pricing'>Pricing</Nav.Link>
          <NavDropdown title='Dropdown' id='collasible-nav-dropdown'>
            <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
            <NavDropdown.Item href='#action/3.2'>
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href='#action/3.4'>
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href='#deets'>More deets</Nav.Link>
          <Nav.Link onClick={() => logoutHandler()}>
            Logout
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarCustom;