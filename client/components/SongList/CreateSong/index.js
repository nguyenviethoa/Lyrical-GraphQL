import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import { CreateSongMutation } from './mutations';
import { SongsQuery } from '../queries';

@graphql(CreateSongMutation)
export class CreateSong extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: ''
        }
    }

    onSubmit(event) {
        event.preventDefault();

        this.props.mutate({
            variables: {
                title: this.state.title
            },
            refetchQueries:[{ query: SongsQuery }]
        })
    }

    render() {
        return (
            <div>
                <Link to="/"> Back </Link>
                <h3> Create a New Song </h3>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <label>Song title:</label>
                    <input 
                        onChange={event => this.setState({title: event.target.value})}
                        value={this.state.title}
                    />        
                </form>
            </div>
        )
    }
}