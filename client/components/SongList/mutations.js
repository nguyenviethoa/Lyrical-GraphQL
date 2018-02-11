import gql from 'graphql-tag';

export const DeleteSongMutation = gql`
  mutation deleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`;