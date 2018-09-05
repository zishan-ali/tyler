import React from 'react'
import { shallow } from 'enzyme';
import Component from './Component';

const render = props => shallow(<Component {...props} />);

test('renders', () => {
  const component = render();
  expect(component).toHaveLength(1);
});
