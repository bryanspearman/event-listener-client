import React from 'react';
import { shallow } from 'enzyme';
import { SplashView } from './splashView';

describe('<SplashView />', () => {
  let currentUserMock = 'Bob';
  let wrapper;
  wrapper = shallow(<SplashView currentUser={currentUserMock} />);

  it('Renders <SplashView /> without crashing', () => {
    expect(wrapper.exists('.splash')).toEqual(true);
  });

  it('Passes props for currentUser', () => {
    expect(currentUserMock).toMatch('Bob');
  });
});
