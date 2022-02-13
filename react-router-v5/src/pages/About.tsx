import React from 'react';
import { Prompt, useLocation } from 'react-router-dom';

const About = () => {
  const location = useLocation();

  return (
    <>
      <h1>About</h1>
      <p>{location.search}</p>
      <Prompt when={true} message="페이지를 떠나시겠습니까?" />
    </>
  );
};

About.defaultProps = {};

export default About;
