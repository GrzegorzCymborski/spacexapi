/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useQuery, useLazyQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { Container, Card, Accordion, Col, Row, Button } from 'react-bootstrap';
import { GET_ROCKETS, GET_LATEST_LAUNCHES, GET_LATEST_SHIPS, GET_DRAGONS, GET_LANDPADS } from './API/queries';
import Group from './components/Group';
import GroupItem from './components/GroupItem';
import { DragonProps, LandpadsProps, LaunchesProps, RocketsProps, ShipsProps } from './types';

const App: React.FC = () => {
  const [currentGroup, setCurrentGroup] = useState<number>(0);

  const { data: dataRockets } = useQuery<RocketsProps>(GET_ROCKETS);
  const { data: dataLatestLaunches } = useQuery<LaunchesProps>(GET_LATEST_LAUNCHES);
  const { data: dataLatestShips } = useQuery<ShipsProps>(GET_LATEST_SHIPS);

  const [getDragons, { data: dataDragons }] = useLazyQuery<DragonProps>(GET_DRAGONS);
  const [getLandpads, { data: dataLandpads }] = useLazyQuery<LandpadsProps>(GET_LANDPADS);

  const handleCustomGroup = (groupID: number): void => {
    setCurrentGroup(groupID);
  };

  useEffect(() => {
    if (currentGroup === 2) getDragons();
    if (currentGroup === 3) getLandpads();
  }, [currentGroup]);

  return (
    <Container className="d-flex flex-column" fluid>
      <Card className="my-3" style={{ height: '100% ' }}>
        <Card.Header>SpaceX GraphQL 🚀</Card.Header>

        {dataRockets && (
          <Group title="Rockets">
            {dataRockets.rockets.map(({ name, description, first_flight }, index) => (
              <GroupItem key={index} title={name} year={first_flight} details={description} />
            ))}
          </Group>
        )}

        {dataLatestLaunches && (
          <Group title="Latest launches">
            {dataLatestLaunches.launches.map(({ mission_name, launch_year, details }, index) => (
              <GroupItem key={index} title={mission_name} year={launch_year} details={details} />
            ))}
          </Group>
        )}

        <Accordion>
          <Row className="d-flex flex-column align-items-center my-3">
            <Col xs={10}>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0" style={{ cursor: 'pointer' }}>
                  Optional Items
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <Button className="mx-3" onClick={(): void => handleCustomGroup(1)}>
                      Latest Ships
                    </Button>
                    <Button className="mx-3" onClick={(): void => handleCustomGroup(2)}>
                      Dragons Ships
                    </Button>
                    <Button className="mx-3" onClick={(): void => handleCustomGroup(3)}>
                      Landpads
                    </Button>
                  </Card.Body>
                </Accordion.Collapse>
                {currentGroup === 1 && dataLatestShips && (
                  <Group title="Latest Ships" selectable={true}>
                    {dataLatestShips.ships.map(({ name, year_built, type }, index) => (
                      <GroupItem key={index} title={name} year={year_built} details={type} />
                    ))}
                  </Group>
                )}
                {currentGroup === 2 && dataDragons && (
                  <Group title="Dragon Ships" selectable={true}>
                    {dataDragons.dragons.map(({ name, first_flight, description }, index) => (
                      <GroupItem key={index} title={name} year={first_flight} details={description} />
                    ))}
                  </Group>
                )}

                {currentGroup === 3 && dataLandpads && (
                  <Group title="Landpads" selectable={true}>
                    {dataLandpads.landpads.map(({ full_name, details, status }, index) => (
                      <GroupItem key={index} title={full_name} year={status} details={details} />
                    ))}
                  </Group>
                )}
              </Card>
            </Col>
          </Row>
        </Accordion>
      </Card>
    </Container>
  );
};

export default App;
