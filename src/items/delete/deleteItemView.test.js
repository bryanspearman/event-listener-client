import React from 'react';
import { shallow } from 'enzyme';
import { DeleteItemView } from './deleteItemView';

describe('<DeleteItemView />', () => {
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
      <DeleteItemView
        match={matchMock}
        getItem={getItemMock}
        selectedItem={selectedItemMock}
      />
    );
  });

  it('renders without crashing <DeleteItemView />', () => {
    expect(wrapper.exists('#item-details')).toEqual(true);
  });

  it('executes getItem prop on mounting', () => {
    expect(getItemMock).toHaveBeenCalled();
  });
});
