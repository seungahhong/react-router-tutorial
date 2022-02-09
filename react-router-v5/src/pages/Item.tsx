import React from 'react';

type ItemProps = {
  id: string;
};

const Item = ({ id }: ItemProps) => {
  return <h1>{`Item ${id}`}</h1>;
};

Item.defaultProps = {};

export default Item;
