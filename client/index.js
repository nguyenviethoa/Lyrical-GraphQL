import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { SongList } from './components/SongList';

const client = new ApolloClient({
	// By default, this client will send queries to the
  //  `/graphql` endpoint on the same host
  link: new HttpLink(),
  cache: new InMemoryCache()
});

const Root = () => {
  return (
  		<ApolloProvider client={client}>
  			<SongList />
  		</ApolloProvider>
  	)
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
