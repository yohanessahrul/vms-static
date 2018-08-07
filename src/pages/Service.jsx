import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class Service extends Component {
  render() {
    return (
      <div>
        <Container>
          <div className="titleDesc">
            <h2>Service</h2>
            <p className="descService">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati ad maiores ratione est perferendis nisi sapiente consectetur, unde aliquid quia quos quis hic!</p>
          </div>
          <div className="service-thumb">
            <Row>
              <Col className="colService">
                <img src={require('../assets/img/doctor.png')} alt="doctor"/>
                <h3>Konsultasi</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat natus quos..</p>
              </Col>
              <Col className="colService">
                <img src={require('../assets/img/wheelchair.png')} alt="wheelchair"/>
                <h3>Akomodasi</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum molest..</p>
              </Col>
              <Col className="colService">
                <img src={require('../assets/img/smartphone.png')} alt="smartphone"/>
                <h3>Booking Tenaga Medis</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi delectus..</p>
              </Col>
              <Col className="colService">
                <img src={require('../assets/img/medical-history.png')} alt="medical"/>
                <h3>Booking Lain-lain</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos dolore iure..</p>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}

export default Service;