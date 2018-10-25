import React from 'react';
import { mount } from 'enzyme';
import InfoLineContainer from './InfoLineContainer';
import './InfoLineContainer.css';

const mountInfoLineContainer = props => mount(<InfoLineContainer {...props} />);

describe('InfoLineContainer', () => {
  describe('Snapshot', () => {
    it('matches the snapshot', () => {
      const wrapper = mountInfoLineContainer();
      expect(wrapper).toMatchSnapshot();
    })
  });
});
