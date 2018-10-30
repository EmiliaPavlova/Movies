import React from 'react';
import { mount } from 'enzyme';
import Details from './Details';
import './Details.css';

const mountDetails = props => mount(<Details {...props} />);

describe('Details', () => {
  describe('Details attributes', () => {
    it('matches the snapshot', () => {
      const wrapper = mountDetails();
      expect(wrapper).toMatchSnapshot();
    })
  });
});
