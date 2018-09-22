export const container = `
import React from 'react';
import { Query } from 'react-apollo';

import Component from '../components/Component';
import query from '../graphql/query.js';

export const Container = () => (
  <Query query={query}>
    {(data, error, loading) => {
      if (loading) return <div>Loading</div>;
      if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
      if (data) {
        <Component prop={data} />;
      }
    }}
  </Query>
);
`;

export const test = `

`;
