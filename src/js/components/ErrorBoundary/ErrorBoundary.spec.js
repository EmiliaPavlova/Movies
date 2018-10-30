import React from 'react';
import { mount, shallow } from 'enzyme';
import ErrorBoundary from './ErrorBoundary';

const componentProps = (overrides = {}) => ({
  children: <div>Component with an error</div>,
  ...overrides
});

const mountErrorBoundary = props => mount(<ErrorBoundary {...props} />);

describe('ErrorBoundary', () => {
  describe('ErrorBoundary attributes', () => {
    it('matches the snapshot', () => {
      const wrapper = mountErrorBoundary(componentProps());
      expect(wrapper).toMatchSnapshot();
    });
  });
  describe('Catching an error', () => {
    it('should display an error when error in state', () => {
      const wrapper = mountErrorBoundary(componentProps());
      wrapper.setState({
        hasError: true,
        error: 'Error',
        errorInfo: { componentStack: 'some additional info' }
      });
      wrapper.update();
      console.log(wrapper.html());
      expect(wrapper.html()).toContain('Something went wrong');
    });
  })
});
