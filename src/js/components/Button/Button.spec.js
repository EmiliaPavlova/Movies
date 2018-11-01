import React from 'react';
import { mount } from 'enzyme';
import Button from './Button';
import './Button.css';

const componentProps = (overrides = {}) => ({
  title: 'Button',
  className: 'class',
  selected: false,
  onClick: jest.fn(),
  ...overrides
});

const mountButton = props => mount(<Button {...props} />);

describe('Button', () => {
  describe('Button attributes', () => {
    it('matches the snapshot', () => {
      const wrapper = mountButton(componentProps());
      expect(wrapper).toMatchSnapshot();
    });
    it('sets a custom class when provided via `className` property', () => {
      const props = componentProps({ className: 'custom-class' });
      const wrapper = mountButton(props);
      const button = wrapper.find('button').at(0);
      expect(button.props().className).toBe(`button custom-class `);
    });
    it('sets a \'selected\' class when button is selected', () => {
      const props = componentProps({ selected: true });
      const wrapper = mountButton(props);
      const button = wrapper.find('button').at(0);
      expect(button.props().className).toBe(`button class selected`);
    });
  });
  describe('Button events', () => {
    it('sets the onClick event handler with the given function via the `onClick` property', () => {
      const onClickMock = jest.fn();
      const props = componentProps({ onClick: onClickMock });
      const wrapper = mountButton(props);
      const button = wrapper.find('button').at(0);

      expect(button.props().onClick).toBe(onClickMock);

      button.simulate('click');
      expect(onClickMock).toHaveBeenCalledTimes(1);
      expect(onClickMock).toHaveBeenCalledWith(expect.any(Object));
    });

  })
});
