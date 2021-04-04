import React from 'react';
import { Row, Col, Card, ListGroup } from 'react-bootstrap';

type Props = {
  readonly title: string;
  readonly children: React.ReactChild | readonly React.ReactChild[];
};

const Group = ({ title, children }: Props) => {
  return (
    <Row className="d-flex flex-column align-items-center my-3">
      <Col xs={10}>
        <Card>
          <Card.Header>{title}</Card.Header>
          <ListGroup variant="flush">{children}</ListGroup>
        </Card>
      </Col>
    </Row>
  );
};

export default Group;
