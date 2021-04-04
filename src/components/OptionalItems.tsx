import React from 'react';
import { Row, Col, Card, ListGroup, Accordion } from 'react-bootstrap';

type Props = {
  fn: (e: React.SyntheticEvent) => void;
  hidden: boolean;
};

const OptionalItems: React.FC<Props> = ({ hidden, fn }) => {
  return (
    <Accordion hidden={hidden}>
      <Row className="d-flex flex-column align-items-center my-3">
        <Col xs={10}>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0" style={{ cursor: 'pointer' }}>
              Optional Items
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <ListGroup variant="flush" style={{ cursor: 'pointer' }}>
                  <ListGroup.Item onClick={(e): void => fn(e)}>Dragons Ships</ListGroup.Item>
                  <ListGroup.Item onClick={(e): void => fn(e)}>Landpads</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Col>
      </Row>
    </Accordion>
  );
};

export default OptionalItems;
