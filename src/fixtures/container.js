export const container = `import React from 'react';
import { connect } from 'react-redux';

const Component = props => <div>{props}</div>;

const Container = props => <Component {...props} />

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Container);\n`;

export const test = `import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import Container from './Container';

const middlewares = []
const store = configureStore(middlewares);
const render = props => shallow(<Container store={store({})} {...props} />);

test('renders', () => {
  const container = render();
  expect(container).toHaveLength(1);
});\n`;
