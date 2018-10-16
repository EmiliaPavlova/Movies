import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class HellWorld extends Component {
  constructor() {
    super();
    this.state = {
      title: 'Hello World!'
    };
  }
  render() {
    return (
      <div>{this.state.title}</div>
    );
  }
}
export default HellWorld;

// const wrapper = document.getElementById('index');
// wrapper ? ReactDOM.render(<HellWorld />, wrapper) : false;

