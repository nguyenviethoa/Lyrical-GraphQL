import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { Switch, Route, BrowserRouter as Router, Link } from 'react-router-dom';
import { SongList } from './components/SongList';
import { Home } from './components/Home';
import { CreateSong } from './components/SongList/CreateSong';

const client = new ApolloClient({
	// By default, this client will send queries to the
  //  `/graphql` endpoint on the same host
  link: new HttpLink(),
  cache: new InMemoryCache()
});

const Root = () => {
  return (
  		<ApolloProvider client={client}>
				<div>
				<Router>
					<Switch>
						<Route exact path='/' component={Home} />
						<Switch>
							<Route exact path='/songs' component={SongList} />
							<Route path='/songs/new' component={CreateSong} />
						</Switch>	
					</Switch>
					
				</Router>
				</div>
  		</ApolloProvider>
  	);
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);

