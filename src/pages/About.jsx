import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { Container } from 'reactstrap';

import Company from '../components/Company';
import Product from '../components/Product';
import Testimoni from '../components/Testimoni';

class About extends Component {
  render() {
    // console.log('match.url = ', this.props.match.url)
    return (
      <div>
        <Container>
          <h2>About</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto odit reprehenderit deserunt voluptas modi ipsam perspiciatis labore possimus porro eveniet placeat architecto, enim quisquam maxime ratione quibusdam cumque, voluptates quas!</p>
            <div>
              <ul>
                <li>
                  <Link to={`${this.props.match.url}/company`}>Company</Link>
                </li>
                <li>
                  <Link to={`${this.props.match.url}/product`}>Product</Link>
                </li>
                <li>
                  <Link to={`${this.props.match.url}/testimoni`}>Testimoni</Link>
                </li>
              </ul>
              <Route exact path={`${this.props.match.url}/company`} component={Company}></Route>
              <Route path={`${this.props.match.url}/product`} component={Product}></Route>
              <Route path={`${this.props.match.url}/testimoni`} component={Testimoni}></Route>
            </div>
          </Container>
      </div>
    );
  }
}

export default About;