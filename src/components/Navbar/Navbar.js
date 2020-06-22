import React from 'react';
import {Navbar, Nav, Form, FormControl} from 'react-bootstrap';
import logo from '../image/logo.png';
import './Navbar.css';
// import styled from 'styled-components';

const NavbarPart = () => {
    return (
        // <NavWrapper>
        <div>
<Navbar className="br" expand="md">
  <Navbar.Brand href="/">
  <img
        src={logo}
        width="120"
        height="30"
        className="d-inline-block align-top ml-logo"
        alt="logo"
      />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className=" ">
      <Nav.Link href="/" className="nav-font navaccounticon">BRANDS</Nav.Link>
      <Nav.Link href="/" className="nav-font navaccounticon">NYKAA FASHION</Nav.Link>
      <Nav.Link href="/" className="nav-font navaccounticon">BEAUTY ADVICE</Nav.Link>
      <Nav.Link href="/" className="nav-font navaccounticon">NYKAA NETWORK</Nav.Link>
      {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="/">Action</NavDropdown.Item>
        <NavDropdown.Item href="/">Another action</NavDropdown.Item>
        <NavDropdown.Item href="/">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search for Products, brands etc" className="mr-sm-5 nav-font box-bg" />
      {/* <Button variant="outline-success">Search</Button> */}
    </Form>
    <p className="navaccounticon" style={{ margin: '0 0 0 0',  }}> <i style={{ margin: ' 0 0' }} className="fa fa-user"></i> <strong> Account </strong></p>
    <i className="fa fa-shopping-bag navaccounticon"></i>
  </Navbar.Collapse>
</Navbar>
</div>
        // </NavWrapper>
    );
};



export default NavbarPart;