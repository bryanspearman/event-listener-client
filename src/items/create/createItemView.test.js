import React from 'react';
import { shallow } from 'enzyme';
import { CreateItemForm } from './createItemForm';
import { CreateItemView } from './createItemView';

describe('<CreateItemView />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CreateItemView />);
  });

  it('Renders without crashing', () => {
    expect(wrapper.exists('h1')).toEqual(true);
    expect(wrapper.find('h1').text()).toEqual('Create Event');
  });

  it('Renders child component without crashing', () => {
    expect(wrapper.find(CreateItemForm)).toBeTruthy();
  });
});
