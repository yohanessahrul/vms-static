import React, { Component } from 'react';
import { Container } from 'reactstrap';

class Galery extends Component {
  render() {
    console.log('match.url = ', this.props.match.url)
    return (
      <div>
        <Container>
          <h2>Galery</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ipsum maxime, voluptas doloremque magni vitae. Nulla similique accusamus perspiciatis praesentium velit suscipit blanditiis magni fugiat facilis incidunt, deserunt voluptatibus sit?</p>
        </Container>
      </div>
    );
  }
}

export default Galery;