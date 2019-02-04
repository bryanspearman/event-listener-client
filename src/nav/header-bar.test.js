import React from 'react';
import { shallow } from 'enzyme';
import { HeaderBar } from './header-bar';
import { NavBurger } from './nav-burger';

describe('<HeaderBar />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<HeaderBar />);
  });

  it('renders without crashing <HeaderBar />', () => {
    expect(wrapper.exists('.header-bar')).toEqual(true);
    expect(wrapper.exists('.status-bar')).toEqual(true);
  });

  it('renders child component successfully', () => {
    expect(wrapper.find(NavBurger)).toBeTruthy();
  });
});
