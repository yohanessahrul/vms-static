import React, { Component } from 'react';
import { Container } from 'reactstrap';

class Home extends Component {
  render() {
    console.log('match.url = ', this.props.match.url)
    return (
      <div>
        <Container>
          <h2>Home</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt ex voluptatum perspiciatis provident voluptates facilis fugiat distinctio cum laborum deleniti. Facere nemo laborum inventore. Quo cum tempore ipsum blanditiis dignissimos!</p>
        </Container>
      </div>
    );
  }
}

export default Home;