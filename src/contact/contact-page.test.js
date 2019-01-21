import React from 'react';
import { shallow } from 'enzyme';
import ContactPage from './contact-page';

it('renders without crashing <ContactPage />', () => {
  const wrapper = shallow(<ContactPage />);
  expect(wrapper.exists('.main-content')).toEqual(true);
});
