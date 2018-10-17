import React, { Component } from 'react';

class ReactPureComponent extends Component {
  render() {
    return <div>{this.props.title}</div>
  }
}

export default ReactPureComponent;
