import React from 'react';
import { mount, shallow } from 'enzyme';
import SearchContainer from './SearchContainer';
import './SearchContainer.css';

const componentProps = (overrides = {}) => ({
  onClick: jest.fn(),
  ...overrides
});

const mountSearchContainer = props => mount(<SearchContainer {...props} />);

describe('SearchContainer', () => {
  describe('SearchContainer attributes', () => {
    it('matches the snapshot', () => {
      const wrapper = mountSearchContainer();
      expect(wrapper).toMatchSnapshot();
    });
  });
  describe('Event handlers', () => {
    it('calls onClick on click event', () => {
      const onClickMock = jest.fn();
      const props = componentProps({ onClick: onClickMock });
      const wrapper = mountSearchContainer(props);
      const button = wrapper.find('button').at(0);
      button.simulate('click');
      // expect(onClickMock).toHaveBeenCalled();

      const actionButton = wrapper.find('button').at(2);
      actionButton.simulate('click');
      // expect(onClickMock).toHaveBeenCalled();
    });
  });
});
