import React from 'react';
import { shallow } from 'enzyme';
import { EditItemView } from './editItemView';

describe('<EditItemView />', () => {
  let matchMock;
  let getItemMock;
  let selectedItemMock;
  let wrapper;

  beforeEach(() => {
    matchMock = { params: { id: 123 } };
    getItemMock = () => {};
    selectedItemMock = {
      itemDate: new Date().toISOString(),
      itemTitle: 'TITLE',
      id: 123456789,
      itemNotes: 'NOTES'
    };
    wrapper = shallow(
      <EditItemView
        match={matchMock}
        getItem={getItemMock}
        selectedItem={selectedItemMock}
      />
    );
  });

  it('renders without crashing <EditItemView />', () => {
    expect(wrapper.exists('h1')).toEqual(true);
    expect(wrapper.find('h1').text()).toEqual('Edit This Event');
  });
});
