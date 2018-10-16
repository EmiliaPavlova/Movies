class createElementComponent extends React.Component {
  render() {
    return React.createElement('div', null, this.props.toWhat);
  }
}

ReactDOM.render(
  React.createElement(Hello, {toWhat: 'I am the React.createElement component'}, null),
  document.getElementById('root')
);
