import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { Nil } from '../types';

type GroupItemProps = {
  title: Nil<string>;
  year: Nil<string | number>;
  details: Nil<string>;
};

const GroupItem: React.FC<GroupItemProps> = ({ title, year, details }) => {
  return (
    <ListGroup.Item>
      <Card.Body>
        <Card.Title>
          {title} / {year}
        </Card.Title>
        <Card.Text>{details}</Card.Text>
      </Card.Body>
    </ListGroup.Item>
  );
};

export default GroupItem;
