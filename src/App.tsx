/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useLazyQuery, useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { Container, Card, Accordion, Col, Row, ListGroup } from 'react-bootstrap';
import { GET_DRAGONS, GET_LANDPADS, GET_REQUIRED } from './API/queries';
import Group from './components/Group';
import GroupItem from './components/GroupItem';
import { OptionalDragonProps, OptionalLandpadsProps, RequiredItemsProps } from './types';

const App: React.FC = () => {
  const [optionalVisible, setOptionalVisible] = useState(false);
  const { data: dataRockets } = useQuery<RequiredItemsProps>(GET_REQUIRED);

  const [getDataDragons, { data: dataDragons }] = useLazyQuery<OptionalDragonProps>(GET_DRAGONS);
  const [getLandpads, { data: dataLandpads }] = useLazyQuery<OptionalLandpadsProps>(GET_LANDPADS);

  const handleOptionalItem = (e: React.SyntheticEvent): void => {
    if (e.currentTarget.textContent === 'Dragons Ships') getDataDragons();
    if (e.currentTarget.textContent === 'Landpads') getLandpads();
    setOptionalVisible(true)
    console.log('api call'); 
  };

  return (
    <Container className="d-flex flex-column" fluid>
      <Card className="my-3" style={{ height: '100% ' }}>
        <Card.Header>SpaceX GraphQL 🚀</Card.Header>

        {dataRockets && (
          <>
            <Group title="Rockets">
              {dataRockets.rockets.map(({ name, description, first_flight }, index) => (
                <GroupItem key={index} title={name} year={first_flight} details={description} />
              ))}
            </Group>
            <Group title="Latest launches">
              {dataRockets.launches.map(({ mission_name, launch_year, details }, index) => (
                <GroupItem key={index} title={mission_name} year={launch_year} details={details} />
              ))}
            </Group>
          </>
        )}

        {dataDragons?.dragons && (
          <Group title="Dragon Ships">
            {dataDragons.dragons.map(({ name, first_flight, description }, index) => (
              <GroupItem key={index} title={name} year={first_flight} details={description} />
            ))}
          </Group>
        )}

        {dataLandpads?.landpads && (
          <Group title="Landpads">
            {dataLandpads.landpads.map(({ full_name, details, status }, index) => (
              <GroupItem key={index} title={full_name} year={status} details={details} />
            ))}
          </Group>
        )}

        <Accordion hidden={optionalVisible}>
          <Row className="d-flex flex-column align-items-center my-3">
            <Col xs={10}>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0" style={{ cursor: 'pointer' }}>
                  Optional Items
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <ListGroup variant="flush" style={{ cursor: 'pointer' }}>
                      <ListGroup.Item onClick={(e): void => handleOptionalItem(e)}>Dragons Ships</ListGroup.Item>
                      <ListGroup.Item onClick={(e): void => handleOptionalItem(e)}>Landpads</ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Col>
          </Row>
        </Accordion>
      </Card>
    </Container>
  );
};

export default App;
