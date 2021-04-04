import React from 'react';
import { Row, Col, Card, ListGroup, Accordion } from 'react-bootstrap';

type Props = {
  readonly handleOptionalItem: (e: React.SyntheticEvent) => void;
  readonly hidden: boolean;
};

const OptionalItems = ({ hidden, handleOptionalItem }: Props) => {
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
                  <ListGroup.Item onClick={(e) => handleOptionalItem(e)}>Dragons Ships</ListGroup.Item>
                  <ListGroup.Item onClick={(e) => handleOptionalItem(e)}>Landpads</ListGroup.Item>
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
