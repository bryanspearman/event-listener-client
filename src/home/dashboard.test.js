import React from 'react';
import { shallow } from 'enzyme';
import { Dashboard } from './dashboard';

describe('<Dashboard />', () => {
  let getItemsMock = jest.fn();
  let matchMock = { isExact: true };
  let itemListMock = [];
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Dashboard
        getItems={getItemsMock}
        match={matchMock}
        itemList={itemListMock}
      />
    );
  });

  it('renders without crashing <Dashboard />', () => {
    expect(wrapper.exists('.dashboard')).toEqual(true);
  });

  it('renders info-view', () => {
    expect(wrapper.exists('.info-view')).toEqual(true);
  });

  it('should have called getItems prop on mount', () => {
    expect(getItemsMock).toHaveBeenCalled();
  });
});
