import React, { Component } from 'react';

class HelloReact extends Component {
  constructor() {
    super();
    this.state = {
      title: 'Hello React!'
    };
  }

  render() {
    return (
      <div>{this.state.title}</div>
    );
  }
}

export default HelloReact;
