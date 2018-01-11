import gql from 'graphql-tag';

export const SongsQuery = gql`
	query songs {
		songs {
			id
			title
		}
	}
`;
