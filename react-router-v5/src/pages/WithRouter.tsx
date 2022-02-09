import React from 'react';
import { RouteComponentProps } from 'react-router';
import { withRouter } from 'react-router-dom';

const WithRouter = ({ match, location, history }: RouteComponentProps) => {
  return (
    <>
      <h1>WithRouter</h1>
      <p>{match.path}</p>
      <p>{location.pathname}</p>
      <p>{history.length}</p>
    </>
  );
};

WithRouter.defaultProps = {};

export default withRouter(WithRouter);
