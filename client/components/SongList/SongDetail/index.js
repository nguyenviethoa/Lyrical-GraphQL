import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { SongQuery } from '../queries';

// @graphql(SongQuery, options: {
// 	(props) => {
// 		return { variable: { id: props.params.id }}
// 	}
// })
export class SongDetail extends Component {
	render() {
		return (
			<div>
				<h3> Song Detail </h3>
			</div>
		);
	}
}
