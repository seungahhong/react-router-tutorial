import React from 'react';
import { useNavigate } from 'react-router';

const Navigation = () => {
  const navigation = useNavigate();

  return (
    <div>
      <button
        onClick={() => {
          navigation('/');
        }}
      >
        Home
      </button>
      <button
        onClick={() => {
          navigation(-1);
        }}
      >
        Go -1
      </button>
      <button
        onClick={() => {
          navigation(-2);
        }}
      >
        Go -2
      </button>
      <button
        onClick={() => {
          navigation('/about');
        }}
      >
        Go to about
      </button>
      <button
        onClick={() => {
          navigation('Item/2', {
            replace: true,
          });
        }}
      >
        Replace to Item
      </button>
    </div>
  );
};

Navigation.defaultProps = {};

export default Navigation;
