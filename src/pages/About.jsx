import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class About extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col md="4">
              <img className="aboutLogo" src={require('../assets/img/logo-kemo-big.png')} alt="logoABout"/>
            </Col>
            <Col md="8">
              <h3>About</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, incidunt nobis. Accusamus, eveniet ullam facere vero sint maxime culpa cumque assumenda deserunt voluptatibus error distinctio, temporibus nesciunt unde dolore inventore?</p>
            </Col>
          </Row>
          {/* <h2>About</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto odit reprehenderit deserunt voluptas modi ipsam perspiciatis labore possimus porro eveniet placeat architecto, enim quisquam maxime ratione quibusdam cumque, voluptates quas!</p> */}
          <div>
          </div>
        </Container>
      </div>
    );
  }
}

export default About;