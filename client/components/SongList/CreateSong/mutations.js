import gql from 'graphql-tag';

export const CreateSongMutation = gql`
  mutation addSong($title: String) {
    addSong(title: $title) {
      title
    }
  }
`;
