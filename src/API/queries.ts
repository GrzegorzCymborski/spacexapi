import { gql } from '@apollo/client';

export const GET_ROCKETS = gql`
  {
    rockets {
      id
      name
      description
      first_flight
    }
  }
`;

export const GET_LATEST_LAUNCHES = gql`
  {
    launches(limit: 5, sort: "launch_year", order: "desc") {
      mission_name
      launch_year
      details
    }
  }
`;

export const GET_LATEST_SHIPS = gql`
  {
    ships(limit: 5, sort: "year_built", order: "desc") {
      id
      name
      year_built
      type
    }
  }
`;
