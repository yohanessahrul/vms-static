import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container } from 'reactstrap';

class navigation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen : false,
      currentUrlNavigation: window.location.href,
    }
  }
  toogle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
    this.setState({
      currentUrlNavigation: window.location.href
    })
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md" fixed>
          <Container>
            <NavbarBrand>
              <NavLink href="#home">
                <img className="logo" src={require('../assets/img/logo-kemo.png')} alt="logo"/>
              </NavLink>
            </NavbarBrand>
            <NavbarToggler onClick={this.toogle}></NavbarToggler>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="#home">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#about">About</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#service">Service</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#blog">Blog</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#galery">Galery</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#contact">Contact</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default navigation;