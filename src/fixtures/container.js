export const container =
`import React from 'react';

const Component = () => <div>Container</div>;

export const Container = Component;
\n`;

export const test =
`import React from 'react';
import { shallow } from 'enzyme';

import { Container } from './Container';

const render = props => shallow(<Container {...props} />);

test('renders', () => {
  const container = render();
  expect(container).toHaveLength(1);
});\n`;