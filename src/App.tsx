import React from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_LAUNCHES = gql`
  {
    launchesPast(limit: 10) {
      ships {
        name
        home_port
        image
      }
    }
  }
`;

const App: React.FC = () => {
  const { data } = useQuery(GET_LAUNCHES);
  console.log(data);

  return (
    <>
      <h1>Tesla spaceships</h1>
    </>
  );
};

export default App;
