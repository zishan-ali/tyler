export const reactAppClient = `import React from 'react';
import { render } from 'react-dom';

import App from './containers/Container';
import './styles/styles.scss';

render(<App />, document.getElementById('root'));\n`;

export const apolloAppClient = `import React from 'react';
import Client from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { render } from 'react-dom';

import App from './containers/Container';
import './styles/styles.scss';

const client = new Client({
  uri: 'https://insert-api-here'
});

const AppContainer = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

render(<AppContainer />, document.getElementById('root'));\n`;

export const reduxAppClient = `import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './containers/Container';
import './styles/styles.scss';

const AppContainer = ({ store }) => (
  <Provider store={store}>
    <App />
  </Provider>
);

const store = createStore(
  window.__INITIAL_STATE__,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(<AppContainer store={store} />, document.getElementById('root'));\n`;
