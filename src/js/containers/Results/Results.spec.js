import React from 'react';
import { mount } from 'enzyme';
import Results from './Results';
import './Results.css';

const mountResults = props => mount(<Results {...props} />);

describe('Results', () => {
  describe('Snapshot', () => {
    it('matches the snapshot', () => {
      const wrapper = mountResults();
      expect(wrapper).toMatchSnapshot();
    })
  });
});
