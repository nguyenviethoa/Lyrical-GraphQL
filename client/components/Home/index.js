import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router, Link } from 'react-router-dom';

export class Home extends Component {

	constructor(props) {
		super(props);
	}


	render() {
	
		return (
		<div>	
			<ul className="container">
				Home Page
			</ul>	
			<Link to='/songs'> go to song list </Link>
		</div>
		);
	}
}
