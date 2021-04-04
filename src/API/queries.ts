import { gql } from '@apollo/client';

//! Required groups
export const GET_REQUIRED_GROUPS = gql`
  {
    rockets {
      name
      description
      first_flight
    }
    launches(limit: 5, sort: "launch_year", order: "desc") {
      mission_name
      launch_year
      details
    }
  }
`;

//! Add to group
export const ADD_TO_REQUIRED_GROUPS = gql`
mutation AddToGroup($name: String!) {
  addToGroup(topic: $name) {
    topic
  }
}
`;

//! Optional groups
export const GET_DRAGONS = gql`
  {
    dragons {
      name
      first_flight
      description
    }
  }
`;
export const GET_LANDPADS = gql`
  {
    landpads {
      full_name
      details
      status
    }
  }
`;