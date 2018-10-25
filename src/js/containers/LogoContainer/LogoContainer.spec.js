import React from 'react';
import { mount } from 'enzyme';
import LogoContainer from './LogoContainer';

const mountLogoContainer = props => mount(<LogoContainer {...props} />);

describe('LogoContainer', () => {
  describe('Snapshot', () => {
    it('matches the snapshot', () => {
      const wrapper = mountLogoContainer();
      expect(wrapper).toMatchSnapshot();
    })
  });
});
