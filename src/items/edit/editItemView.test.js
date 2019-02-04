import React from 'react';
import { shallow } from 'enzyme';
import { EditItemView } from './editItemView';
import { getItem, updateItem, getItems } from '../item-actions';

describe('<EditItemView />', () => {
  let matchMock;
  let getItemMock;
  let selectedItemMock;
  let wrapper;

  beforeEach(() => {
    matchMock = { params: { id: 123 } };
    getItemMock = jest.fn();
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

  it('renders h1 without crashing', () => {
    expect(wrapper.exists('h1')).toEqual(true);
    expect(wrapper.find('h1').text()).toEqual('Edit This Event');
  });

  it('should have called getItem on mount', () => {
    expect(getItemMock).toHaveBeenCalled();
  });
});
