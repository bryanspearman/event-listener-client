import React from 'react';
import { shallow } from 'enzyme';
import { LandingPage } from './landing-page';

describe('<LandingPage />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<LandingPage />);
  });

  it('renders without crashing <LandingPage />', () => {
    expect(wrapper.exists('.home')).toEqual(true);
  });
});
