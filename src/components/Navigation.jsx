import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
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
        <Navbar color="light" light expand="md">
          <Container>
          <NavbarBrand>kemodijakarta</NavbarBrand>
          <NavbarToggler onClick={this.toogle}></NavbarToggler>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/">Home</Link>
              </NavItem>
              <NavItem>
                <Link to="/about/company">About</Link>
              </NavItem>
              <NavItem>
                <Link to="/blog">Blog</Link>
              </NavItem>
              <NavItem>
                <Link to="/galery">Galery</Link>
              </NavItem>
            </Nav>
          </Collapse>
          </Container>
        </Navbar>
        {/* <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about/company">About</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/galery">Galery</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul> */}
      </div>
    );
  }
}

export default navigation;