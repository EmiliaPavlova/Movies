import React from 'react';
import { mount } from 'enzyme';
import Home from './Home';
import './Home.css';

const mountHome = props => mount(<Home {...props} />);

describe('Home', () => {
  describe('Home attributes', () => {
    it('matches the snapshot', () => {
      const wrapper = mountHome();
      expect(wrapper).toMatchSnapshot();
    })
  });
});
