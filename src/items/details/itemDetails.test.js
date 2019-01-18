import React from 'react';
import { shallow } from 'enzyme';
import { ItemDetails } from './itemDetails';

describe('itemDetails.js', () => {
  let wrapper;
  let matchMock;
  let getItemMock;

  beforeEach(() => {
    matchMock = {
      params: {
        id: 'FAKE_ID'
      }
    };
    getItemMock = () => {};

    wrapper = shallow(<ItemDetails match={matchMock} getItem={getItemMock} />);
  });

  it('renders without crashing <ItemDetails />', () => {
    expect(1).toEqual(1);
  });

  it('renders without crashing <ItemDetails />', () => {
    expect(1).toEqual(1);
  });

  it('renders without crashing <ItemDetails />', () => {
    expect(1).toEqual(1);
  });
});
