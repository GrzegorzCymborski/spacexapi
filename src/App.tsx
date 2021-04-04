import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { Container, Card, Row, ListGroup, Col } from 'react-bootstrap';
import { Rocket } from '../types/generated';

const GET_ROCKETS = gql`
  {
    rockets {
      id
      active
      type
      name
      wikipedia
      height {
        meters
      }
      description
    }
  }
`;

const App: React.FC = () => {
  const { data } = useQuery(GET_ROCKETS);

  return (
    <Container className="d-flex flex-column" fluid style={{ height: '100vh' }}>
      <Card className="my-3" style={{ height: '100% ' }}>
        <Card.Header>SpaceX GraphQL 🚀</Card.Header>
        <Row className="d-flex flex-column align-items-center my-3">
          <Col xs={10}>
            <Card>
              <Card.Header>SpaceX Rockets</Card.Header>
              <ListGroup variant="flush">
                {data?.rockets.map(({ id }: Rocket) => (
                  <ListGroup.Item key={id}>{id}</ListGroup.Item>
                ))}
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default App;
