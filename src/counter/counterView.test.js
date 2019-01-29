import React from 'react';
import { shallow } from 'enzyme';
import { CounterView } from './counterView';

describe('<CounterView />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CounterView />);
  });

  it('renders without crashing <CounterView />', () => {
    expect(
      wrapper.exists('.counter', '.clock-number', '.number-label')
    ).toEqual(true);
  });
});
