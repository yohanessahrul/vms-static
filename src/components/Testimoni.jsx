import React, { Component } from 'react';

class Testimoni extends Component {
  render() {
    console.log('match.url = ', this.props.match.url)
    return (
      <div>
        <h3 style={{color: 'red'}}>Testimoni</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero recusandae voluptas fuga nam, iste officiis. Odit quia non dignissimos cupiditate sit repellendus earum dolorem, quis quod fuga architecto, culpa quo.</p>
      </div>
    );
  }
}

export default Testimoni;