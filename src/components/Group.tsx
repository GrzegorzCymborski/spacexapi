import React from 'react';
import { Row, Col, Card, ListGroup } from 'react-bootstrap';

type Props = {
  title: string;
  selectable?: boolean;
  children: React.ReactChild | React.ReactChild[];
};

const Group: React.FC<Props> = ({ title, children, selectable }) => {
  if (selectable)
    return (
      <Card border="0">
        <ListGroup variant="flush">{children}</ListGroup>
      </Card>
    );
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
