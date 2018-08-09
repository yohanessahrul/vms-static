import React, { Component } from 'react';
import { Container } from 'reactstrap';

import About from './About';
import Service from './Service';
import Blog from './Blog';
import Galery from './Galery';
import Contact from './Contact';

class Home extends Component {
  render() {
    console.log('match.url = ', this.props.match.url)
    return (
      <div>
        <div className="scroll-container">
            <div className="section" id="home">
              <Container>
                <h2>Home</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt ex voluptatum perspiciatis provident voluptates facilis fugiat distinctio cum laborum deleniti. Facere nemo laborum inventore. Quo cum tempore ipsum blanditiis dignissimos!</p>
              </Container>
            </div>
            <div className="section blog" id="about">
              <About/>
            </div>
            <div className="section service" id="service">
              <Service/>
            </div>
            <div className="section blog" id="blog">
              <Blog/>
            </div>
            <div className="section" id="galery">
              <Galery/>
            </div>
            <div className="section" id="contact">
              <Contact/>
            </div>
        </div>
      </div>
    );
  }
}

export default Home;