import React from 'react';
import { mount } from 'enzyme';
import Header from './Header';
import './Header.css';

const mountHeader = props => mount(<Header {...props} />);

describe('Header', () => {
  describe('Snapshot', () => {
    it('matches the snapshot', () => {
      const wrapper = mountHeader();
      expect(wrapper).toMatchSnapshot();
    })
  });
});
