import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

class CreateElementComponent extends React.Component {
  render() {
    return React.createElement('div', null, this.props.title);
  }
}

export default CreateElementComponent;
