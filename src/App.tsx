import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { Container, Card } from 'react-bootstrap';
import { ADD_TO_REQUIRED_GROUPS } from './API/queries';
import Group from './components/Group';
import GroupItem from './components/GroupItem';
import OptionalItems from './components/OptionalItems';
import useDragons from './hooks/useDragons';
import useLandpads from './hooks/useLandpads';
import useRockets from './hooks/useRockets';

const App = () => {
  const [optionalVisible, setOptionalVisible] = useState(false);

  const [addToGroup] = useMutation(ADD_TO_REQUIRED_GROUPS);
  const { rockets, launches } = useRockets();
  const { dragons, getDragons } = useDragons();
  const { getLandpads, landpads } = useLandpads();

  const handleOptionalItem = (e: React.SyntheticEvent) => {
    const textContent = e.currentTarget.textContent;

    if (textContent === 'Dragons Ships') {
      getDragons();
    }
    if (textContent === 'Landpads') {
      getLandpads();
    }

    setOptionalVisible(true);

    //! faked API Call
    addToGroup({
      variables: {
        topic: textContent
      }
    });
  };

  return (
    <Container className="d-flex flex-column" fluid>
      <Card className="my-3" style={{ height: '100% ' }}>
        <Card.Header>SpaceX GraphQL 🚀</Card.Header>

        {rockets && launches && (
          <>
            <Group title="Rockets">
              {rockets.map(({ name, description, first_flight }, index) => (
                <GroupItem key={index} title={name} year={first_flight} details={description} />
              ))}
            </Group>
            <Group title="Latest launches">
              {launches.map(({ mission_name, launch_year, details }, index) => (
                <GroupItem key={index} title={mission_name} year={launch_year} details={details} />
              ))}
            </Group>
          </>
        )}

        {dragons && (
          <Group title="Dragon Ships">
            {dragons.map(({ name, first_flight, description }, index) => (
              <GroupItem key={index} title={name} year={first_flight} details={description} />
            ))}
          </Group>
        )}

        {landpads && (
          <Group title="Landpads">
            {landpads.map(({ full_name, details, status }, index) => (
              <GroupItem key={index} title={full_name} year={status} details={details} />
            ))}
          </Group>
        )}

        <OptionalItems handleOptionalItem={handleOptionalItem} hidden={optionalVisible} />
      </Card>
    </Container>
  );
};

export default App;
