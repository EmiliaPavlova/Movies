import React from 'react';
import { mount } from 'enzyme';
import InfoLineContainer from './InfoLineContainer';
import './InfoLineContainer.css';

const componentProps = (overrides = {}) => ({
  page: 'home',
  moviesFound: 2,
  sortBy: 'release_date',
  ...overrides
});

const mountInfoLineContainer = props => mount(<InfoLineContainer {...props} />);

describe('InfoLineContainer', () => {
  describe('Snapshot', () => {
    it('matches the snapshot for Home page', () => {
      const wrapper = mountInfoLineContainer(componentProps());
      expect(wrapper).toMatchSnapshot('Home page');
    });
    it('matches the snapshot for Details page', () => {
      const wrapper = mountInfoLineContainer(componentProps({page: 'details'}));
      expect(wrapper).toMatchSnapshot('Details page');
    })
  });
  describe('Home page', () => {
    it('Should return InfoLine', () => {
      const props = componentProps();
      const wrapper = mountInfoLineContainer(props);
      console.log(wrapper.debug());
    })
  })
});
