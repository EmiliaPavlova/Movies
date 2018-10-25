import React from 'react';
import { mount } from 'enzyme';
import SearchContainer from './SearchContainer';
import './SearchContainer.css';

const mountSearchContainer = props => mount(<SearchContainer {...props} />);

describe('SearchContainer', () => {
  describe('Snapshot', () => {
    it('matches the snapshot', () => {
      const wrapper = mountSearchContainer();
      expect(wrapper).toMatchSnapshot();
    })
  });
});
