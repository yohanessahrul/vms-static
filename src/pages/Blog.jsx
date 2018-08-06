import React, { Component } from 'react';
import { Container } from 'reactstrap';

class Blog extends Component {
  render() {
    // console.log('match.url = ', this.props.match.url)
    return (
      <div>
        <Container>
          <h2>Blog</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero non alias ipsa, iusto fugit exercitationem eius quia quae in dolore, quod, quis unde itaque reprehenderit quo qui laudantium eum ullam.</p>
        </Container>
      </div>
    );
  }
}

export default Blog;