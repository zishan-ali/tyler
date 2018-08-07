export const component = `import React from 'react';

const Component = ({ prop = 'hello world!' }) => <div>{prop}</div>;

export default Component;\n`;

export const test = `import React from 'react'
import { shallow } from 'enzyme';
import Component from './Component';

const render = props => shallow(<Component {...props} />);

test('renders', () => {
  const component = render();
  expect(component).toHaveLength(1);
});\n`;
