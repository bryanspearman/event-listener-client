import React from 'react';
import { shallow } from 'enzyme';
import ContactPage from './contact-page';

it('renders without crashing <ContactPage />', () => {
  const wrapper = shallow(<ContactPage />);
  expect(1).toEqual(1);
});
