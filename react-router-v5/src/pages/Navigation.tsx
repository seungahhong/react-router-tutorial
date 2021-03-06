import React from 'react';
import { useHistory } from 'react-router';

const Navigation = () => {
  const history = useHistory();

  return (
    <div>
      <button
        onClick={() => {
          history.push('/');
        }}
      >
        Home
      </button>
      <button
        onClick={() => {
          history.goBack();
        }}
      >
        Go -1
      </button>
      <button
        onClick={() => {
          history.go(-2);
        }}
      >
        Go -2
      </button>
      <button
        onClick={() => {
          history.push('/about');
        }}
      >
        Go to about
      </button>
      <button
        onClick={() => {
          history.replace('Item/2');
        }}
      >
        Replace to Item
      </button>
    </div>
  );
};

Navigation.defaultProps = {};

export default Navigation;
