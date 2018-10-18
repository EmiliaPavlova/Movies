import React, { Component } from 'react';
import styles from './styles.css';

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
