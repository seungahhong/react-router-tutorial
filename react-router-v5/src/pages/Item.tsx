import React from 'react';
import { useParams } from 'react-router-dom';

type ItemProps = {
  id: string;
};

const Item = () => {
  const { id }: ItemProps = useParams();

  return <h1>{`Item ${id}`}</h1>;
};

Item.defaultProps = {};

export default Item;
