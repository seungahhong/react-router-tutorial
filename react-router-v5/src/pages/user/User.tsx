import React from 'react';
import { Link, Route, useParams, useRouteMatch } from 'react-router-dom';
import UserAbout from './About';
import UserMain from './Main';

type UserProps = {
  id: string;
};

const User = () => {
  const match = useRouteMatch();
  const { id } = useParams<UserProps>();

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
        <UserMain />
      </Route>
      <Route path={`${match.path}/about`} exact>
        <UserAbout />
      </Route>
    </>
  );
};

User.defaultProps = {};

export default User;
