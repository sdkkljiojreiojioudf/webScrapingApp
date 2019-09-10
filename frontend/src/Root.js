import React from 'react';
import App from './App';
import { ApolloProvider } from '@apollo/react-hooks';
import Auth from './components/auth/Auth'

import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';

const httpLink = createHttpLink({
  uri: 'http://localhost:8000/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('authToken');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `JWT ${token}` : "sdfs",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

const Root = () => {
    return (
        <ApolloProvider client={client}>
            {!localStorage.getItem('authToken') ? <App /> : <Auth />}
        </ApolloProvider>
    )
}

export default Root;
