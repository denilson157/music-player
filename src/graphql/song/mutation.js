import { gql } from '@apollo/client'

export const INSERT_SONG = gql`
mutation INSERT_SONG($title: String!, $artist: String!, $duration: Float!, $thumbnail: String!, $url: String!) {
    insert_song(objects: {artist: $artist, duration: $duration, thumbnail: $thumbnail, title: $title, url: $url}) {
      affected_rows
    }
}
`