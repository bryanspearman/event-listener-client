import React from 'react';
import { shallow } from 'enzyme';
import { Sidebar } from './sidebar';

describe('<Sidebar />', () => {
  let wrapper;
  let itemListMock;
  itemListMock = [
    {
      id: 3222,
      itemTitle: 'TITLE',
      itemDate: '11-23-2018',
      itemNotes: 'NOTES'
    }
  ];

  beforeEach(() => {
    wrapper = shallow(<Sidebar itemList={itemListMock} />);
  });

  it('renders list-nav without crashing', () => {
    expect(wrapper.exists('.list-nav')).toEqual(true);
  });

  it('renders future-hdr without crashing', () => {
    expect(wrapper.exists('.future-hdr')).toEqual(true);
  });

  it('renders past-list without crashing', () => {
    expect(wrapper.exists('.past-hdr')).toEqual(true);
  });
});
