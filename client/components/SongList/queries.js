import gql from 'graphql-tag';

export const SongsQuery = gql`
	query songs {
		songs {
			id
			title
		}
	}
`;

export const SongQuery = gql`
	query SongQuery($id: ID!) {
		song(id: $id) {
			id
			title
			lyrics{
				id
				content
				likes
			}
		}
	}
`;
