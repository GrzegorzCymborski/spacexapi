/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useQuery } from '@apollo/client';
import React from 'react';
import { Container, Card } from 'react-bootstrap';
import { GET_ROCKETS, GET_LATEST_LAUNCHES, GET_LATEST_SHIPS } from './API/queries';
import Group from './components/Group';
import GroupItem from './components/GroupItem';
import { LaunchesProps, RocketsProps, ShipsProps } from './types';

const App: React.FC = () => {
  const { data: dataRockets } = useQuery<RocketsProps>(GET_ROCKETS);
  const { data: dataLatestLaunches } = useQuery<LaunchesProps>(GET_LATEST_LAUNCHES);
  const { data: dataLatestShips } = useQuery<ShipsProps>(GET_LATEST_SHIPS);

  return (
    <Container className="d-flex flex-column" fluid>
      <Card className="my-3" style={{ height: '100% ' }}>
        <Card.Header>SpaceX GraphQL 🚀</Card.Header>

        {dataRockets && (
          <Group title="Rockets">
            {dataRockets.rockets.map(({ name, description, first_flight }, index: number) => (
              <GroupItem key={index} title={name} year={first_flight} details={description} />
            ))}
          </Group>
        )}

        {dataLatestLaunches && (
          <Group title="Latest launches">
            {dataLatestLaunches.launches.map(({ mission_name, launch_year, details }, index: number) => (
              <GroupItem key={index} title={mission_name} year={launch_year} details={details} />
            ))}
          </Group>
        )}

        {dataLatestShips && (
          <Group title="Latest Ships">
            {dataLatestShips.ships.map(({ name, year_built, type }, index: number) => (
              <GroupItem key={index} title={name} year={year_built} details={type} />
            ))}
          </Group>
        )}

      </Card>
    </Container>
  );
};

export default App;