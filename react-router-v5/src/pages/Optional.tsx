import React from 'react';
import { useParams } from 'react-router-dom';

type OptionalProps = {
  value: string;
};

const Optional = () => {
  const { value }: OptionalProps = useParams();

  return <h1>{`Optional ${value ? value : ''}`}</h1>;
};

Optional.defaultProps = {};

export default Optional;
