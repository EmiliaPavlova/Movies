import React, { Component, Fragment } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  componentDidCatch(error, info) {
    this.setState({
      hasError: true,
      error: error,
      errorInfo: info
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <Fragment>
          <h1>Something went wrong.</h1>
          <details style={{ whiteSpace: "pre-wrap" }}>
            {this.state.error && this.state.error.toString()}
            {this.state.errorInfo.componentStack}
          </details>
        </Fragment>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;