import React from 'react';
import { useLocation } from 'react-router-dom';
import { usePrompt } from '../utils/Block';

const About = () => {
  const location = useLocation();
  usePrompt('Leave screen?', true);

  return (
    <>
      <h1>About</h1>
      <p>{location.search}</p>
    </>
  );
};

About.defaultProps = {};

export default About;
