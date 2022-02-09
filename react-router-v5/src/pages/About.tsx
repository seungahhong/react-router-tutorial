import React from 'react';
import { useLocation } from 'react-router-dom';

const About = () => {
  const location = useLocation();

  return (
    <>
      <h1>About</h1>
      <p>{location.search}</p>
    </>
  );
};

About.defaultProps = {};

export default About;
