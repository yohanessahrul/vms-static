import React, { Component } from 'react';

class Contact extends Component {
  render() {
    console.log('match.url = ', this.props.match.url)
    return (
      <div>
        <h2>Contact</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos voluptatem omnis doloremque! Facilis laboriosam numquam earum omnis molestias quaerat quae minus sit vero maiores illo doloribus beatae corrupti, ad atque.</p>
      </div>
    );
  }
}

export default Contact;