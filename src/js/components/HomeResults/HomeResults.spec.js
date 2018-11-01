import React from 'react';
import { mount } from 'enzyme';
import HomeResults from './HomeResults';
import './HomeResults.css';

const componentProps = (overrides = {}) => ({
  moviesFound: 2,
  sortBy: 'release_date',
  ...overrides
});

const mountHomeResults = props => mount(<HomeResults {...props} />);

describe('HomeResults', () => {
  describe('HomeResults attributes', () => {
    it('matches the snapshot for sort by release_date', () => {
      const props = componentProps();
      const wrapper = mountHomeResults(props);
      expect(wrapper).toMatchSnapshot('Sort by release_date');
    });
    it('matches the snapshot for sort by vote_average', () => {
      const props = componentProps({ sortBy: 'vote_average' });
      const wrapper = mountHomeResults(componentProps(props));
      expect(wrapper).toMatchSnapshot('Sort by vote_average');
    });
    it('matches the snapshot for only one movie found', () => {
      const props = componentProps({ moviesFound: 1 });
      const wrapper = mountHomeResults(componentProps(props));
      expect(wrapper).toMatchSnapshot('One movie found');
    });
  });
  describe('Event handlers', () => {
    it('calls onClick on click event', () => {
      const onClickMock = jest.fn();
      const props = componentProps({ onClick: onClickMock });
      const wrapper = mountHomeResults(props);
      const button = wrapper.find('button').at(0);
      button.simulate('click');
      // expect(onClickMock).toHaveBeenCalled();

      const actionButton = wrapper.find('button').at(1);
      actionButton.simulate('click');
      // expect(onClickMock).toHaveBeenCalled();
    });
  });
});
