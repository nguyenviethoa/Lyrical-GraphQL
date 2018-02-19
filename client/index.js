import 'normalize.css/normalize.css';
import './style/style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { Switch, Route, BrowserRouter as Router, Link, HashRouter } from 'react-router-dom';
import { SongList } from './components/SongList';
import { Home } from './components/Home';
import { CreateSong } from './components/SongList/CreateSong';
import { SongDetail } from './components/SongList/SongDetail';


const client = new ApolloClient({
	// By default, this client will send queries to the
  //  `/graphql` endpoint on the same host
  link: new HttpLink(),
  cache: new InMemoryCache({
		dataIdFromObject: object => object.id || null
	})
});

const Root = () => {
  return (
  		<ApolloProvider client={client}>
				<div>
				<HashRouter>
					<Switch>
						<Route exact path='/' component={Home} />
						<Switch>
							<Route exact path='/songs' component={SongList} />
							<Route path='/songs/new' component={CreateSong} />
							<Route path='/songs/:id' component={SongDetail} />
						</Switch>	
					</Switch>
					
				</HashRouter>
				</div>
  		</ApolloProvider>
  	);
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);

