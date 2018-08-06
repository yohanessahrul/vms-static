import React, { Component } from 'react';
import { Container, Row, Col, Media } from 'reactstrap';

class Service extends Component {
  render() {
    return (
      <div>
        <Container>
          <h2>Service</h2>
          <p>Services Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati ad maiores ratione est perferendis nisi sapiente consectetur, unde aliquid quia quos quis hic vitae animi officiis nostrum numquam dolor fugit!</p>
          <div className="service-thumb">
            <Row>
              <Col>
                <Media>
                  <Media src="./src/assets/img/app.png"/>
                </Media>
              </Col>
              <Col>
                <img src="./src/assets/img/app.png"/>
              </Col>
              <Col>
                <img src="./src/assets/img/app.png"/>
              </Col>
              <Col>
                <img src="./src/assets/img/app.png"/>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}

export default Service;