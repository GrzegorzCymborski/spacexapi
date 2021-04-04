import { gql } from '@apollo/client';

//! Required
export const GET_REQUIRED = gql`
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

//! Optional
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
