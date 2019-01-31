import React from 'react';
import { shallow } from 'enzyme';

import { CreateItemView } from './createItemView';

describe('<CreateItemView />', () => {
  it('Renders without crashing', () => {
    const wrapper = shallow(<CreateItemView />);
    expect(wrapper.exists('h1')).toEqual(true);
    expect(wrapper.find('h1').text()).toEqual('Create Event');
  });
});
