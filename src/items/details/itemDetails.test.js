import React from 'react';
import { shallow } from 'enzyme';
import Moment from 'moment';
import 'moment-timezone';
import { ItemDetails } from './itemDetails';

describe('itemDetails.js', () => {
  let wrapper;
  let matchMock;
  let selectedItemMock;
  let getItemMock;

  beforeEach(() => {
    matchMock = {
      params: {
        id: 'FAKE_ID'
      }
    };
    selectedItemMock = {
      itemDate: new Date().toISOString(),
      itemTitle: 'TITLE',
      id: 123456789,
      itemNotes: 'NOTES'
    };
    getItemMock = jest.fn();
    wrapper = shallow(
      <ItemDetails
        match={matchMock}
        getItem={getItemMock}
        selectedItem={selectedItemMock}
      />
    );
  });

  it('renders without crashing <ItemDetails />', () => {
    expect(wrapper.exists('.item-details')).toEqual(true);
  });

  it('renders item details correctly', () => {
    expect(wrapper.find('h1').text()).toEqual(selectedItemMock.itemTitle);
    expect(wrapper.find('.item-notes > p').text()).toEqual(
      selectedItemMock.itemNotes
    );
    const expectedDate = new Moment(selectedItemMock.itemDate).format(
      'ddd, MMMM Do YYYY'
    );
    expect(wrapper.find('.item-date').text()).toEqual(expectedDate);
  });

  it('executes getItem prop on mounting', () => {
    expect(getItemMock).toHaveBeenCalled();
  });

  it('executes getItem prop on props.match.params.id update', () => {
    expect(getItemMock).toHaveBeenCalledTimes(1);
    wrapper.setProps({
      match: {
        params: {
          id: 'FAKE_ID_2'
        }
      }
    });
    expect(getItemMock).toHaveBeenCalledTimes(2);
  });
});
