import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

// jest.mock('./index');

global.fetch = jest.fn().mockImplementation(() => new Promise((resolve) => {
  resolve({
    json: () => ({}),
  });
}));

global.shallow = shallow;
global.render = render;
global.mount = mount;
