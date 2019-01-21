import React from 'react';
import { shallow } from 'enzyme';
import { App } from './app';

describe('<App />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders without crashing <App />', () => {
    expect(wrapper.exists('.app')).toEqual(true);
  });

  it('sets refreshInterval to undefined on load', () => {
    expect(wrapper.instance().refreshInterval).toBeUndefined();
  });

  it('sets refreshInterval on load', () => {
    wrapper.setProps({ loggedIn: true });
    expect(wrapper.instance().refreshInterval).toBeTruthy();
  });
});
