import React from 'react';
import { mount } from 'enzyme';
import ErrorBoundary from './ErrorBoundary';
import Home from '../../pages/Home/Home';

const componentProps = (overrides = {}) => ({
  children: <div>Component with an error</div>,
  ...overrides
});

const mountErrorBoundary = props => mount(<ErrorBoundary {...props} />);

const ProblemChild = () => {
  throw new Error('Error thrown from problem child');
  return <div>Error</div>;
}

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
      expect(wrapper.html()).toContain('Something went wrong');
    });
    it('should call componentDidCatch', () => {
      const didMountSpy = jest.spyOn(ErrorBoundary.prototype, 'componentDidCatch');
      // mountErrorBoundary(componentProps());
      mount(<ErrorBoundary><ProblemChild /></ErrorBoundary>);

      expect(didMountSpy).toHaveBeenCalledTimes(1);

      didMountSpy.mockClear();
    });
  })
});
