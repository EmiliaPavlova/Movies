import React from 'react';
import { mount } from 'enzyme';
import Footer from './Footer';
import './Footer.css';

const mountFooter = props => mount(<Footer {...props} />);

describe('Footer', () => {
  describe('Snapshot', () => {
    it('matches the snapshot', () => {
      const wrapper = mountFooter();
      expect(wrapper).toMatchSnapshot();
    })
  });
});
