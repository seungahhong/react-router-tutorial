import React from 'react';
import { Link, Route, useRouteMatch } from 'react-router-dom';
import About from './About';
import Main from './Main';

type UserProps = {
  id: string;
};

const User = ({ id }: UserProps) => {
  const match = useRouteMatch();

  return (
    <>
      <h1>{`User ${id}`}</h1>
      <ul>
        <li>
          <Link to={`${match.url}`}>Main</Link>
        </li>
        <li>
          <Link to={`${match.url}/about`}>About</Link>
        </li>
      </ul>
      <Route path={match.path} exact>
        <Main />
      </Route>
      <Route path={`${match.path}/about`} exact>
        <About />
      </Route>
    </>
  );
};

User.defaultProps = {};

export default User;
